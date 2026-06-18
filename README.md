# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 361 🟢 operational · 51 🟡 degraded · 259 🔴 down · 0 ⚫ unknown

_Updated 2026-06-18 08:11 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (361)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.16% | 98.16% | 736 ms | ↑ 1.15x | 1 | 0s | 21d ago | 34m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1570 ms | ↓ 0.93x | 0 | — | — | 31m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.81% | 93.81% | 2312 ms | ↑ 1.71x | 3 | 0s | 12d ago | 39m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.48% | 72.59% | 72.59% | 923 ms | → 0.96x | 8 | 4m | 12d ago | 39m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 21.20% | 21.20% | 3125 ms | ↑ 1.66x | 4 | 0s | 8d ago | 41m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.46% | 97.46% | 4027 ms | ↑ 1.38x | 0 | — | — | 48m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 55.99% | 55.99% | 1862 ms | ↑ 1.19x | 0 | — | — | 38m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.88% | 99.88% | 99.88% | 1288 ms | → 1.02x | 1 | 0s | 13d ago | 31m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.87% | 97.87% | 3783 ms | ↑ 1.24x | 2 | 0s | 21d ago | 44m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.71% | 98.66% | 98.66% | 1177 ms | ↓ 0.86x | 5 | 0s | 9d ago | 39m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.82% | 98.82% | 2290 ms | ↑ 1.24x | 0 | — | — | 50m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.49% | 99.49% | 3641 ms | ↑ 1.14x | 1 | 0s | 28d ago | 50m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.88% | 99.28% | 99.28% | 378 ms | ↓ 0.27x | 1 | 19m | 30d ago | 33m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.21% | 95.21% | 2967 ms | ↑ 1.36x | 0 | — | — | 35m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2099 ms | ↑ 1.49x | 0 | — | — | 33m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.71% | 97.71% | 3432 ms | ↑ 1.47x | 0 | — | — | 35m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 99.30% | 98.63% | 98.63% | 1334 ms | ↓ 0.56x | 3 | 1h 10m | 9d ago | 33m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.42% | 92.42% | 3121 ms | ↑ 1.71x | 1 | 50m | 7d ago | 51m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.96% | 99.96% | 2076 ms | ↑ 1.39x | 0 | — | — | 33m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1470 ms | ↑ 1.56x | 0 | — | — | 31m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.64% | 98.64% | 1563 ms | ↑ 1.31x | 0 | — | — | 35m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.61% | 96.89% | 96.89% | 1734 ms | ↑ 1.08x | 1 | 8h 47m | 8d ago | 35m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.87% | 98.87% | 807 ms | ↓ 0.65x | 0 | — | — | 33m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 37.57% | 37.57% | 889 ms | ↑ 1.70x | 0 | — | — | 45m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1646 ms | ↑ 1.23x | 0 | — | — | 31m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.83% | 99.86% | 99.86% | 1910 ms | ↑ 1.83x | 2 | 10m | 9d ago | 35m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.96% | 96.96% | 2905 ms | ↑ 1.29x | 1 | 0s | 23d ago | 39m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.88% | 98.88% | 1101 ms | ↑ 1.24x | 2 | 15m | 9d ago | 47m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1396 ms | ↑ 1.72x | 1 | 0s | 27d ago | 32m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.74% | 96.74% | 905 ms | ↑ 1.30x | 0 | — | — | 37m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.25% | 87.41% | 87.41% | 2025 ms | ↑ 1.96x | 3 | 1h 24m | 20d ago | 36m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1846 ms | ↑ 1.06x | 1 | 0s | 27d ago | 33m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.37% | 98.37% | 4332 ms | ↑ 1.47x | 1 | 60m | 28d ago | 36m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.18% | 98.18% | 472 ms | ↑ 1.74x | 0 | — | — | 34m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.75% | 85.75% | 2754 ms | ↑ 2.04x | 0 | — | — | 35m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.94% | 82.01% | 82.01% | 2588 ms | ↑ 1.37x | 1 | 0s | 7d ago | 39m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.71% | 97.71% | 1557 ms | ↑ 1.24x | 0 | — | — | 38m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.99% | 99.99% | 843 ms | ↑ 1.16x | 0 | — | — | 46m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3157 ms | ↑ 1.13x | 0 | — | — | 46m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.02% | 99.02% | 793 ms | ↑ 2.07x | 0 | — | — | 37m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.89% | 97.89% | 4191 ms | ↑ 1.14x | 1 | 0s | 24d ago | 49m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.32% | 96.32% | 1144 ms | ↑ 1.09x | 0 | — | — | 37m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.10% | 85.02% | 85.02% | 1882 ms | ↑ 1.16x | 9 | 6h 19m | 9d ago | 35m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1166 ms | → 1.00x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1919 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.19% | 98.92% | 98.92% | 3202 ms | ↑ 1.14x | 3 | 1h 17m | 12d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.85% | 99.85% | 1315 ms | ↑ 1.20x | 2 | 0s | 9d ago | 35m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 2243 ms | ↑ 1.05x | 0 | — | — | 46m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.81% | 99.81% | 99.81% | 628 ms | ↓ 0.36x | 1 | 51m | 18d ago | 31m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 4319 ms | ↑ 1.23x | 1 | 0s | 24d ago | 44m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.70% | 99.70% | 1215 ms | → 0.96x | 1 | 0s | 17d ago | 35m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1258 ms | ↑ 1.20x | 0 | — | — | 31m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 30.31% | 30.31% | 1192 ms | ↑ 1.14x | 0 | — | — | 46m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.14% | 96.24% | 96.24% | 2482 ms | ↑ 1.23x | 1 | 12h 2m | 23d ago | 35m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.03% | 97.85% | 97.85% | 3968 ms | ↓ 0.84x | 13 | 48m | 15d ago | 35m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1238 ms | ↓ 0.70x | 0 | — | — | 33m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 492 ms | ↓ 0.53x | 0 | — | — | 33m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 100.00% | 97.50% | 97.50% | 2498 ms | ↑ 1.35x | 0 | — | — | 41m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.79% | 99.79% | 808 ms | → 1.04x | 4 | 0s | 8d ago | 33m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.72% | 96.72% | 840 ms | → 0.98x | 0 | — | — | 39m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.09% | 98.06% | 98.06% | 1960 ms | → 1.04x | 1 | 21h 30m | 14d ago | 31m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1104 ms | → 1.00x | 0 | — | — | 31m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.00% | 55.00% | 2033 ms | ↑ 1.50x | 0 | — | — | 40m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.88% | 99.68% | 99.68% | 1941 ms | ↓ 0.48x | 2 | 0s | 16d ago | 32m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 44.51% | 47.37% | 47.37% | 501 ms | ↓ 0.90x | 1 | 16d 18h | 27d ago | 40m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1856 ms | ↑ 1.67x | 1 | 0s | 27d ago | 32m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3582 ms | ↑ 1.06x | 0 | — | — | 45m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.16% | 97.16% | 1522 ms | ↑ 1.06x | 0 | — | — | 45m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.46% | 83.46% | 3392 ms | ↑ 1.56x | 0 | — | — | 39m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1289 ms | ↓ 0.90x | 0 | — | — | 33m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.70% | 98.70% | 2894 ms | ↑ 1.39x | 0 | — | — | 36m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4521 ms | ↑ 1.41x | 1 | 0s | 27d ago | 32m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.92% | 92.92% | 740 ms | ↓ 0.95x | 1 | 0s | 24d ago | 40m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.66% | 98.66% | 1343 ms | ↑ 1.35x | 0 | — | — | 35m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.88% | 99.84% | 99.84% | 647 ms | ↑ 1.90x | 2 | 0s | 15d ago | 37m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.37% | 99.37% | 828 ms | ↓ 0.63x | 0 | — | — | 33m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1858 ms | → 1.01x | 0 | — | — | 31m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 97.94% | 97.94% | 2738 ms | ↓ 0.67x | 2 | 0s | 8d ago | 36m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 83.28% | 89.39% | 89.39% | 1585 ms | ↑ 1.46x | 2 | 2d 12h | 11d ago | 35m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.94% | 47.82% | 47.82% | 2172 ms | ↑ 1.57x | 1 | 0s | 9d ago | 40m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2417 ms | → 1.02x | 0 | — | — | 32m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.49% | 76.49% | 1341 ms | ↑ 1.41x | 0 | — | — | 39m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 100.00% | 96.09% | 96.09% | 1278 ms | ↑ 1.66x | 0 | — | — | 31m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 974 ms | ↓ 0.95x | 0 | — | — | 32m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.21% | 98.21% | 2802 ms | ↑ 1.36x | 0 | — | — | 38m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1088 ms | → 0.99x | 0 | — | — | 31m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2646 ms | ↑ 1.71x | 1 | 0s | 27d ago | 32m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.29% | 82.29% | 2384 ms | ↑ 1.52x | 2 | 0s | 9d ago | 39m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.03% | 98.03% | 1060 ms | ↑ 1.13x | 0 | — | — | 41m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.86% | 99.86% | 2335 ms | ↑ 1.32x | 1 | 0s | 27d ago | 33m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 60.61% | 60.61% | 1656 ms | ↓ 0.91x | 0 | — | — | 39m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.71% | 63.71% | 1947 ms | ↑ 1.30x | 0 | — | — | 40m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.22% | 99.22% | 1823 ms | ↑ 1.19x | 0 | — | — | 39m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.81% | 99.81% | 1403 ms | ↓ 0.55x | 0 | — | — | 37m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.58% | 99.58% | 669 ms | ↓ 0.86x | 1 | 0s | 19d ago | 39m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 19.61% | 19.61% | 1999 ms | ↑ 1.49x | 1 | 0s | 14d ago | 45m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.94% | 99.74% | 99.74% | 2759 ms | ↑ 1.24x | 1 | 0s | 29d ago | 49m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2240 ms | → 1.03x | 0 | — | — | 31m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.05% | 99.05% | 4062 ms | ↑ 1.18x | 1 | 29m | 24d ago | 49m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.17% | 98.17% | 3979 ms | ↑ 1.26x | 0 | — | — | 50m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.49% | 99.91% | 99.91% | 1064 ms | ↑ 1.14x | 4 | 29m | 16d ago | 46m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 75.38% | 75.38% | 2962 ms | ↑ 1.36x | 0 | — | — | 38m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1098 ms | → 0.98x | 0 | — | — | 33m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1372 ms | → 1.00x | 0 | — | — | 31m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.61% | 99.61% | 1698 ms | ↑ 1.49x | 1 | 2h 60m | 11d ago | 33m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1764 ms | ↑ 1.36x | 0 | — | — | 50m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 631 ms | ↓ 0.33x | 1 | 0s | 22d ago | 50m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.89% | 99.63% | 99.63% | 2547 ms | ↑ 1.39x | 2 | 0s | 9d ago | 48m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.57% | 89.57% | 1496 ms | ↓ 0.77x | 0 | — | — | 39m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 79.01% | 79.01% | 2243 ms | ↑ 1.08x | 0 | — | — | 37m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.79% | 99.79% | 887 ms | ↑ 1.23x | 1 | 0s | 21d ago | 50m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 655 ms | ↑ 1.22x | 0 | — | — | 33m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 84.72% | 84.72% | 2902 ms | ↑ 1.43x | 0 | — | — | 35m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2380 ms | ↑ 1.33x | 0 | — | — | 32m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2352 ms | ↑ 1.56x | 0 | — | — | 35m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.05% | 99.05% | 1080 ms | ↑ 1.57x | 0 | — | — | 40m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.44% | 97.44% | 2583 ms | ↑ 2.83x | 0 | — | — | 35m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.88% | 99.88% | 99.88% | 1754 ms | ↑ 1.27x | 1 | 0s | 12d ago | 31m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.88% | 99.94% | 99.94% | 1984 ms | ↑ 2.09x | 2 | 0s | 9d ago | 32m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2339 ms | ↑ 1.33x | 0 | — | — | 32m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.89% | 87.44% | 87.44% | 1336 ms | → 1.04x | 2 | 0s | 26d ago | 49m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 68.14% | 79.48% | 79.48% | 1345 ms | ↑ 1.10x | 2 | 4d 20h | 20d ago | 33m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.87% | 98.87% | 562 ms | ↑ 1.77x | 0 | — | — | 37m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.83% | 99.07% | 99.07% | 1307 ms | ↑ 1.27x | 3 | 0s | 11d ago | 33m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.98% | 98.98% | 3271 ms | ↑ 2.30x | 0 | — | — | 41m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 84.90% | 84.90% | 1580 ms | ↑ 1.44x | 0 | — | — | 34m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.43% | 97.58% | 97.58% | 496 ms | ↓ 0.85x | 4 | 2h 22m | 27d ago | 32m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.74% | 99.74% | 99.74% | 722 ms | ↑ 1.06x | 1 | 1h | 18d ago | 31m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.89% | 99.89% | 1696 ms | ↑ 1.33x | 2 | 11m | 19d ago | 31m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 23.42% | 23.42% | 2524 ms | ↑ 2.20x | 0 | — | — | 40m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1638 ms | ↑ 1.70x | 0 | — | — | 51m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2827 ms | ↑ 1.10x | 0 | — | — | 50m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.85% | 98.79% | 98.79% | 3108 ms | ↑ 1.70x | 15 | 43m | 15d ago | 36m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 738 ms | ↑ 1.14x | 0 | — | — | 49m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.10% | 98.10% | 956 ms | ↓ 0.62x | 0 | — | — | 39m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 97.86% | 19.47% | 19.47% | 619 ms | ↓ 0.35x | 7 | 1h 40m | 8d ago | 40m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 846 ms | ↑ 1.37x | 0 | — | — | 50m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.72% | 99.72% | 1633 ms | ↑ 1.07x | 4 | 8m | 12d ago | 44m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.73% | 98.73% | 4728 ms | ↑ 1.11x | 0 | — | — | 51m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1071 ms | ↓ 0.41x | 0 | — | — | 49m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2272 ms | ↑ 1.38x | 0 | — | — | 33m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.53% | 97.90% | 97.90% | 2052 ms | ↑ 1.28x | 126 | 29m | 8d ago | 48m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2875 ms | ↑ 1.16x | 0 | — | — | 45m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.34% | 99.34% | 2355 ms | ↑ 1.40x | 2 | 0s | 9d ago | 41m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.00% | 42.00% | 934 ms | ↑ 1.09x | 1 | 0s | 8d ago | 50m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.54% | 98.54% | 2584 ms | ↓ 0.58x | 0 | — | — | 37m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1167 ms | ↑ 1.05x | 0 | — | — | 49m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.89% | 99.45% | 99.45% | 2953 ms | ↑ 1.07x | 2 | 0s | 21d ago | 44m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1501 ms | ↑ 1.09x | 3 | 10m | 12d ago | 38m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.60% | 99.25% | 99.25% | 2252 ms | ↑ 1.71x | 3 | 30m | 8d ago | 50m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2456 ms | ↑ 1.14x | 0 | — | — | 39m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.67% | 99.67% | 720 ms | ↓ 0.48x | 0 | — | — | 34m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 496 ms | → 0.97x | 0 | — | — | 31m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 696 ms | → 0.99x | 0 | — | — | 50m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.25% | 61.25% | 1549 ms | → 1.05x | 0 | — | — | 40m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.94% | 21.68% | 21.68% | 683 ms | ↓ 0.35x | 1 | 0s | 9d ago | 40m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.34% | 82.28% | 82.28% | 1864 ms | ↑ 2.27x | 3 | 8h 40m | 9d ago | 35m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2732 ms | ↑ 1.07x | 0 | — | — | 49m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 100.00% | 100.00% | 100.00% | 2491 ms | → 1.00x | 0 | — | — | 31m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.60% | 59.90% | 59.90% | 1322 ms | ↓ 0.42x | 3 | 40m | 8d ago | 41m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.18% | 80.11% | 80.11% | 2290 ms | ↑ 1.23x | 1 | 13h | 15d ago | 50m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1357 ms | ↑ 1.39x | 1 | 0s | 8d ago | 48m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1104 ms | → 0.99x | 0 | — | — | 50m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 44.50% | 44.50% | 196 ms | → 1.00x | 1 | 0s | 8d ago | 38m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1019 ms | ↑ 1.06x | 0 | — | — | 50m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1881 ms | ↑ 1.80x | 1 | 0s | 27d ago | 32m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1174 ms | ↑ 1.19x | 1 | 0s | 21d ago | 35m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.94% | 99.04% | 99.04% | 3792 ms | ↑ 1.41x | 1 | 0s | 8d ago | 48m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.49% | 98.49% | 1850 ms | ↑ 1.29x | 0 | — | — | 35m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.50% | 96.50% | 1420 ms | ↑ 1.83x | 2 | 45m | 7d ago | 35m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.03% | 70.03% | 1310 ms | ↑ 1.34x | 0 | — | — | 39m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1289 ms | → 1.04x | 0 | — | — | 31m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1270 ms | → 1.00x | 0 | — | — | 31m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.77% | 80.99% | 80.99% | 3242 ms | ↑ 1.70x | 2 | 26m | 8d ago | 39m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2157 ms | ↑ 1.29x | 0 | — | — | 48m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 824 ms | ↓ 0.29x | 1 | 0s | 27d ago | 32m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.62% | 92.62% | 1685 ms | → 1.01x | 3 | 0s | 16d ago | 39m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.86% | 99.86% | 639 ms | ↓ 0.64x | 2 | 0s | 9d ago | 44m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 29.50% | 20.13% | 20.13% | 2779 ms | → 1.02x | 2 | 10d 14h | 9d ago | 34m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.77% | 85.47% | 85.47% | 2273 ms | ↑ 1.05x | 4 | 0s | 9d ago | 49m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.55% | 85.55% | 1352 ms | ↑ 2.78x | 0 | — | — | 48m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.06% | 91.06% | 470 ms | ↑ 1.26x | 0 | — | — | 37m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.30% | 99.30% | 2442 ms | ↑ 1.17x | 0 | — | — | 39m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.69% | 67.69% | 1563 ms | ↑ 1.68x | 1 | 0s | 20d ago | 39m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.70% | 96.70% | 1555 ms | → 1.05x | 0 | — | — | 39m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.88% | 99.86% | 99.86% | 1980 ms | ↑ 1.73x | 2 | 0s | 21d ago | 32m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 21.28% | 21.28% | 2772 ms | ↑ 1.64x | 1 | 0s | 14d ago | 45m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2694 ms | ↑ 1.11x | 0 | — | — | 50m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4291 ms | ↑ 1.25x | 0 | — | — | 33m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.52% | 58.52% | 720 ms | ↑ 1.11x | 0 | — | — | 40m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.83% | 98.40% | 98.40% | 2318 ms | ↑ 1.48x | 3 | 0s | 8d ago | 37m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 41.04% | 41.04% | 3452 ms | ↑ 1.45x | 1 | 0s | 26d ago | 39m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.23% | 99.23% | 4301 ms | ↑ 1.24x | 1 | 0s | 20d ago | 44m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3547 ms | ↑ 1.18x | 0 | — | — | 50m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.88% | 99.88% | 2490 ms | ↑ 1.27x | 1 | 30m | 26d ago | 39m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.14% | 91.98% | 91.98% | 2719 ms | ↑ 1.05x | 5 | 7h 46m | 17d ago | 37m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.26% | 99.26% | 2337 ms | ↑ 1.20x | 0 | — | — | 39m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.79% | 79.79% | 1545 ms | ↓ 0.69x | 0 | — | — | 39m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 190 ms | → 1.00x | 1 | 0s | 21d ago | 50m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2729 ms | ↑ 1.81x | 0 | — | — | 31m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2700 ms | ↑ 1.39x | 0 | — | — | 48m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1395 ms | → 0.96x | 1 | 0s | 27d ago | 33m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.07% | 91.41% | 91.41% | 2820 ms | ↓ 0.89x | 16 | 0s | 9d ago | 37m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.21% | 80.21% | 2662 ms | ↑ 1.45x | 1 | 0s | 23d ago | 39m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.70% | 86.70% | 2988 ms | ↓ 0.80x | 0 | — | — | 39m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.93% | 99.93% | 1853 ms | ↑ 1.42x | 1 | 0s | 27d ago | 33m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.15% | 96.15% | 2438 ms | ↑ 1.73x | 0 | — | — | 40m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1572 ms | ↑ 1.42x | 0 | — | — | 48m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.60% | 98.60% | 879 ms | ↑ 1.48x | 0 | — | — | 37m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 22.97% | 22.97% | 875 ms | ↑ 2.11x | 0 | — | — | 40m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 932 ms | ↓ 0.94x | 0 | — | — | 37m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.68% | 61.68% | 2521 ms | ↑ 1.23x | 0 | — | — | 39m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 72.92% | 33.23% | 33.23% | 979 ms | → 0.99x | 1 | 7d 21h | 30d ago | 49m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.72% | 92.72% | 28 ms | ↑ 1.05x | 0 | — | — | 35m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.92% | 98.89% | 98.89% | 1846 ms | ↑ 1.50x | 1 | 5h 60m | 19d ago | 48m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 19.59% | 19.59% | 1636 ms | ↑ 1.62x | 0 | — | — | 48m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 982 ms | ↓ 0.70x | 0 | — | — | 33m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3840 ms | ↑ 1.59x | 0 | — | — | 33m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 640 ms | ↓ 0.57x | 0 | — | — | 33m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.49% | 93.49% | 4687 ms | ↑ 1.11x | 0 | — | — | 49m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.56% | 99.56% | 2108 ms | ↑ 1.22x | 1 | 1h 20m | 20d ago | 48m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2232 ms | ↑ 1.20x | 1 | 0s | 14d ago | 39m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.23% | 99.23% | 1158 ms | ↑ 1.15x | 0 | — | — | 37m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.89% | 99.89% | 1559 ms | → 0.96x | 1 | 0s | 27d ago | 33m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 43.22% | 43.22% | 1449 ms | ↑ 1.09x | 2 | 0s | 13d ago | 50m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.58% | 99.58% | 1978 ms | ↑ 1.15x | 1 | 0s | 29d ago | 50m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 2283 ms | ↑ 1.63x | 0 | — | — | 48m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 676 ms | ↑ 1.37x | 0 | — | — | 51m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.83% | 62.18% | 62.18% | 2775 ms | ↑ 1.06x | 3 | 0s | 9d ago | 50m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.76% | 98.76% | 3123 ms | ↑ 1.15x | 0 | — | — | 35m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.74% | 96.74% | 3449 ms | ↑ 1.21x | 0 | — | — | 49m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 609 ms | ↓ 0.28x | 0 | — | — | 31m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.80% | 99.80% | 772 ms | ↑ 1.14x | 1 | 20m | 21d ago | 35m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.63% | 88.63% | 2239 ms | ↑ 1.39x | 0 | — | — | 39m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.83% | 99.83% | 993 ms | → 1.03x | 0 | — | — | 35m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1836 ms | → 1.05x | 0 | — | — | 33m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2230 ms | ↑ 1.24x | 0 | — | — | 49m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1500 ms | ↑ 1.16x | 0 | — | — | 50m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.88% | 99.93% | 99.93% | 1573 ms | ↑ 1.17x | 2 | 0s | 12d ago | 32m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1408 ms | ↑ 1.21x | 0 | — | — | 50m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 74.56% | 74.56% | 940 ms | ↓ 0.85x | 1 | 0s | 27d ago | 37m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.88% | 99.88% | 2931 ms | ↑ 1.10x | 1 | 0s | 23d ago | 46m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 892 ms | → 1.03x | 0 | — | — | 47m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.65% | 84.65% | 2054 ms | ↑ 1.06x | 1 | 0s | 17d ago | 45m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 24.87% | 24.87% | 2650 ms | ↑ 1.33x | 1 | 0s | 15d ago | 51m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.59% | 98.85% | 98.85% | 1937 ms | ↑ 1.31x | 4 | 15m | 7d ago | 39m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.12% | 98.12% | 2617 ms | ↑ 1.44x | 3 | 0s | 20d ago | 35m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.25% | 92.25% | 4427 ms | ↑ 1.36x | 2 | 25m | 7d ago | 51m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 98.84% | 97.05% | 97.05% | 1873 ms | ↑ 1.52x | 15 | 10m | 8d ago | 33m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.86% | 99.86% | 1702 ms | ↑ 1.84x | 2 | 30m | 15d ago | 32m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.60% | 97.60% | 3539 ms | ↑ 2.14x | 1 | 0s | 12d ago | 33m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.81% | 98.81% | 1010 ms | ↑ 1.28x | 0 | — | — | 39m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.73% | 98.73% | 1892 ms | → 0.99x | 0 | — | — | 47m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.83% | 99.58% | 99.58% | 3083 ms | ↑ 1.47x | 2 | 15m | 24d ago | 33m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.93% | 97.93% | 4248 ms | ↑ 1.34x | 1 | 0s | 29d ago | 36m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1153 ms | ↑ 2.05x | 1 | 0s | 27d ago | 33m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2745 ms | ↑ 1.42x | 0 | — | — | 31m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 96.93% | 96.93% | 96.93% | 407 ms | ↓ 0.21x | 2 | 6h 36m | 9d ago | 31m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 29.93% | 29.93% | 1262 ms | ↑ 1.31x | 0 | — | — | 47m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1589 ms | ↑ 1.73x | 1 | 0s | 25d ago | 39m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.35% | 98.35% | 2253 ms | ↑ 1.35x | 0 | — | — | 39m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1931 ms | ↑ 1.51x | 0 | — | — | 47m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.61% | 88.61% | 4042 ms | ↑ 1.47x | 0 | — | — | 39m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 12.94% | 12.94% | 2506 ms | → 1.00x | 0 | — | — | 46m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.60% | 96.60% | 3190 ms | ↑ 1.63x | 0 | — | — | 41m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1848 ms | ↑ 1.23x | 1 | 0s | 8d ago | 47m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 19.58% | 19.58% | 1970 ms | → 1.03x | 0 | — | — | 49m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1045 ms | ↑ 1.18x | 0 | — | — | 33m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.11% | 97.11% | 2751 ms | ↑ 1.54x | 0 | — | — | 35m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2725 ms | ↑ 1.27x | 1 | 0s | 23d ago | 47m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1152 ms | → 0.98x | 2 | 10m | 8d ago | 48m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 21.42% | 21.42% | 3768 ms | ↑ 1.72x | 0 | — | — | 41m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 19.38% | 19.38% | 2444 ms | ↑ 1.50x | 0 | — | — | 41m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.48% | 99.68% | 99.68% | 3337 ms | ↓ 0.83x | 5 | 24m | 10d ago | 32m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.65% | 99.76% | 99.76% | 2974 ms | ↑ 1.18x | 1 | 2h 18m | 26d ago | 37m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2302 ms | ↑ 1.30x | 0 | — | — | 49m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2313 ms | → 1.02x | 0 | — | — | 31m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 828 ms | ↓ 0.53x | 0 | — | — | 47m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 312 ms | → 1.00x | 0 | — | — | 32m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.61% | 98.61% | 1837 ms | ↑ 1.41x | 0 | — | — | 35m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 2250 ms | ↑ 1.19x | 1 | 0s | 15d ago | 45m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 3190 ms | ↓ 0.78x | 1 | 0s | 18d ago | 40m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.13% | 99.13% | 1975 ms | ↑ 1.30x | 1 | 0s | 15d ago | 49m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 932 ms | ↑ 2.06x | 0 | — | — | 48m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 410 ms | → 1.01x | 0 | — | — | 31m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.83% | 99.73% | 99.73% | 3432 ms | ↑ 1.20x | 3 | 0s | 1d ago | 49m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.66% | 98.86% | 98.86% | 3181 ms | ↑ 1.22x | 6 | 0s | 2d ago | 50m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.89% | 99.53% | 99.53% | 3676 ms | ↑ 1.07x | 2 | 0s | 3d ago | 50m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.32% | 99.44% | 99.44% | 3257 ms | ↑ 1.17x | 5 | 38m | 3d ago | 50m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.76% | 96.63% | 31.06% | 31.06% | 2048 ms | ↑ 1.24x | 10 | 1h 59m | 4d ago | 47m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 99.89% | 18.74% | 18.74% | 758 ms | → 0.97x | 2 | 0s | 5d ago | 49m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.89% | 89.26% | 89.26% | 2076 ms | ↑ 1.44x | 2 | 0s | 5d ago | 48m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.89% | 99.66% | 99.66% | 1332 ms | ↑ 1.54x | 2 | 0s | 4d ago | 48m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.76% | 99.94% | 99.94% | 99.94% | 2271 ms | ↑ 1.20x | 1 | 0s | 4h ago | 45m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.76% | 99.13% | 97.57% | 97.57% | 2267 ms | ↑ 1.30x | 10 | 12m | 3d ago | 38m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.76% | 99.88% | 99.11% | 99.11% | 1495 ms | → 1.04x | 2 | 0s | 5d ago | 39m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.76% | 99.48% | 52.70% | 52.70% | 1313 ms | → 1.00x | 5 | 24m | 2d ago | 40m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.76% | 99.88% | 62.66% | 62.66% | 646 ms | ↓ 0.92x | 2 | 0s | 7d ago | 39m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.76% | 99.94% | 90.26% | 90.26% | 2322 ms | ↑ 1.17x | 1 | 0s | 3d ago | 39m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.76% | 99.83% | 90.43% | 90.43% | 777 ms | → 0.98x | 3 | 0s | 7d ago | 39m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.76% | 99.54% | 21.32% | 21.32% | 1814 ms | ↑ 1.15x | 4 | 30m | 2d ago | 41m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.76% | 99.36% | 98.45% | 98.45% | 1919 ms | ↑ 1.32x | 2 | 2h 9m | 1d ago | 39m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.88% | 20.43% | 20.43% | 1333 ms | ↑ 1.25x | 2 | 0s | 2d ago | 40m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 98.33% | 96.66% | 96.66% | 4675 ms | ↑ 1.26x | 11 | 47m | 5d ago | 40m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.76% | 99.77% | 22.15% | 22.15% | 1410 ms | ↑ 1.19x | 4 | 0s | 18h ago | 41m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.75% | 99.88% | 52.82% | 52.82% | 731 ms | ↑ 1.22x | 2 | 0s | 3h ago | 37m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 48.84% | 65.06% | 65.06% | 1288 ms | ↑ 1.10x | 2 | 7d 13h | 2d ago | 35m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.88% | 99.94% | 99.94% | 1168 ms | ↑ 1.12x | 2 | 0s | 5d ago | 32m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.75% | 97.56% | 98.65% | 98.65% | 944 ms | ↑ 1.89x | 7 | 2h 8m | 1d ago | 33m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.75% | 99.75% | 99.75% | 418 ms | ↓ 0.85x | 2 | 0s | 3d ago | 33m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 86.05% | 84.36% | 84.36% | 1375 ms | ↓ 0.47x | 14 | 6h 41m | 3d ago | 32m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.70% | 98.70% | 98.70% | 1907 ms | ↑ 1.76x | 3 | 1h 47m | 6d ago | 31m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.88% | 99.93% | 99.93% | 1942 ms | ↑ 1.56x | 2 | 0s | 4d ago | 33m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.75% | 99.53% | 99.57% | 99.57% | 2846 ms | ↑ 1.19x | 8 | 0s | 5d ago | 33m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.83% | 97.86% | 97.86% | 628 ms | ↓ 0.76x | 3 | 0s | 1d ago | 34m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.75% | 99.94% | 98.10% | 98.10% | 1678 ms | ↑ 1.27x | 1 | 0s | 4h ago | 34m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.75% | 98.72% | 92.08% | 92.08% | 739 ms | → 1.02x | 9 | 32m | 3d ago | 35m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.38% | 99.38% | 99.38% | 1018 ms | → 0.97x | 2 | 45m | 6d ago | 33m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.75% | 96.34% | 97.31% | 97.31% | 690 ms | ↓ 0.69x | 2 | 12h 5m | 4h ago | 33m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.88% | 99.88% | 99.88% | 1787 ms | ↑ 1.07x | 1 | 0s | 6d ago | 33m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.54% | 97.45% | 97.45% | 456 ms | ↓ 0.39x | 5 | 16m | 6d ago | 34m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.52% | 99.52% | 2765 ms | ↑ 1.63x | 1 | 0s | 2d ago | 33m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.75% | 99.54% | 99.54% | 99.54% | 1148 ms | ↓ 0.68x | 4 | 15m | 13h ago | 31m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.93% | 99.93% | 2348 ms | ↑ 2.06x | 1 | 0s | 5d ago | 31m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.42% | 99.76% | 99.76% | 4534 ms | ↑ 1.46x | 6 | 20m | 3d ago | 36m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 99.63% | 99.63% | 99.63% | 99.63% | 2379 ms | → 1.00x | 1 | 0s | 4d ago | 31m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.52% | 98.86% | 98.34% | 98.34% | 4532 ms | → 1.03x | 20 | 0s | 3d ago | 51m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.52% | 98.91% | 98.99% | 98.99% | 4033 ms | ↑ 1.09x | 11 | 16m | 2d ago | 47m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.52% | 99.77% | 19.57% | 19.57% | 2163 ms | → 1.05x | 4 | 0s | 3d ago | 48m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.52% | 98.97% | 99.16% | 99.16% | 4162 ms | ↑ 1.14x | 10 | 18m | 2d ago | 47m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.52% | 99.71% | 79.35% | 79.35% | 2199 ms | ↑ 1.05x | 5 | 0s | 4h ago | 45m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.52% | 99.83% | 19.49% | 19.49% | 3852 ms | ↑ 1.35x | 3 | 0s | 1d ago | 45m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.77% | 66.63% | 66.63% | 1353 ms | → 0.97x | 3 | 7m | 2d ago | 39m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 99.51% | 39.06% | 67.57% | 67.57% | 687 ms | → 0.99x | 4 | 4d 13h | 5d ago | 39m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.51% | 99.48% | 98.91% | 98.91% | 2785 ms | ↓ 0.73x | 5 | 24m | 2d ago | 38m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.51% | 99.60% | 68.06% | 68.06% | 1022 ms | ↑ 1.40x | 5 | 12m | 3d ago | 39m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.51% | 99.71% | 98.62% | 98.62% | 1363 ms | ↑ 1.94x | 4 | 7m | 5d ago | 38m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.51% | 99.65% | 99.65% | 99.65% | 1784 ms | ↑ 1.11x | 1 | 30m | 5d ago | 31m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.51% | 39.09% | 45.36% | 45.36% | 696 ms | → 1.02x | 4 | 4d 13h | 4d ago | 33m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.51% | 99.74% | 99.74% | 99.74% | 1594 ms | ↓ 0.79x | 3 | 0s | 4h ago | 31m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.51% | 99.88% | 99.93% | 99.93% | 2116 ms | ↑ 1.83x | 2 | 0s | 3d ago | 32m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.51% | 99.88% | 86.88% | 86.88% | 1232 ms | → 1.05x | 2 | 0s | 4d ago | 33m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.51% | 99.56% | 99.56% | 99.56% | 1491 ms | → 1.02x | 2 | 0s | 4h ago | 31m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.48% | 99.48% | 99.48% | 99.48% | 1547 ms | → 1.00x | 2 | 0s | 3d ago | 31m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.28% | 99.66% | 96.04% | 96.04% | 3382 ms | ↑ 1.20x | 5 | 0s | 1d ago | 50m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.26% | 97.97% | 96.18% | 96.18% | 2131 ms | ↑ 1.34x | 12 | 45m | 5d ago | 33m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.26% | 94.17% | 94.18% | 94.18% | 1391 ms | ↑ 1.19x | 58 | 19m | 2d ago | 31m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.26% | 99.30% | 98.71% | 98.71% | 2409 ms | ↑ 1.17x | 5 | 42m | 17h ago | 33m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.04% | 98.80% | 86.57% | 86.57% | 3901 ms | ↑ 1.35x | 21 | 0s | 21h ago | 51m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.03% | 99.71% | 55.12% | 55.12% | 1682 ms | ↑ 1.24x | 5 | 0s | 20h ago | 46m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.03% | 98.68% | 17.80% | 17.80% | 3691 ms | ↑ 1.31x | 10 | 32m | 2d ago | 44m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.03% | 98.28% | 98.91% | 98.91% | 2143 ms | ↑ 1.15x | 21 | 12m | 1d ago | 45m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.03% | 98.86% | 68.70% | 68.70% | 3946 ms | → 0.96x | 18 | 3m | 2d ago | 46m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.02% | 98.61% | 66.91% | 66.91% | 4633 ms | → 1.03x | 21 | 4m | 20h ago | 39m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.02% | 96.64% | 95.90% | 95.90% | 3548 ms | ↑ 1.33x | 5 | 4h 7m | 1d ago | 39m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.02% | 96.23% | 96.20% | 96.20% | 1930 ms | ↓ 0.75x | 10 | 2h 33m | 23h ago | 34m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.02% | 99.65% | 99.58% | 99.58% | 1487 ms | ↑ 1.38x | 4 | 14m | 3d ago | 33m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.02% | 97.21% | 97.77% | 97.77% | 4318 ms | ↑ 1.38x | 24 | 28m | 18h ago | 36m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.02% | 99.77% | 99.85% | 99.85% | 1272 ms | ↓ 0.75x | 1 | 1h 9m | 2d ago | 33m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.02% | 98.95% | 99.10% | 99.10% | 2025 ms | ↑ 1.52x | 11 | 17m | 24h ago | 33m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.02% | 99.30% | 96.68% | 96.68% | 1863 ms | ↑ 1.14x | 5 | 38m | 6d ago | 35m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (51)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.78% | 99.13% | 91.30% | 91.30% | 1613 ms | ↑ 1.15x | 14 | 2m | 4d ago | 39m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.77% | 99.71% | 99.76% | 99.76% | 2181 ms | ↑ 1.25x | 1 | 1h 41m | 5d ago | 37m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.77% | 99.53% | 99.68% | 99.68% | 1848 ms | ↓ 0.87x | 4 | 30m | 7d ago | 33m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 98.77% | 98.08% | 98.17% | 98.17% | 1928 ms | → 1.02x | 10 | 53m | 5d ago | 33m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.77% | 99.71% | 98.11% | 98.11% | 535 ms | ↓ 0.51x | 1 | 1h 40m | 4h ago | 35m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 98.77% | 98.91% | 98.91% | 98.91% | 3208 ms | → 1.01x | 1 | 1h 58m | 7d ago | 32m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.53% | 89.18% | 89.19% | 89.19% | 4705 ms | → 1.01x | 10 | 3h 36m | 17h ago | 31m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.07% | 98.46% | 85.75% | 85.75% | 4244 ms | → 1.01x | 25 | 4m | 17m ago | 47m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.04% | 97.80% | 86.00% | 86.00% | 4794 ms | ↑ 1.07x | 27 | 11m | 17h ago | 38m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 98.03% | 99.45% | 99.45% | 99.45% | 1054 ms | ↓ 0.59x | 3 | 47m | 7d ago | 31m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 98.03% | 97.20% | 97.93% | 97.93% | 1790 ms | ↑ 2.54x | 8 | 1h 60m | 4d ago | 31m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.83% | 99.49% | 99.61% | 99.61% | 2568 ms | ↑ 1.15x | 1 | 3h 60m | 23h ago | 47m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.82% | 98.45% | 19.02% | 19.02% | 4481 ms | ↑ 1.20x | 27 | 0s | 5h ago | 44m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.80% | 98.56% | 86.29% | 86.29% | 4517 ms | ↑ 1.09x | 24 | 1m | 3d ago | 40m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.79% | 98.60% | 98.60% | 98.60% | 3363 ms | ↑ 1.56x | 24 | 0s | 20h ago | 31m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.54% | 97.61% | 97.61% | 97.61% | 4428 ms | → 0.99x | 10 | 3m | 20h ago | 31m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 97.30% | 97.39% | 98.31% | 98.31% | 4021 ms | ↑ 1.39x | 18 | 43m | 5d ago | 36m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 97.05% | 86.10% | 86.10% | 86.10% | 2562 ms | ↓ 0.92x | 5 | 15h 33m | 6d ago | 31m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.86% | 98.28% | 96.55% | 96.55% | 1812 ms | ↑ 1.32x | 7 | 1h 10m | 6d ago | 46m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 96.81% | 99.19% | 98.65% | 98.65% | 1782 ms | → 0.95x | 2 | 2h 55m | 4d ago | 33m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 96.81% | 97.16% | 97.17% | 97.17% | 3855 ms | → 1.04x | 10 | 8m | 10h ago | 32m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.81% | 98.96% | 49.98% | 49.98% | 4208 ms | ↑ 2.59x | 16 | 3m | 19h ago | 36m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 96.62% | 98.86% | 99.71% | 99.71% | 164 ms | ↑ 1.22x | 13 | 12m | 1d ago | 49m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.61% | 97.54% | 74.50% | 74.50% | 4553 ms | ↑ 1.07x | 38 | 4m | 15m ago | 46m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.56% | 98.26% | 98.92% | 98.92% | 2091 ms | ↑ 1.45x | 6 | 1h 26m | 6d ago | 33m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.09% | 96.24% | 82.67% | 82.67% | 4840 ms | → 1.02x | 62 | 55s | 15h ago | 38m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.41% | 92.13% | 41.08% | 41.08% | 3126 ms | → 0.98x | 70 | 23m | 1d ago | 49m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 95.33% | 97.39% | 97.39% | 97.39% | 928 ms | → 0.97x | 2 | 4h 33m | 7d ago | 31m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.10% | 95.83% | 83.55% | 83.55% | 4573 ms | → 1.00x | 61 | 5m | 17h ago | 37m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.70% | 98.69% | 99.74% | 99.74% | 2015 ms | ↑ 1.17x | 3 | 2h 10m | 4d ago | 50m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.38% | 93.92% | 72.53% | 72.53% | 1977 ms | ↑ 1.32x | 17 | 1h 47m | 13h ago | 39m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 93.96% | 96.06% | 18.91% | 18.91% | 887 ms | ↓ 0.77x | 66 | 54s | 20h ago | 46m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.48% | 98.34% | 47.99% | 47.99% | 2450 ms | ↑ 1.17x | 7 | 1h 12m | 23h ago | 46m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.93% | 97.98% | 97.87% | 97.87% | 1772 ms | ↓ 0.83x | 2 | 6h 16m | 3d ago | 39m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 91.06% | 95.54% | 17.68% | 17.68% | 2906 ms | ↑ 1.14x | 73 | 2m | 5h ago | 46m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 90.42% | 82.69% | 82.05% | 82.05% | 4087 ms | ↓ 0.66x | 35 | 3h 17m | 23h ago | 35m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.02% | 88.68% | 20.14% | 20.14% | 4522 ms | ↓ 0.91x | 150 | 9m | 8h ago | 40m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.47% | 96.92% | 99.59% | 99.59% | 4076 ms | ↑ 1.34x | 3 | 6h 10m | 4d ago | 50m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 84.52% | 92.03% | 92.04% | 92.04% | 2217 ms | ↑ 1.11x | 4 | 6h 14m | 20h ago | 33m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 83.54% | 33.62% | 24.18% | 24.18% | 3170 ms | ↑ 1.13x | 189 | 2h 7m | 3h ago | 31m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 82.81% | 95.07% | 99.31% | 99.31% | 3936 ms | ↑ 1.18x | 12 | 2h 27m | 3d ago | 44m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 81.33% | 82.28% | 82.28% | 82.28% | 4294 ms | → 0.96x | 82 | 55m | 2h ago | 31m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 79.36% | 86.69% | 92.57% | 92.57% | 3772 ms | ↓ 0.86x | 91 | 34m | 6h ago | 33m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 70.17% | 88.34% | 35.15% | 35.15% | 1920 ms | ↑ 1.08x | 14 | 5h 29m | 1h ago | 40m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 67.08% | 74.90% | 84.88% | 84.88% | 1126 ms | ↑ 1.98x | 7 | 1d 2h | 18h ago | 31m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 66.01% | 70.25% | 23.74% | 23.74% | 4726 ms | → 1.01x | 305 | 19m | 8m ago | 39m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 37.59% | 32.65% | 32.65% | 32.65% | 1236 ms | ↓ 0.90x | 1 | 13d 23h | 17d ago | 31m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 33.33% | 57.82% | 88.52% | 88.52% | 2050 ms | ↑ 1.55x | 1 | 12d 20h | 15d ago | 48m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 26.16% | 6.19% | 30.70% | 30.70% | 2139 ms | → 1.00x | 1 | 28d 2h | 30d ago | 39m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 25.78% | 6.09% | 74.45% | 74.45% | 3458 ms | → 1.00x | 1 | 28d 3h | 30d ago | 51m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 16.95% | 69.18% | 92.09% | 92.09% | 4743 ms | ↑ 2.20x | 3 | 2d 24h | 7d ago | 36m ago |

</details>

<details open>
<summary><strong>🔴 Down (259)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.77% | 99.65% | 99.43% | 99.43% | 4834 ms | ↑ 1.73x | 5 | 4m | 33m ago | 33m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 97.83% | 99.43% | 99.69% | 99.69% | 3366 ms | ↑ 1.09x | 9 | 3m | 49m ago | 49m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 95.82% | 97.01% | 88.41% | 88.41% | 4740 ms | ↑ 1.23x | 8 | 43m | 33m ago | 33m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.64% | 97.02% | 98.53% | 98.53% | 4367 ms | ↑ 1.14x | 50 | 1m | 44m ago | 44m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 90.22% | 34.64% | 31.91% | 31.91% | 2182 ms | ↑ 1.17x | 2 | 9d 19h | 16h ago | 40m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 90.17% | 97.67% | 98.53% | 98.53% | 643 ms | ↓ 0.64x | 1 | 16h 19m | 16h ago | 33m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.47% | 89.26% | 56.97% | 56.97% | 4026 ms | ↑ 1.06x | 150 | 7m | 35m ago | 35m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 75.43% | 92.91% | 95.66% | 95.66% | 849 ms | → 1.04x | 29 | 1h 21m | 2d ago | 32m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.64% | 69.98% | 62.50% | 62.50% | 4777 ms | → 0.99x | 322 | 18m | 1h ago | 46m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 70.53% | 83.50% | 97.33% | 97.33% | 4641 ms | ↑ 1.27x | 153 | 23m | 48m ago | 48m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 56.02% | 89.52% | 93.65% | 93.65% | 2089 ms | ↑ 1.93x | 2 | 1d 13h | 3d ago | 31m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 47.42% | 87.44% | 87.90% | 87.90% | 4939 ms | ↑ 2.26x | 60 | 1h 4m | 2h ago | 34m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 45.54% | 83.31% | 79.33% | 79.33% | 152 ms | ↑ 1.07x | 5 | 23h 22m | 4d ago | 50m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 40.54% | 47.16% | 47.06% | 47.06% | 799 ms | → 0.98x | 2 | 2d 1h | 4d ago | 32m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 31.94% | 65.42% | 62.54% | 62.54% | 4497 ms | ↑ 1.41x | 3 | 1d 13h | 5d ago | 34m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 31.94% | 83.60% | 89.52% | 89.52% | 4363 ms | ↑ 2.58x | 4 | 1d 4h | 5d ago | 34m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 31.94% | 83.78% | 87.87% | 87.87% | 3782 ms | ↑ 2.33x | 4 | 1d 4h | 5d ago | 34m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 31.94% | 83.84% | 89.47% | 89.47% | 3370 ms | ↑ 2.83x | 3 | 1d 13h | 5d ago | 34m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 31.20% | 83.32% | 90.43% | 90.43% | 4290 ms | ↑ 3.19x | 13 | 8h 36m | 5d ago | 34m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 30.71% | 37.99% | 35.68% | 35.68% | 4229 ms | → 0.99x | 8 | 14h 5m | 5d ago | 34m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 28.50% | 82.99% | 89.39% | 89.39% | 1377 ms | ↓ 0.90x | 2 | 2d 12h | 5d ago | 32m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 14.70% | 79.77% | 97.93% | 97.93% | 1951 ms | → 1.00x | 2 | 2d 23h | 6d ago | 50m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.41% | 1.71% | 58.62% | 58.62% | 4289 ms | ↑ 1.18x | 30 | 23h 16m | 11h ago | 51m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.24% | 51.94% | 51.00% | 51.00% | 1570 ms | ↓ 0.84x | 8 | 1d 18h | 4d ago | 46m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 79.74% | 79.74% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 66.04% | 66.04% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 71.04% | 71.04% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.52% | 45.72% | 45.72% | — | — | 1 | 29d 21h | 30d ago | 32m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 77.35% | 77.35% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 58.07% | 58.07% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.44% | 5.44% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.06% | 12.06% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 54.04% | 54.04% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.27% | 3.27% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 72.71% | 91.62% | 91.62% | — | — | 1 | 8d 4h | 8d ago | 35m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 65.03% | 65.03% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 79.98% | 79.98% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.10% | 35.10% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 89.32% | 89.32% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.55% | 22.55% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 71.77% | 71.77% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 48.62% | 48.62% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.61% | 28.61% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 54.39% | 88.55% | 88.55% | — | — | 6 | 2d 6h | 14d ago | 49m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 80.36% | 80.36% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 60.53% | 60.53% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 74.23% | 74.23% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 22h | 8d ago | 50m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.25% | 14.25% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 47.49% | 47.49% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 20.06% | 91.19% | 91.19% | — | — | 5 | 4d 19h | 24d ago | 46m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 32.59% | 32.59% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 80.73% | 80.73% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 54.72% | 88.22% | 88.22% | — | — | 1 | 13d 16h | 14d ago | 36m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.31% | 3.31% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 80.58% | 80.58% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 31.91% | 31.91% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.01% | 50.01% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 38.79% | 31.54% | 31.54% | — | — | 4 | 4d 14h | 7d ago | 39m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.98% | 1.98% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 88.25% | 88.25% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 55.46% | 55.41% | 55.41% | — | — | 1 | 9d 2h | 9d ago | 31m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 10.63% | 73.12% | 73.12% | — | — | 1 | 26d 21h | 27d ago | 36m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 72.75% | 72.75% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 29.48% | 29.48% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.63% | 52.63% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 12.49% | 50.25% | 50.25% | — | — | 1 | 26d 7h | 26d ago | 35m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.41% | 23.41% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 46.27% | 80.71% | 80.71% | — | — | 6 | 2d 17h | 16d ago | 51m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 45.71% | 40.34% | 40.34% | — | — | 3 | 5d 12h | 16d ago | 46m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 4h | 14d ago | 31m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 47.74% | 61.55% | 61.55% | — | — | 1 | 15d 21h | 16d ago | 34m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 55.14% | 55.14% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 23.10% | 23.10% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.07% | 5.07% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 63.45% | 63.45% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 80.31% | 80.31% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 69.34% | 80.99% | 80.99% | — | — | 4 | 2d 7h | 9d ago | 35m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.25% | 6.25% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 76.70% | 76.70% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 79.12% | 79.12% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 31.16% | 31.16% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 55.27% | 91.08% | 91.08% | — | — | 2 | 6d 17h | 13d ago | 38m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 25.54% | 25.54% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 10.86% | 23.14% | 23.14% | — | — | 3 | 8d 21h | 25d ago | 35m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.01% | 51.01% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 51.79% | 51.79% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.78% | 7.78% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 62.58% | 62.58% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.06% | 45.06% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 33.62% | 33.58% | 33.58% | — | — | 3 | 3d 2h | 9d ago | 33m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.95% | 40.95% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 26.74% | 26.74% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 80.32% | 80.32% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 56.73% | 56.73% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.68% | 37.68% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 38.41% | 72.74% | 72.74% | — | — | 2 | 9d 7h | 19d ago | 37m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 77.32% | 77.32% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 22.71% | 72.51% | 72.51% | — | — | 2 | 11d 15h | 23d ago | 35m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.46% | 2.46% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 80.54% | 80.54% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.29% | 40.29% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 37.94% | 94.44% | 94.44% | — | — | 1 | 18d 18h | 19d ago | 45m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 80.29% | 80.29% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.70% | 31.70% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 80.21% | 80.21% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 49.69% | 49.69% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 21.44% | 21.44% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 42.64% | 42.64% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 77.95% | 77.95% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 62.86% | 62.86% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 27.70% | 27.70% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 4h | 14d ago | 33m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 76.48% | 76.48% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 4h | 14d ago | 33m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 48.29% | 48.29% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.07% | 3.07% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 4h | 14d ago | 33m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.84% | 41.84% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 74.93% | 74.93% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 28.84% | 40.36% | 40.36% | — | — | 4 | 5d 9h | 21d ago | 47m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 57.17% | 57.17% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 42.09% | 42.04% | 42.04% | — | — | 1 | 8d 2h | 8d ago | 33m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 40.58% | 40.58% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 59.38% | 59.38% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 86.12% | 86.12% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.42% | 27.42% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.73% | 11.73% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 22.73% | 22.73% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.36% | 23.36% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 3.26% | 51.32% | 51.32% | — | — | 1 | 29d 1h | 29d ago | 47m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 10.83% | 91.19% | 91.19% | — | — | 3 | 8d 22h | 27d ago | 49m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 53.30% | 53.30% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 24.56% | 73.46% | 73.46% | — | — | 1 | 22d 17h | 23d ago | 36m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.38% | 9.38% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.93% | 16.93% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.98% | 47.98% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 59.81% | 50.63% | 50.63% | — | — | 2 | 6d | 12d ago | 38m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 21.82% | 21.82% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.47% | 53.47% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 92.55% | 92.55% | — | — | 1 | 7d 22h | 8d ago | 44m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 37.75% | 37.75% | — | — | 1 | 14d 4h | 14d ago | 39m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.65% | 21.65% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 32.99% | 32.99% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 45.66% | 45.66% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.38% | 5.38% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 9.43% | 78.03% | 78.03% | — | — | 1 | 27d 6h | 27d ago | 39m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 87.52% | 87.52% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 29.59% | 59.81% | 59.81% | — | — | 1 | 21d 7h | 21d ago | 31m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 80.40% | 80.40% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 79.36% | 79.36% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 61.89% | 61.89% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 72.67% | 72.67% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 79.21% | 79.21% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 24h | 8d ago | 33m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.93% | 18.93% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 7.46% | 57.95% | 57.95% | — | — | 1 | 27d 20h | 28d ago | 50m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 10.34% | 40.03% | 40.03% | — | — | 1 | 26d 22h | 27d ago | 36m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.23% | 3.95% | 3.95% | — | — | 2 | 14d 23h | 29d ago | 46m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.01% | 33.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.71% | 66.48% | 66.48% | — | — | 4 | 7d 5h | 28d ago | 48m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 12.28% | 24.35% | 24.35% | — | — | 22 | 1d 4h | 25d ago | 38m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.21% | 7.21% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 63.65% | 63.65% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 29.40% | 29.40% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 65.52% | 65.52% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 37.42% | 37.42% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.89% | 4.89% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 22h | 8d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 10.87% | 53.51% | 53.51% | — | — | 1 | 26d 18h | 27d ago | 34m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 46.60% | 46.60% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 34.21% | 34.21% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 20.64% | 20.64% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 28.94% | 5.31% | 5.31% | — | — | 3 | 7d 4h | 21d ago | 48m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.34% | 11.34% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.41% | 17.41% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.80% | 16.80% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 31.23% | 31.23% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.63% | 9.63% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 8.38% | 8.38% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.83% | 0.83% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.73% | 4.73% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.51% | 5.51% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.39% | 48.39% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 44.44% | 44.44% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 80.37% | 80.37% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 1.86% | 71.29% | 71.29% | — | — | 1 | 29d 12h | 29d ago | 35m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 44.76% | 44.76% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 80.56% | 80.56% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 51.10% | 51.10% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.13% | 40.13% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.75% | 1.75% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.83% | 18.83% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 4h | 14d ago | 33m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 78.37% | 78.37% | — | — | 1 | 29d 24h | 30d ago | 43m ago |

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
