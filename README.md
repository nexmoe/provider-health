# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 365 🟢 operational · 47 🟡 degraded · 259 🔴 down · 0 ⚫ unknown

_Updated 2026-06-19 08:35 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (365)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.18% | 98.18% | 827 ms | ↑ 1.20x | 1 | 0s | 22d ago | 18m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1554 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.84% | 93.84% | 2355 ms | ↑ 1.82x | 3 | 0s | 13d ago | 22m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.54% | 72.71% | 72.71% | 917 ms | → 0.96x | 7 | 4m | 13d ago | 23m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 21.43% | 21.43% | 3173 ms | ↑ 1.65x | 4 | 0s | 9d ago | 24m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.47% | 97.47% | 4058 ms | ↑ 1.37x | 0 | — | — | 32m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 56.28% | 56.28% | 1810 ms | ↑ 1.16x | 0 | — | — | 21m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.88% | 99.88% | 99.88% | 1303 ms | → 1.03x | 1 | 0s | 14d ago | 15m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.87% | 97.87% | 3824 ms | ↑ 1.29x | 1 | 0s | 22d ago | 28m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.47% | 99.47% | 99.47% | 768 ms | ↓ 0.52x | 3 | 47m | 8d ago | 15m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.71% | 98.67% | 98.67% | 1128 ms | ↓ 0.86x | 5 | 0s | 10d ago | 23m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.82% | 98.82% | 2288 ms | ↑ 1.23x | 0 | — | — | 34m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.50% | 99.50% | 3690 ms | ↑ 1.13x | 1 | 0s | 29d ago | 34m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.30% | 99.30% | 391 ms | ↓ 0.28x | 0 | — | — | 17m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.26% | 95.26% | 2945 ms | ↑ 1.34x | 0 | — | — | 18m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2148 ms | ↑ 1.51x | 0 | — | — | 17m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.73% | 97.73% | 3512 ms | ↑ 1.46x | 0 | — | — | 18m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.44% | 92.44% | 3216 ms | ↑ 1.67x | 1 | 50m | 8d ago | 35m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.97% | 99.97% | 2223 ms | ↑ 1.44x | 0 | — | — | 17m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1548 ms | ↑ 1.54x | 0 | — | — | 15m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.65% | 98.65% | 1564 ms | ↑ 1.29x | 0 | — | — | 19m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.61% | 96.92% | 96.92% | 1724 ms | ↑ 1.08x | 1 | 8h 47m | 10d ago | 18m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.89% | 98.89% | 797 ms | ↓ 0.59x | 0 | — | — | 17m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 37.75% | 37.75% | 907 ms | ↑ 1.68x | 0 | — | — | 29m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1690 ms | ↑ 1.23x | 0 | — | — | 15m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.83% | 99.87% | 99.87% | 1761 ms | ↑ 1.73x | 2 | 10m | 10d ago | 18m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.98% | 96.98% | 2905 ms | ↑ 1.30x | 1 | 0s | 24d ago | 22m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.88% | 98.88% | 1114 ms | ↑ 1.22x | 2 | 15m | 10d ago | 31m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.97% | 99.97% | 1437 ms | ↑ 1.72x | 1 | 0s | 28d ago | 16m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.36% | 87.52% | 87.52% | 1982 ms | ↑ 1.92x | 2 | 1h 56m | 21d ago | 20m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1837 ms | → 1.02x | 1 | 0s | 28d ago | 16m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.54% | 99.69% | 99.69% | 1830 ms | ↓ 0.89x | 4 | 30m | 8d ago | 16m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.39% | 98.39% | 4357 ms | ↑ 1.46x | 1 | 60m | 29d ago | 20m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.21% | 98.21% | 522 ms | ↑ 1.74x | 0 | — | — | 18m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.89% | 85.89% | 2739 ms | ↑ 1.97x | 0 | — | — | 19m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.94% | 82.10% | 82.10% | 2580 ms | ↑ 1.35x | 1 | 0s | 8d ago | 23m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.72% | 97.72% | 1575 ms | ↑ 1.19x | 0 | — | — | 21m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.99% | 99.99% | 843 ms | ↑ 1.15x | 0 | — | — | 30m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3058 ms | ↑ 1.13x | 0 | — | — | 30m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.03% | 99.03% | 738 ms | ↑ 1.83x | 0 | — | — | 21m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.90% | 97.90% | 4204 ms | ↑ 1.12x | 1 | 0s | 25d ago | 33m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.35% | 96.35% | 1211 ms | ↑ 1.09x | 0 | — | — | 20m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.11% | 85.20% | 85.20% | 1819 ms | ↑ 1.11x | 9 | 6h 19m | 10d ago | 18m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1164 ms | → 1.01x | 0 | — | — | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2077 ms | ↑ 1.15x | 0 | — | — | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.85% | 99.85% | 1223 ms | ↑ 1.16x | 2 | 0s | 10d ago | 18m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 2243 ms | ↑ 1.05x | 0 | — | — | 30m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.82% | 99.82% | 615 ms | ↓ 0.37x | 1 | 51m | 19d ago | 15m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.85% | 99.85% | 4338 ms | ↑ 1.28x | 1 | 0s | 25d ago | 28m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.71% | 99.71% | 1021 ms | ↓ 0.87x | 1 | 0s | 18d ago | 18m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1286 ms | ↑ 1.21x | 0 | — | — | 15m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 30.51% | 30.51% | 1188 ms | ↑ 1.13x | 0 | — | — | 30m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.14% | 96.28% | 96.28% | 2342 ms | ↑ 1.23x | 1 | 12h 2m | 24d ago | 18m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.03% | 97.87% | 97.87% | 3790 ms | ↓ 0.69x | 13 | 48m | 16d ago | 19m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1239 ms | ↓ 0.72x | 0 | — | — | 17m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 492 ms | ↓ 0.54x | 0 | — | — | 17m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 100.00% | 97.51% | 97.51% | 2536 ms | ↑ 1.34x | 0 | — | — | 24m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.79% | 99.79% | 798 ms | → 1.01x | 4 | 0s | 9d ago | 16m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.74% | 96.74% | 824 ms | → 0.96x | 0 | — | — | 22m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.09% | 98.10% | 98.10% | 2065 ms | ↑ 1.05x | 1 | 21h 30m | 15d ago | 15m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1151 ms | → 1.00x | 0 | — | — | 15m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.14% | 55.14% | 1933 ms | ↑ 1.43x | 0 | — | — | 24m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 97.57% | 97.57% | 97.57% | 906 ms | → 0.98x | 2 | 4h 33m | 8d ago | 15m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 44.51% | 47.56% | 47.56% | 499 ms | ↓ 0.89x | 1 | 16d 18h | 28d ago | 24m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1868 ms | ↑ 1.66x | 1 | 0s | 28d ago | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3511 ms | → 1.03x | 0 | — | — | 29m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.17% | 97.17% | 1331 ms | ↓ 0.94x | 0 | — | — | 29m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.55% | 83.55% | 3459 ms | ↑ 1.54x | 0 | — | — | 23m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1171 ms | ↓ 0.72x | 0 | — | — | 17m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.71% | 98.71% | 2894 ms | ↑ 1.39x | 0 | — | — | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4404 ms | ↑ 1.39x | 1 | 0s | 28d ago | 15m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.95% | 92.95% | 744 ms | ↓ 0.95x | 1 | 0s | 25d ago | 24m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.67% | 98.67% | 1328 ms | ↑ 1.32x | 0 | — | — | 18m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.88% | 99.84% | 99.84% | 625 ms | ↑ 1.72x | 2 | 0s | 16d ago | 21m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.38% | 99.38% | 813 ms | ↓ 0.62x | 0 | — | — | 17m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2044 ms | → 1.02x | 0 | — | — | 15m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 97.96% | 97.96% | 2326 ms | ↓ 0.55x | 2 | 0s | 9d ago | 20m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 86.65% | 89.50% | 89.50% | 1585 ms | ↑ 1.44x | 2 | 1d 24h | 12d ago | 18m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.94% | 47.98% | 47.98% | 1935 ms | ↑ 1.49x | 1 | 0s | 10d ago | 24m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2423 ms | → 1.03x | 0 | — | — | 15m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.60% | 76.60% | 1341 ms | ↑ 1.39x | 0 | — | — | 23m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 965 ms | → 0.95x | 0 | — | — | 15m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.22% | 98.22% | 2684 ms | ↑ 1.34x | 0 | — | — | 21m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1022 ms | → 0.98x | 0 | — | — | 15m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2706 ms | ↑ 1.71x | 1 | 0s | 28d ago | 15m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.38% | 82.38% | 2372 ms | ↑ 1.49x | 2 | 0s | 10d ago | 23m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.88% | 62.82% | 62.82% | 645 ms | ↓ 0.92x | 2 | 0s | 8d ago | 23m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.04% | 98.04% | 1029 ms | ↑ 1.12x | 0 | — | — | 24m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.86% | 99.86% | 2335 ms | ↑ 1.30x | 1 | 0s | 28d ago | 16m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 60.76% | 60.76% | 1557 ms | ↓ 0.85x | 0 | — | — | 23m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.84% | 63.84% | 1972 ms | ↑ 1.28x | 0 | — | — | 24m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.23% | 99.23% | 1888 ms | ↑ 1.20x | 0 | — | — | 23m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 1100 ms | ↓ 0.51x | 0 | — | — | 20m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.59% | 99.59% | 641 ms | ↓ 0.84x | 1 | 0s | 20d ago | 23m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 86.68% | 86.68% | 86.68% | 2732 ms | ↓ 0.94x | 5 | 15h 33m | 8d ago | 15m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 19.84% | 19.84% | 2045 ms | ↑ 1.64x | 1 | 0s | 15d ago | 29m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.94% | 99.74% | 99.74% | 2759 ms | ↑ 1.21x | 1 | 0s | 30d ago | 33m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2240 ms | → 1.02x | 0 | — | — | 15m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.05% | 99.05% | 3994 ms | ↑ 1.17x | 1 | 29m | 25d ago | 33m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.18% | 98.18% | 4006 ms | ↑ 1.25x | 0 | — | — | 34m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.71% | 99.91% | 99.91% | 975 ms | ↑ 1.13x | 3 | 13m | 17d ago | 30m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 75.55% | 75.55% | 3143 ms | ↑ 1.41x | 0 | — | — | 21m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1070 ms | → 0.96x | 0 | — | — | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1310 ms | → 1.00x | 0 | — | — | 14m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.62% | 99.62% | 1674 ms | ↑ 1.45x | 1 | 2h 60m | 12d ago | 17m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1867 ms | ↑ 1.34x | 0 | — | — | 34m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 632 ms | ↓ 0.34x | 1 | 0s | 23d ago | 34m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.63% | 99.63% | 2558 ms | ↑ 1.37x | 1 | 0s | 10d ago | 32m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.62% | 89.62% | 1495 ms | ↓ 0.80x | 0 | — | — | 23m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 79.17% | 79.17% | 2253 ms | ↑ 1.10x | 0 | — | — | 20m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.80% | 99.80% | 909 ms | ↑ 1.25x | 1 | 0s | 22d ago | 33m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 667 ms | ↑ 1.23x | 0 | — | — | 17m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 84.89% | 84.89% | 2981 ms | ↑ 1.41x | 0 | — | — | 18m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2380 ms | ↑ 1.33x | 0 | — | — | 15m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2384 ms | ↑ 1.53x | 0 | — | — | 18m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.05% | 99.05% | 1044 ms | ↑ 1.49x | 0 | — | — | 24m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.47% | 97.47% | 2628 ms | ↑ 2.64x | 0 | — | — | 18m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.89% | 99.89% | 99.89% | 1817 ms | ↑ 1.28x | 1 | 0s | 13d ago | 15m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.88% | 99.94% | 99.94% | 1957 ms | ↑ 2.03x | 2 | 0s | 10d ago | 15m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2339 ms | ↑ 1.33x | 0 | — | — | 15m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.94% | 87.47% | 87.47% | 1323 ms | → 1.03x | 1 | 0s | 27d ago | 32m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 68.16% | 79.89% | 79.89% | 1315 ms | ↑ 1.09x | 2 | 4d 20h | 21d ago | 17m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.88% | 98.88% | 411 ms | ↑ 1.66x | 0 | — | — | 20m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.83% | 99.08% | 99.08% | 1323 ms | ↑ 1.24x | 3 | 0s | 12d ago | 17m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.99% | 98.99% | 3271 ms | ↑ 2.19x | 0 | — | — | 24m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 85.77% | 85.77% | 1628 ms | ↑ 1.47x | 0 | — | — | 18m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.54% | 97.63% | 97.63% | 498 ms | ↓ 0.86x | 2 | 4h 43m | 28d ago | 16m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.76% | 99.76% | 99.76% | 723 ms | ↑ 1.10x | 1 | 1h | 19d ago | 15m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.89% | 99.89% | 1723 ms | ↑ 1.33x | 2 | 11m | 20d ago | 15m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 23.66% | 23.66% | 2495 ms | ↑ 2.03x | 0 | — | — | 24m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1517 ms | ↑ 1.62x | 0 | — | — | 35m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2820 ms | ↑ 1.10x | 0 | — | — | 34m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.85% | 98.80% | 98.80% | 3238 ms | ↑ 1.68x | 15 | 43m | 16d ago | 20m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 750 ms | ↑ 1.16x | 0 | — | — | 32m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.11% | 98.11% | 942 ms | ↓ 0.62x | 0 | — | — | 22m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 97.86% | 19.70% | 19.70% | 623 ms | ↓ 0.37x | 7 | 1h 40m | 9d ago | 24m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 801 ms | ↑ 1.35x | 0 | — | — | 34m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.72% | 99.72% | 1658 ms | ↑ 1.08x | 4 | 8m | 13d ago | 28m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.74% | 98.74% | 4764 ms | ↑ 1.11x | 0 | — | — | 35m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1055 ms | ↓ 0.42x | 0 | — | — | 32m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2389 ms | ↑ 1.42x | 0 | — | — | 17m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.52% | 97.91% | 97.91% | 2051 ms | ↑ 1.27x | 126 | 29m | 9d ago | 32m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2822 ms | ↑ 1.15x | 0 | — | — | 29m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.35% | 99.35% | 2439 ms | ↑ 1.41x | 2 | 0s | 10d ago | 24m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.17% | 42.17% | 956 ms | ↑ 1.09x | 1 | 0s | 9d ago | 34m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.55% | 98.55% | 2544 ms | ↓ 0.58x | 0 | — | — | 21m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1212 ms | ↑ 1.05x | 0 | — | — | 32m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.46% | 99.46% | 2953 ms | ↑ 1.08x | 1 | 0s | 22d ago | 28m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1470 ms | ↑ 1.08x | 3 | 10m | 13d ago | 21m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.60% | 99.25% | 99.25% | 2284 ms | ↑ 1.67x | 3 | 30m | 9d ago | 33m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2588 ms | ↑ 1.15x | 0 | — | — | 23m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.68% | 99.68% | 725 ms | ↓ 0.49x | 0 | — | — | 18m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 524 ms | ↑ 1.06x | 0 | — | — | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 692 ms | → 1.01x | 0 | — | — | 33m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.38% | 61.38% | 1656 ms | ↑ 1.06x | 0 | — | — | 24m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.94% | 21.91% | 21.91% | 662 ms | ↓ 0.35x | 1 | 0s | 10d ago | 24m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.34% | 82.47% | 82.47% | 1690 ms | ↑ 2.10x | 3 | 8h 40m | 10d ago | 18m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2774 ms | ↑ 1.08x | 0 | — | — | 33m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 100.00% | 100.00% | 100.00% | 2493 ms | → 1.00x | 0 | — | — | 15m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.60% | 60.43% | 60.43% | 1104 ms | ↓ 0.41x | 3 | 40m | 9d ago | 24m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.18% | 80.17% | 80.17% | 2283 ms | ↑ 1.21x | 1 | 13h | 16d ago | 34m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1346 ms | ↑ 1.37x | 1 | 0s | 9d ago | 32m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1113 ms | → 1.00x | 0 | — | — | 33m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 44.87% | 44.87% | 196 ms | → 1.00x | 1 | 0s | 9d ago | 21m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1019 ms | ↑ 1.07x | 0 | — | — | 33m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1881 ms | ↑ 1.78x | 1 | 0s | 28d ago | 15m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1057 ms | ↑ 1.17x | 1 | 0s | 22d ago | 18m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.94% | 99.04% | 99.04% | 3840 ms | ↑ 1.40x | 1 | 0s | 9d ago | 32m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.51% | 98.51% | 1820 ms | ↑ 1.27x | 0 | — | — | 18m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.54% | 96.54% | 1420 ms | ↑ 1.76x | 2 | 45m | 8d ago | 18m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.16% | 70.16% | 1341 ms | ↑ 1.37x | 0 | — | — | 23m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1323 ms | ↑ 1.07x | 0 | — | — | 15m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1380 ms | → 1.00x | 0 | — | — | 15m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.77% | 81.08% | 81.08% | 3327 ms | ↑ 1.68x | 2 | 26m | 9d ago | 23m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2167 ms | ↑ 1.28x | 0 | — | — | 32m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 868 ms | ↓ 0.32x | 1 | 0s | 28d ago | 16m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.66% | 92.66% | 1590 ms | → 0.99x | 3 | 0s | 17d ago | 22m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.87% | 99.87% | 615 ms | ↓ 0.63x | 2 | 0s | 10d ago | 28m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 32.91% | 21.17% | 21.17% | 2752 ms | → 1.04x | 2 | 10d 2h | 10d ago | 18m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.77% | 85.52% | 85.52% | 2273 ms | ↑ 1.06x | 4 | 0s | 10d ago | 33m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.59% | 85.59% | 1363 ms | ↑ 2.65x | 0 | — | — | 31m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.12% | 91.12% | 482 ms | ↑ 1.31x | 0 | — | — | 21m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.31% | 99.31% | 2387 ms | ↑ 1.17x | 0 | — | — | 23m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.81% | 67.81% | 1582 ms | ↑ 1.66x | 1 | 0s | 21d ago | 23m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.72% | 96.72% | 1558 ms | ↑ 1.06x | 0 | — | — | 23m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.88% | 99.86% | 99.86% | 2019 ms | ↑ 1.72x | 2 | 0s | 22d ago | 15m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 21.51% | 21.51% | 2666 ms | ↑ 1.57x | 1 | 0s | 15d ago | 29m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2734 ms | ↑ 1.12x | 0 | — | — | 33m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4265 ms | ↑ 1.24x | 0 | — | — | 16m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.67% | 58.67% | 755 ms | ↑ 1.11x | 0 | — | — | 24m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.83% | 98.41% | 98.41% | 2418 ms | ↑ 1.48x | 3 | 0s | 9d ago | 20m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 41.32% | 41.32% | 3437 ms | ↑ 1.43x | 1 | 0s | 27d ago | 23m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.03% | 99.03% | 99.03% | 3074 ms | → 1.02x | 1 | 1h 58m | 8d ago | 15m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.23% | 99.23% | 4324 ms | ↑ 1.28x | 1 | 0s | 21d ago | 28m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3543 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.88% | 99.88% | 2569 ms | ↑ 1.28x | 1 | 30m | 27d ago | 22m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.20% | 92.04% | 92.04% | 2496 ms | → 1.05x | 4 | 9h 43m | 18d ago | 20m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.26% | 99.26% | 2344 ms | ↑ 1.20x | 0 | — | — | 23m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.89% | 79.89% | 1243 ms | ↓ 0.53x | 0 | — | — | 23m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 190 ms | → 1.00x | 1 | 0s | 22d ago | 33m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2760 ms | ↑ 1.76x | 0 | — | — | 15m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2736 ms | ↑ 1.36x | 0 | — | — | 32m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1404 ms | → 0.95x | 1 | 0s | 28d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.13% | 91.48% | 91.48% | 2773 ms | ↓ 0.89x | 15 | 0s | 10d ago | 20m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.30% | 80.30% | 2675 ms | ↑ 1.43x | 1 | 0s | 24d ago | 23m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.77% | 86.77% | 2613 ms | ↓ 0.55x | 0 | — | — | 23m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.93% | 99.93% | 1759 ms | ↑ 1.39x | 1 | 0s | 28d ago | 16m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.17% | 96.17% | 2274 ms | ↑ 1.65x | 0 | — | — | 24m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1668 ms | ↑ 1.39x | 0 | — | — | 31m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.61% | 98.61% | 865 ms | ↑ 1.43x | 0 | — | — | 21m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 23.24% | 23.24% | 925 ms | ↑ 2.04x | 0 | — | — | 24m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 940 ms | ↓ 0.94x | 0 | — | — | 20m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.83% | 61.83% | 2598 ms | ↑ 1.23x | 0 | — | — | 23m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 76.37% | 34.13% | 34.13% | 976 ms | → 0.98x | 1 | 6d 21h | 30d ago | 33m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.81% | 92.81% | 29 ms | ↑ 1.05x | 0 | — | — | 18m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.89% | 98.89% | 1845 ms | ↑ 1.47x | 1 | 5h 60m | 20d ago | 31m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 19.82% | 19.82% | 1605 ms | ↑ 1.56x | 0 | — | — | 31m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 965 ms | ↓ 0.65x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 4128 ms | ↑ 1.43x | 0 | — | — | 17m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 657 ms | ↓ 0.59x | 0 | — | — | 17m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.51% | 93.51% | 4699 ms | ↑ 1.11x | 0 | — | — | 33m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.57% | 99.57% | 2108 ms | ↑ 1.22x | 1 | 1h 20m | 21d ago | 32m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2232 ms | ↑ 1.20x | 1 | 0s | 15d ago | 23m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.24% | 99.24% | 1135 ms | ↑ 1.16x | 0 | — | — | 21m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.89% | 99.89% | 1499 ms | ↓ 0.93x | 1 | 0s | 28d ago | 16m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.58% | 99.58% | 2234 ms | ↑ 1.22x | 1 | 0s | 30d ago | 33m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 2321 ms | ↑ 1.58x | 0 | — | — | 31m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 661 ms | ↑ 1.32x | 0 | — | — | 35m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.83% | 62.29% | 62.29% | 2778 ms | ↑ 1.07x | 3 | 0s | 10d ago | 33m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.77% | 98.77% | 2977 ms | ↑ 1.14x | 0 | — | — | 18m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.75% | 96.75% | 3468 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 633 ms | ↓ 0.30x | 0 | — | — | 15m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.81% | 99.81% | 702 ms | → 1.04x | 1 | 20m | 22d ago | 18m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.70% | 88.70% | 2272 ms | ↑ 1.39x | 0 | — | — | 22m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.83% | 99.83% | 934 ms | → 0.97x | 0 | — | — | 18m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1836 ms | → 1.04x | 0 | — | — | 17m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2209 ms | ↑ 1.21x | 0 | — | — | 33m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1465 ms | ↑ 1.15x | 0 | — | — | 34m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.88% | 99.93% | 99.93% | 1618 ms | ↑ 1.17x | 2 | 0s | 13d ago | 16m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1405 ms | ↑ 1.20x | 0 | — | — | 34m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 74.74% | 74.74% | 910 ms | ↓ 0.85x | 1 | 0s | 28d ago | 21m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.88% | 99.88% | 2895 ms | ↑ 1.09x | 1 | 0s | 24d ago | 30m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 889 ms | → 1.03x | 0 | — | — | 31m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.69% | 84.69% | 1929 ms | → 1.02x | 1 | 0s | 18d ago | 29m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 25.09% | 25.09% | 2648 ms | ↑ 1.30x | 1 | 0s | 16d ago | 35m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.59% | 98.86% | 98.86% | 1951 ms | ↑ 1.31x | 4 | 15m | 8d ago | 22m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.14% | 98.14% | 2701 ms | ↑ 1.42x | 3 | 0s | 21d ago | 18m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.27% | 92.27% | 4478 ms | ↑ 1.34x | 2 | 25m | 8d ago | 35m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 98.84% | 97.11% | 97.11% | 1869 ms | ↑ 1.47x | 15 | 10m | 9d ago | 17m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.86% | 99.86% | 1603 ms | ↑ 1.66x | 2 | 30m | 16d ago | 15m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.64% | 97.64% | 3681 ms | ↑ 2.15x | 1 | 0s | 13d ago | 17m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.82% | 98.82% | 1057 ms | ↑ 1.29x | 0 | — | — | 23m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.73% | 98.73% | 1892 ms | → 1.00x | 0 | — | — | 31m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.83% | 99.59% | 99.59% | 3039 ms | ↑ 1.45x | 2 | 15m | 25d ago | 16m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 100.00% | 97.95% | 97.95% | 4254 ms | ↑ 1.31x | 0 | — | — | 20m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1134 ms | ↑ 1.96x | 1 | 0s | 28d ago | 16m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2849 ms | ↑ 1.39x | 0 | — | — | 15m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.08% | 97.08% | 97.08% | 237 ms | ↓ 0.17x | 2 | 6h 36m | 10d ago | 15m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 30.14% | 30.14% | 1262 ms | ↑ 1.28x | 0 | — | — | 31m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1600 ms | ↑ 1.72x | 1 | 0s | 26d ago | 22m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1938 ms | ↑ 1.47x | 0 | — | — | 31m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.67% | 88.67% | 4053 ms | ↑ 1.46x | 0 | — | — | 23m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 13.25% | 13.25% | 2529 ms | → 1.00x | 0 | — | — | 29m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1855 ms | ↑ 1.21x | 1 | 0s | 9d ago | 31m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 19.82% | 19.82% | 2031 ms | → 1.03x | 0 | — | — | 33m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1026 ms | ↑ 1.11x | 0 | — | — | 17m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.14% | 97.14% | 2787 ms | ↑ 1.52x | 0 | — | — | 18m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2725 ms | ↑ 1.25x | 1 | 0s | 24d ago | 31m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1167 ms | → 0.98x | 2 | 10m | 9d ago | 32m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 19.62% | 19.62% | 2433 ms | ↑ 1.49x | 0 | — | — | 24m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.48% | 99.69% | 99.69% | 3061 ms | ↓ 0.71x | 5 | 24m | 11d ago | 16m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.65% | 99.76% | 99.76% | 2887 ms | ↑ 1.16x | 1 | 2h 18m | 27d ago | 20m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2311 ms | ↑ 1.28x | 0 | — | — | 33m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2245 ms | → 1.00x | 0 | — | — | 15m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 818 ms | ↓ 0.54x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 324 ms | → 1.00x | 0 | — | — | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.63% | 98.63% | 1808 ms | ↑ 1.39x | 0 | — | — | 18m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 2297 ms | ↑ 1.19x | 1 | 0s | 16d ago | 29m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 2996 ms | ↓ 0.57x | 1 | 0s | 19d ago | 24m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.13% | 99.13% | 1974 ms | ↑ 1.27x | 1 | 0s | 16d ago | 33m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 938 ms | ↑ 2.01x | 0 | — | — | 31m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 428 ms | → 1.00x | 0 | — | — | 15m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.83% | 99.73% | 99.73% | 3433 ms | ↑ 1.18x | 3 | 0s | 2d ago | 33m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.76% | 98.86% | 98.36% | 98.36% | 4531 ms | → 1.03x | 20 | 0s | 4d ago | 35m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.66% | 98.87% | 98.87% | 3216 ms | ↑ 1.21x | 6 | 0s | 3d ago | 34m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.94% | 99.53% | 99.53% | 3658 ms | ↑ 1.08x | 1 | 0s | 4d ago | 33m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.32% | 99.44% | 99.44% | 3172 ms | ↑ 1.15x | 5 | 38m | 4d ago | 34m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.83% | 43.60% | 43.60% | 1543 ms | ↑ 1.11x | 3 | 0s | 12h ago | 33m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.76% | 96.63% | 31.26% | 31.26% | 2096 ms | ↑ 1.23x | 10 | 1h 59m | 5d ago | 30m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 99.94% | 18.98% | 18.98% | 741 ms | → 0.97x | 1 | 0s | 6d ago | 32m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.89% | 89.29% | 89.29% | 2076 ms | ↑ 1.41x | 2 | 0s | 6d ago | 32m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.89% | 99.66% | 99.66% | 1327 ms | ↑ 1.49x | 2 | 0s | 5d ago | 31m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.76% | 99.94% | 99.95% | 99.95% | 2305 ms | ↑ 1.20x | 1 | 0s | 1d ago | 29m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.76% | 99.36% | 97.58% | 97.58% | 2310 ms | ↑ 1.29x | 9 | 7m | 4d ago | 21m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.76% | 99.88% | 99.12% | 99.12% | 1407 ms | → 1.02x | 2 | 0s | 6d ago | 22m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 99.76% | 42.48% | 67.73% | 67.73% | 687 ms | → 1.01x | 4 | 4d 7h | 6d ago | 23m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.76% | 99.48% | 52.84% | 52.84% | 1250 ms | → 0.97x | 5 | 24m | 3d ago | 24m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.76% | 99.94% | 90.31% | 90.31% | 2276 ms | ↑ 1.17x | 1 | 0s | 4d ago | 23m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.76% | 99.54% | 21.55% | 21.55% | 1805 ms | ↑ 1.17x | 4 | 30m | 3d ago | 24m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.76% | 99.36% | 98.46% | 98.46% | 1946 ms | ↑ 1.32x | 2 | 2h 9m | 2d ago | 22m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.88% | 20.68% | 20.68% | 1291 ms | ↑ 1.18x | 2 | 0s | 3d ago | 24m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 98.33% | 96.67% | 96.67% | 4592 ms | ↑ 1.25x | 11 | 47m | 6d ago | 24m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.76% | 99.94% | 98.35% | 98.35% | 2301 ms | ↑ 1.35x | 1 | 0s | 18h ago | 22m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.76% | 99.94% | 96.60% | 96.60% | 3231 ms | ↑ 1.62x | 1 | 0s | 9h ago | 24m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.76% | 99.94% | 21.64% | 21.64% | 3862 ms | ↑ 1.71x | 1 | 0s | 9h ago | 24m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 52.23% | 65.41% | 65.41% | 1469 ms | ↑ 1.18x | 2 | 7d 1h | 3d ago | 18m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.65% | 99.59% | 99.59% | 1490 ms | ↑ 1.36x | 4 | 14m | 4d ago | 17m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.88% | 99.94% | 99.94% | 1168 ms | ↑ 1.12x | 2 | 0s | 6d ago | 15m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 99.83% | 98.91% | 98.91% | 3236 ms | ↑ 1.13x | 3 | 0s | 23h ago | 17m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.75% | 97.56% | 98.68% | 98.68% | 944 ms | ↑ 1.79x | 7 | 2h 8m | 2d ago | 17m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.77% | 99.77% | 99.77% | 410 ms | ↓ 0.86x | 2 | 0s | 4d ago | 17m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 89.42% | 84.68% | 84.68% | 1324 ms | ↓ 0.48x | 14 | 4h 57m | 4d ago | 16m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.75% | 98.75% | 98.75% | 1714 ms | ↑ 1.32x | 3 | 1h 47m | 7d ago | 15m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.75% | 99.88% | 99.93% | 99.93% | 2118 ms | ↑ 1.82x | 2 | 0s | 4d ago | 15m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.88% | 99.93% | 99.93% | 1787 ms | ↑ 1.54x | 2 | 0s | 5d ago | 16m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.75% | 99.54% | 99.58% | 99.58% | 2790 ms | ↑ 1.16x | 8 | 0s | 6d ago | 16m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.75% | 99.94% | 98.13% | 98.13% | 1686 ms | ↑ 1.30x | 1 | 0s | 1d ago | 18m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.42% | 99.42% | 99.42% | 995 ms | → 0.97x | 2 | 45m | 7d ago | 17m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.75% | 96.34% | 97.36% | 97.36% | 697 ms | ↓ 0.72x | 2 | 12h 5m | 1d ago | 17m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.88% | 99.88% | 99.88% | 1746 ms | ↑ 1.07x | 1 | 0s | 7d ago | 17m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.54% | 97.49% | 97.49% | 483 ms | ↓ 0.40x | 5 | 16m | 7d ago | 18m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.52% | 99.52% | 2914 ms | ↑ 1.71x | 1 | 0s | 3d ago | 17m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.93% | 99.93% | 2452 ms | ↑ 2.00x | 1 | 0s | 6d ago | 15m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.42% | 99.77% | 99.77% | 4656 ms | ↑ 1.45x | 6 | 20m | 4d ago | 20m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.75% | 99.30% | 96.71% | 96.71% | 1687 ms | ↑ 1.10x | 5 | 38m | 7d ago | 18m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 99.69% | 99.69% | 99.69% | 99.69% | 2390 ms | → 1.00x | 1 | 0s | 5d ago | 15m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.52% | 99.71% | 96.05% | 96.05% | 3413 ms | ↑ 1.20x | 5 | 0s | 2d ago | 34m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.52% | 99.77% | 79.41% | 79.41% | 2019 ms | → 1.00x | 4 | 0s | 1d ago | 29m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.52% | 98.91% | 98.99% | 98.99% | 4042 ms | ↑ 1.08x | 11 | 16m | 3d ago | 31m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.52% | 99.83% | 19.73% | 19.73% | 3872 ms | ↑ 1.40x | 3 | 0s | 2d ago | 28m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.52% | 99.71% | 19.81% | 19.81% | 2174 ms | ↑ 1.06x | 5 | 0s | 2h ago | 32m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.52% | 98.97% | 99.16% | 99.16% | 4181 ms | ↑ 1.13x | 10 | 18m | 3d ago | 31m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.77% | 66.76% | 66.76% | 1353 ms | → 0.97x | 3 | 7m | 3d ago | 23m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.51% | 99.71% | 90.46% | 90.46% | 799 ms | → 0.99x | 5 | 0s | 21h ago | 22m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.51% | 99.48% | 98.92% | 98.92% | 2499 ms | ↓ 0.60x | 5 | 24m | 3d ago | 21m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.51% | 99.60% | 68.20% | 68.20% | 1091 ms | ↑ 1.45x | 5 | 12m | 4d ago | 23m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.51% | 99.77% | 22.38% | 22.38% | 1466 ms | ↑ 1.18x | 4 | 0s | 9h ago | 24m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.51% | 99.71% | 98.63% | 98.63% | 1363 ms | ↑ 1.92x | 4 | 7m | 6d ago | 21m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.51% | 99.88% | 96.74% | 96.74% | 888 ms | ↑ 1.25x | 2 | 0s | 13h ago | 21m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.51% | 99.83% | 53.15% | 53.15% | 640 ms | ↑ 1.05x | 3 | 0s | 8h ago | 20m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.51% | 99.19% | 98.59% | 98.59% | 1382 ms | ↓ 0.57x | 4 | 60m | 1h ago | 17m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.51% | 97.97% | 96.26% | 96.26% | 2064 ms | ↑ 1.29x | 12 | 45m | 6d ago | 17m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.51% | 99.55% | 99.55% | 99.55% | 1638 ms | → 1.02x | 2 | 0s | 4d ago | 15m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.51% | 99.68% | 99.68% | 99.68% | 1821 ms | ↑ 1.12x | 1 | 30m | 6d ago | 15m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.51% | 99.77% | 99.61% | 99.61% | 1989 ms | ↓ 0.54x | 4 | 0s | 19h ago | 16m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.51% | 42.50% | 46.44% | 46.44% | 692 ms | → 1.01x | 4 | 4d 7h | 5d ago | 16m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.51% | 99.76% | 99.76% | 99.76% | 1666 ms | ↓ 0.82x | 3 | 0s | 1d ago | 15m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.51% | 99.77% | 97.87% | 97.87% | 619 ms | ↓ 0.77x | 4 | 0s | 23h ago | 18m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.51% | 98.67% | 92.15% | 92.15% | 768 ms | → 1.04x | 10 | 29m | 15h ago | 18m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.51% | 99.88% | 87.15% | 87.15% | 1189 ms | → 1.00x | 2 | 0s | 5d ago | 17m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.51% | 99.49% | 99.49% | 99.49% | 1161 ms | ↓ 0.72x | 5 | 12m | 1d ago | 15m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.51% | 99.61% | 99.61% | 99.61% | 1489 ms | → 1.00x | 2 | 0s | 1d ago | 15m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.28% | 98.80% | 86.71% | 86.71% | 4005 ms | ↑ 1.34x | 21 | 0s | 2h ago | 35m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.27% | 98.67% | 67.07% | 67.07% | 4706 ms | → 1.04x | 20 | 5m | 2d ago | 23m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.27% | 99.13% | 91.35% | 91.35% | 1609 ms | ↑ 1.12x | 14 | 2m | 5d ago | 23m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.26% | 96.23% | 96.25% | 96.25% | 1639 ms | ↓ 0.75x | 10 | 2h 33m | 2d ago | 18m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.26% | 99.30% | 98.73% | 98.73% | 2437 ms | ↑ 1.20x | 5 | 42m | 2d ago | 17m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.26% | 82.65% | 82.20% | 82.20% | 4183 ms | ↓ 0.70x | 36 | 3h 12m | 1h ago | 19m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.03% | 99.66% | 55.25% | 55.25% | 1677 ms | ↑ 1.24x | 6 | 0s | 23h ago | 30m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.03% | 98.28% | 98.92% | 98.92% | 1908 ms | ↑ 1.09x | 21 | 12m | 2d ago | 29m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.03% | 99.14% | 68.79% | 68.79% | 3946 ms | → 0.98x | 14 | 2m | 3d ago | 29m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.02% | 96.64% | 95.92% | 95.92% | 3635 ms | ↑ 1.33x | 5 | 4h 7m | 2d ago | 22m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.02% | 97.21% | 97.79% | 97.79% | 4506 ms | ↑ 1.35x | 24 | 28m | 2d ago | 20m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.02% | 99.77% | 99.86% | 99.86% | 1243 ms | ↓ 0.75x | 1 | 1h 9m | 3d ago | 17m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.02% | 99.07% | 99.12% | 99.12% | 2097 ms | ↑ 1.57x | 9 | 21m | 2d ago | 17m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (47)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.79% | 98.62% | 18.03% | 18.03% | 3760 ms | ↑ 1.38x | 11 | 29m | 19h ago | 28m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.78% | 99.71% | 99.76% | 99.76% | 2131 ms | ↑ 1.19x | 1 | 1h 41m | 6d ago | 20m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.77% | 99.71% | 95.99% | 95.99% | 1354 ms | ↑ 1.63x | 1 | 2h 1m | 18h ago | 15m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.77% | 99.71% | 98.13% | 98.13% | 518 ms | ↓ 0.52x | 1 | 1h 40m | 1d ago | 18m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.77% | 99.65% | 99.44% | 99.44% | 4831 ms | ↑ 1.60x | 5 | 4m | 1d ago | 17m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.53% | 98.72% | 98.63% | 98.63% | 3360 ms | ↑ 1.53x | 22 | 0s | 2d ago | 15m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 98.53% | 97.21% | 97.97% | 97.97% | 1789 ms | ↑ 2.34x | 8 | 1h 60m | 5d ago | 15m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.29% | 98.50% | 86.32% | 86.32% | 4582 ms | ↑ 1.10x | 25 | 1m | 19h ago | 24m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.05% | 97.57% | 86.05% | 86.05% | 4773 ms | ↑ 1.07x | 30 | 11m | 5h ago | 21m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.83% | 98.34% | 85.79% | 85.79% | 4397 ms | → 1.02x | 26 | 3m | 19h ago | 31m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.83% | 99.49% | 99.61% | 99.61% | 2600 ms | ↑ 1.14x | 1 | 3h 60m | 2d ago | 31m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.58% | 98.45% | 19.25% | 19.25% | 4537 ms | ↑ 1.24x | 27 | 0s | 11h ago | 28m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.30% | 98.20% | 98.56% | 98.56% | 2172 ms | ↑ 1.49x | 7 | 1h 16m | 12h ago | 17m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 97.30% | 97.39% | 98.32% | 98.32% | 4060 ms | ↑ 1.36x | 18 | 43m | 6d ago | 20m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.30% | 98.84% | 50.36% | 50.36% | 4261 ms | ↑ 2.44x | 18 | 3m | 18h ago | 20m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.10% | 98.11% | 96.50% | 96.50% | 1811 ms | ↑ 1.32x | 8 | 1h 10m | 12h ago | 29m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.06% | 97.31% | 97.31% | 97.31% | 4562 ms | → 1.01x | 12 | 5m | 18h ago | 15m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 96.81% | 99.19% | 98.68% | 98.68% | 1566 ms | ↓ 0.79x | 2 | 2h 55m | 5d ago | 17m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 96.62% | 98.86% | 99.71% | 99.71% | 181 ms | ↑ 1.26x | 13 | 12m | 2d ago | 32m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 96.39% | 99.09% | 99.60% | 99.60% | 3540 ms | ↑ 1.08x | 15 | 2m | 3h ago | 33m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.38% | 97.42% | 74.56% | 74.56% | 4549 ms | ↑ 1.06x | 39 | 4m | 19h ago | 29m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 96.32% | 97.10% | 97.10% | 97.10% | 3834 ms | ↑ 1.07x | 11 | 9m | 22h ago | 15m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.89% | 97.13% | 98.53% | 98.53% | 4451 ms | ↑ 1.16x | 48 | 1m | 1d ago | 28m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.41% | 92.80% | 41.87% | 41.87% | 3330 ms | → 1.00x | 61 | 26m | 2d ago | 33m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.37% | 96.06% | 82.72% | 82.72% | 4848 ms | → 1.03x | 63 | 2m | 20h ago | 22m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 94.87% | 95.83% | 83.64% | 83.64% | 4559 ms | → 0.99x | 61 | 5m | 16h ago | 20m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.70% | 98.69% | 99.74% | 99.74% | 1989 ms | ↑ 1.18x | 3 | 2h 10m | 5d ago | 33m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 94.69% | 95.65% | 17.92% | 17.92% | 2685 ms | ↑ 1.08x | 71 | 2m | 1d ago | 29m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.69% | 96.11% | 19.15% | 19.15% | 877 ms | ↓ 0.77x | 65 | 55s | 2d ago | 30m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.63% | 93.92% | 72.66% | 72.66% | 1915 ms | ↑ 1.30x | 17 | 1h 47m | 2d ago | 23m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.96% | 98.40% | 48.14% | 48.14% | 2403 ms | ↑ 1.18x | 6 | 1h 23m | 2d ago | 29m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.95% | 97.98% | 97.88% | 97.88% | 1768 ms | ↓ 0.85x | 2 | 6h 16m | 4d ago | 23m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.54% | 88.57% | 20.37% | 20.37% | 4531 ms | ↓ 0.94x | 153 | 8m | 3h ago | 24m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.50% | 88.91% | 57.25% | 57.25% | 4184 ms | ↑ 1.07x | 152 | 8m | 4h ago | 19m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.47% | 96.92% | 99.59% | 99.59% | 4175 ms | ↑ 1.36x | 3 | 6h 10m | 5d ago | 34m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 85.05% | 36.23% | 25.52% | 25.52% | 3173 ms | ↑ 1.12x | 190 | 2h | 1h ago | 15m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 84.56% | 92.58% | 92.58% | 92.58% | 1691 ms | → 1.00x | 4 | 6h 14m | 2d ago | 17m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 82.85% | 95.07% | 99.31% | 99.31% | 3970 ms | ↑ 1.26x | 12 | 2h 27m | 4d ago | 28m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 81.86% | 87.80% | 92.69% | 92.69% | 3476 ms | ↓ 0.74x | 88 | 32m | 1d ago | 17m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 81.37% | 74.91% | 85.18% | 85.18% | 1091 ms | ↑ 1.78x | 7 | 1d 2h | 2d ago | 15m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.91% | 69.97% | 62.53% | 62.53% | 4769 ms | → 0.99x | 322 | 18m | 1h ago | 30m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 70.24% | 88.34% | 35.38% | 35.38% | 1979 ms | ↑ 1.08x | 14 | 5h 29m | 1d ago | 24m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 68.05% | 70.14% | 23.99% | 23.99% | 4680 ms | → 1.03x | 302 | 20m | 5h ago | 23m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 51.96% | 35.88% | 35.88% | 35.88% | 1296 ms | ↓ 0.92x | 1 | 13d 23h | 18d ago | 15m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 47.58% | 57.80% | 88.55% | 88.55% | 2122 ms | ↑ 1.56x | 1 | 12d 20h | 16d ago | 31m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 40.49% | 9.60% | 30.98% | 30.98% | 2149 ms | → 1.00x | 1 | 27d 2h | 30d ago | 23m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 31.37% | 69.18% | 92.16% | 92.16% | 4666 ms | ↑ 2.10x | 3 | 2d 24h | 8d ago | 20m ago |

</details>

<details open>
<summary><strong>🔴 Down (259)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.79% | 89.46% | 89.46% | 89.46% | 4620 ms | → 1.01x | 14 | 2h 34m | 15m ago | 15m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 95.83% | 97.10% | 89.01% | 89.01% | 4770 ms | ↑ 1.21x | 9 | 38m | 17m ago | 17m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 91.18% | 96.28% | 97.11% | 97.11% | 1932 ms | → 0.99x | 11 | 1h 51m | 12h ago | 16m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 87.25% | 91.61% | 91.62% | 91.62% | 1431 ms | ↑ 1.22x | 58 | 37m | 20h ago | 15m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 80.39% | 81.72% | 81.72% | 81.72% | 4316 ms | → 0.97x | 97 | 48m | 1h ago | 14m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 75.85% | 34.64% | 31.81% | 31.81% | 2030 ms | ↑ 1.14x | 2 | 9d 19h | 2d ago | 24m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 75.74% | 94.25% | 96.51% | 96.51% | 647 ms | ↓ 0.66x | 1 | 1d 16h | 2d ago | 17m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 68.36% | 82.41% | 97.24% | 97.24% | 4647 ms | ↑ 1.25x | 167 | 22m | 1h ago | 31m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 61.52% | 89.48% | 93.75% | 93.75% | 856 ms | ↑ 1.06x | 29 | 2h 11m | 3d ago | 15m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 41.67% | 86.09% | 91.78% | 91.78% | 2205 ms | ↑ 2.01x | 2 | 2d 1h | 4d ago | 15m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 39.76% | 9.41% | 74.52% | 74.52% | 3857 ms | → 1.00x | 2 | 13d 13h | 34m ago | 34m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 35.78% | 84.66% | 86.55% | 86.55% | 4947 ms | ↑ 2.42x | 67 | 1h 12m | 1h ago | 17m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 31.57% | 82.10% | 79.10% | 79.10% | 162 ms | ↑ 1.10x | 5 | 1d 1h | 5d ago | 34m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 26.47% | 41.78% | 41.78% | 41.78% | 815 ms | → 0.98x | 2 | 2d 13h | 5d ago | 16m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 17.65% | 60.95% | 58.51% | 58.51% | 4496 ms | ↑ 1.42x | 3 | 1d 21h | 6d ago | 17m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 17.65% | 80.19% | 87.74% | 87.74% | 4442 ms | ↑ 2.60x | 4 | 1d 10h | 6d ago | 17m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 17.65% | 80.36% | 86.10% | 86.10% | 3913 ms | ↑ 2.29x | 4 | 1d 10h | 6d ago | 17m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 17.65% | 80.42% | 87.64% | 87.64% | 3510 ms | ↑ 2.78x | 3 | 1d 21h | 6d ago | 17m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 17.16% | 33.66% | 32.30% | 32.30% | 4333 ms | → 0.97x | 8 | 17h 6m | 6d ago | 17m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 16.91% | 79.91% | 89.14% | 89.14% | 4270 ms | ↑ 3.14x | 13 | 10h 27m | 6d ago | 17m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 14.22% | 79.57% | 87.56% | 87.56% | 1242 ms | ↓ 0.86x | 2 | 2d 24h | 6d ago | 16m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.69% | 1.71% | 58.44% | 58.44% | 4393 ms | ↑ 1.26x | 30 | 23h 16m | 1d ago | 35m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.48% | 76.38% | 97.65% | 97.65% | 1297 ms | ↓ 0.94x | 2 | 3d 11h | 7d ago | 33m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.24% | 51.97% | 50.85% | 50.85% | 1570 ms | ↓ 0.84x | 8 | 1d 18h | 5d ago | 30m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 79.50% | 79.50% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 65.85% | 65.85% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 70.84% | 70.84% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 44.90% | 44.90% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 76.86% | 76.86% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 57.64% | 57.64% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.42% | 5.42% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.03% | 12.03% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 53.52% | 53.52% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.26% | 3.26% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 69.30% | 90.70% | 90.70% | — | — | 1 | 9d 4h | 9d ago | 18m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 64.47% | 64.47% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 79.75% | 79.75% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.00% | 35.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 89.06% | 89.06% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.44% | 22.44% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 71.56% | 71.56% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 48.31% | 48.31% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.49% | 28.49% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 50.97% | 88.29% | 88.29% | — | — | 6 | 2d 10h | 15d ago | 33m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 80.12% | 80.12% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 60.35% | 60.35% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 74.02% | 74.02% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 23h | 9d ago | 34m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.17% | 14.17% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 47.27% | 47.27% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 16.64% | 90.93% | 90.93% | — | — | 5 | 5d | 25d ago | 30m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 32.42% | 32.42% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 80.50% | 80.50% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 51.30% | 87.49% | 87.49% | — | — | 1 | 14d 16h | 15d ago | 19m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.30% | 3.30% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 80.35% | 80.35% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 31.25% | 31.25% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.87% | 49.87% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 38.79% | 31.41% | 31.41% | — | — | 4 | 4d 14h | 8d ago | 23m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.97% | 1.97% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 87.99% | 87.99% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 52.80% | 52.80% | 52.80% | — | — | 1 | 10d 2h | 10d ago | 15m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 7.25% | 72.47% | 72.47% | — | — | 1 | 27d 21h | 28d ago | 20m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 72.29% | 72.29% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 29.24% | 29.24% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.48% | 52.48% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 9.11% | 49.77% | 49.77% | — | — | 1 | 27d 8h | 27d ago | 18m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.32% | 23.32% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 42.82% | 80.47% | 80.47% | — | — | 6 | 2d 21h | 17d ago | 35m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 42.31% | 40.22% | 40.22% | — | — | 3 | 5d 20h | 17d ago | 30m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 5h | 15d ago | 15m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 44.34% | 60.40% | 60.40% | — | — | 1 | 16d 22h | 17d ago | 18m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.98% | 54.98% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.97% | 22.97% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.04% | 5.04% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 63.27% | 63.27% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 80.07% | 80.07% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 65.93% | 79.98% | 79.98% | — | — | 4 | 2d 13h | 10d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.19% | 6.19% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 76.47% | 76.47% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 78.89% | 78.89% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 30.95% | 30.95% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 51.85% | 90.56% | 90.56% | — | — | 2 | 7d 5h | 14d ago | 22m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 25.35% | 25.35% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 7.84% | 22.90% | 22.90% | — | — | 2 | 13d 19h | 26d ago | 19m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.86% | 50.86% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 51.50% | 51.50% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.63% | 7.63% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 62.06% | 62.06% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.93% | 44.93% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 31.32% | 31.32% | 31.32% | — | — | 3 | 3d 10h | 10d ago | 17m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.83% | 40.83% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 26.19% | 26.19% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 80.08% | 80.08% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 56.57% | 56.57% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.57% | 37.57% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 34.99% | 72.23% | 72.23% | — | — | 2 | 9d 19h | 20d ago | 21m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 76.82% | 76.82% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 19.33% | 71.71% | 71.71% | — | — | 2 | 12d 3h | 24d ago | 18m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.45% | 2.45% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 80.30% | 80.30% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.17% | 40.17% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 34.52% | 94.16% | 94.16% | — | — | 1 | 19d 18h | 20d ago | 29m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 80.06% | 80.06% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.60% | 31.60% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 79.98% | 79.98% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 49.13% | 49.13% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 21.19% | 21.19% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 42.45% | 42.45% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 77.72% | 77.72% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 62.52% | 62.52% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 27.41% | 27.41% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 4h | 15d ago | 17m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 76.26% | 76.26% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 4h | 15d ago | 17m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 47.92% | 47.92% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.05% | 3.05% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 5h | 15d ago | 17m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.72% | 41.72% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 74.71% | 74.71% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 25.43% | 40.24% | 40.24% | — | — | 4 | 5d 15h | 22d ago | 31m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 57.00% | 57.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 39.21% | 39.21% | 39.21% | — | — | 1 | 9d 2h | 9d ago | 17m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 40.00% | 40.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 58.89% | 58.89% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 85.87% | 85.87% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.34% | 27.34% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.65% | 11.65% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 22.44% | 22.44% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.29% | 23.29% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 51.17% | 51.17% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 7.42% | 90.92% | 90.92% | — | — | 2 | 13d 21h | 28d ago | 33m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 52.94% | 52.94% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 21.18% | 72.82% | 72.82% | — | — | 1 | 23d 17h | 24d ago | 19m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.25% | 9.25% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.88% | 16.88% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.84% | 47.84% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 56.40% | 50.29% | 50.29% | — | — | 2 | 6d 13h | 13d ago | 21m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 21.37% | 21.37% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.31% | 53.31% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 92.24% | 92.24% | — | — | 1 | 8d 22h | 9d ago | 28m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 37.59% | 37.59% | — | — | 1 | 15d 4h | 15d ago | 23m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.49% | 21.49% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 32.66% | 32.66% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 45.26% | 45.26% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.36% | 5.36% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 6.02% | 77.62% | 77.62% | — | — | 1 | 28d 7h | 28d ago | 22m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 87.26% | 87.26% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 26.19% | 58.68% | 58.68% | — | — | 1 | 22d 7h | 22d ago | 15m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 80.17% | 80.17% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 79.12% | 79.12% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 61.71% | 61.71% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 72.46% | 72.46% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 78.98% | 78.98% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 24h | 9d ago | 16m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.87% | 18.87% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 3.99% | 57.78% | 57.78% | — | — | 1 | 28d 21h | 29d ago | 34m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 7.02% | 39.68% | 39.68% | — | — | 1 | 27d 23h | 28d ago | 19m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.94% | 3.94% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.91% | 32.91% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.71% | 66.29% | 66.29% | — | — | 4 | 7d 5h | 29d ago | 32m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 9.38% | 24.20% | 24.20% | — | — | 16 | 1d 16h | 26d ago | 21m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.17% | 7.17% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 63.46% | 63.46% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 28.80% | 28.80% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 65.33% | 65.33% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 36.89% | 36.89% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.79% | 4.79% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 22h | 9d ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 7.50% | 52.74% | 52.74% | — | — | 1 | 27d 18h | 28d ago | 17m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 45.88% | 45.88% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 33.88% | 33.88% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 20.36% | 20.36% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 25.53% | 5.30% | 5.30% | — | — | 3 | 7d 12h | 22d ago | 31m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.25% | 11.25% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.36% | 17.36% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.64% | 16.64% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 30.75% | 30.75% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.58% | 9.58% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 8.22% | 8.22% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.82% | 0.82% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.67% | 4.67% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.43% | 5.43% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.25% | 48.25% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 43.76% | 43.76% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 80.14% | 80.14% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 70.69% | 70.69% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 44.41% | 44.41% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 80.32% | 80.32% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 50.51% | 50.51% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.01% | 40.01% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.72% | 1.72% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.74% | 18.74% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 5h | 15d ago | 17m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 78.14% | 78.14% | — | — | 1 | 29d 23h | 30d ago | 27m ago |

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
