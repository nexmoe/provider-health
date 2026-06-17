# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 362 🟢 operational · 54 🟡 degraded · 255 🔴 down · 0 ⚫ unknown

_Updated 2026-06-17 08:31 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (362)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.13% | 98.13% | 766 ms | ↑ 1.12x | 1 | 0s | 20d ago | 14m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1607 ms | → 0.95x | 0 | — | — | 11m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.78% | 93.78% | 2236 ms | ↑ 1.61x | 3 | 0s | 11d ago | 18m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.48% | 72.48% | 72.48% | 936 ms | → 0.96x | 8 | 4m | 11d ago | 19m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.45% | 97.45% | 3973 ms | ↑ 1.39x | 0 | — | — | 28m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 55.71% | 55.71% | 1895 ms | ↑ 1.25x | 0 | — | — | 17m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.87% | 99.87% | 99.87% | 1216 ms | → 1.00x | 1 | 0s | 12d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.86% | 97.86% | 3742 ms | ↑ 1.20x | 2 | 0s | 20d ago | 24m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.71% | 98.65% | 98.65% | 1177 ms | ↓ 0.87x | 5 | 0s | 8d ago | 19m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.81% | 98.81% | 2307 ms | ↑ 1.24x | 0 | — | — | 30m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.49% | 99.49% | 3631 ms | ↑ 1.13x | 1 | 0s | 27d ago | 30m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.88% | 99.27% | 99.27% | 378 ms | ↓ 0.27x | 1 | 19m | 29d ago | 13m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.16% | 95.16% | 2952 ms | ↑ 1.37x | 0 | — | — | 14m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2145 ms | ↑ 1.48x | 0 | — | — | 13m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.69% | 97.69% | 3434 ms | ↑ 1.48x | 0 | — | — | 14m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 99.14% | 98.61% | 98.61% | 1376 ms | ↓ 0.55x | 4 | 1h 2m | 8d ago | 13m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.96% | 99.96% | 2016 ms | ↑ 1.37x | 0 | — | — | 13m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1316 ms | ↑ 1.57x | 0 | — | — | 11m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.63% | 98.63% | 1549 ms | ↑ 1.32x | 0 | — | — | 15m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.62% | 96.85% | 96.85% | 1766 ms | ↑ 1.10x | 1 | 8h 47m | 7d ago | 14m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.85% | 98.85% | 834 ms | ↓ 0.69x | 0 | — | — | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 37.40% | 37.40% | 885 ms | ↑ 1.70x | 0 | — | — | 25m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1698 ms | ↑ 1.24x | 0 | — | — | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.83% | 99.86% | 99.86% | 1910 ms | ↑ 1.87x | 2 | 10m | 8d ago | 14m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.94% | 96.94% | 2871 ms | ↑ 1.29x | 1 | 0s | 22d ago | 18m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.87% | 98.87% | 1114 ms | ↑ 1.27x | 2 | 15m | 8d ago | 27m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1377 ms | ↑ 1.71x | 1 | 0s | 26d ago | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.72% | 96.72% | 902 ms | ↑ 1.32x | 0 | — | — | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.25% | 87.31% | 87.31% | 1966 ms | ↑ 1.98x | 3 | 1h 24m | 19d ago | 16m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1838 ms | ↑ 1.08x | 1 | 0s | 26d ago | 12m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.36% | 98.36% | 4226 ms | ↑ 1.47x | 1 | 60m | 27d ago | 16m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.16% | 98.16% | 472 ms | ↑ 1.74x | 0 | — | — | 14m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.62% | 85.62% | 2765 ms | ↑ 2.09x | 0 | — | — | 15m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.69% | 97.69% | 1881 ms | ↑ 1.33x | 0 | — | — | 17m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 853 ms | ↑ 1.15x | 0 | — | — | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3026 ms | ↑ 1.13x | 0 | — | — | 26m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.02% | 99.02% | 786 ms | ↑ 2.23x | 0 | — | — | 17m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.88% | 97.88% | 4180 ms | ↑ 1.13x | 1 | 0s | 23d ago | 29m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.30% | 96.30% | 1244 ms | ↑ 1.09x | 0 | — | — | 16m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.17% | 84.86% | 84.86% | 1915 ms | ↑ 1.18x | 9 | 6h 19m | 8d ago | 14m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1190 ms | → 1.00x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1812 ms | → 1.00x | 0 | — | — | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.69% | 98.91% | 98.91% | 3214 ms | ↑ 1.14x | 3 | 4h 28m | 11d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.85% | 99.85% | 1330 ms | ↑ 1.22x | 2 | 0s | 8d ago | 14m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 2056 ms | → 1.04x | 0 | — | — | 26m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.80% | 99.80% | 99.80% | 634 ms | ↓ 0.36x | 1 | 51m | 17d ago | 11m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 4104 ms | ↑ 1.18x | 1 | 0s | 23d ago | 24m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.70% | 99.70% | 1286 ms | → 1.05x | 1 | 0s | 16d ago | 15m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1309 ms | ↑ 1.22x | 0 | — | — | 11m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 30.11% | 30.11% | 1150 ms | ↑ 1.14x | 0 | — | — | 26m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.16% | 96.19% | 96.19% | 2524 ms | ↑ 1.23x | 1 | 12h 2m | 22d ago | 14m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.04% | 97.83% | 97.83% | 4164 ms | → 0.98x | 13 | 48m | 14d ago | 15m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1245 ms | ↓ 0.68x | 0 | — | — | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 482 ms | ↓ 0.52x | 0 | — | — | 13m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 100.00% | 97.49% | 97.49% | 2515 ms | ↑ 1.37x | 0 | — | — | 20m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.70% | 96.70% | 876 ms | → 0.99x | 0 | — | — | 18m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.11% | 98.02% | 98.02% | 1953 ms | → 1.04x | 1 | 21h 30m | 13d ago | 11m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1174 ms | → 1.00x | 0 | — | — | 11m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 54.86% | 54.86% | 1996 ms | ↑ 1.50x | 0 | — | — | 20m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.88% | 99.67% | 99.67% | 1722 ms | ↓ 0.45x | 2 | 0s | 15d ago | 12m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 44.95% | 47.20% | 47.20% | 517 ms | → 0.95x | 1 | 16d 18h | 26d ago | 19m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1856 ms | ↑ 1.65x | 1 | 0s | 26d ago | 11m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3735 ms | ↑ 1.10x | 0 | — | — | 25m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.15% | 97.15% | 1665 ms | ↑ 1.20x | 0 | — | — | 25m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.39% | 83.39% | 3341 ms | ↑ 1.56x | 0 | — | — | 19m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1332 ms | → 1.00x | 0 | — | — | 13m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.69% | 98.69% | 2889 ms | ↑ 1.39x | 0 | — | — | 16m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4406 ms | ↑ 1.43x | 1 | 0s | 26d ago | 11m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.90% | 92.90% | 756 ms | → 0.97x | 1 | 0s | 23d ago | 19m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.65% | 98.65% | 1427 ms | ↑ 1.38x | 0 | — | — | 15m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.84% | 99.84% | 641 ms | ↑ 1.97x | 3 | 0s | 14d ago | 17m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.36% | 99.36% | 845 ms | ↓ 0.64x | 0 | — | — | 13m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1880 ms | → 1.00x | 0 | — | — | 11m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 79.45% | 89.28% | 89.28% | 1410 ms | ↑ 1.46x | 2 | 2d 24h | 10d ago | 14m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.94% | 47.66% | 47.66% | 2161 ms | ↑ 1.58x | 1 | 0s | 8d ago | 20m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2397 ms | → 1.00x | 0 | — | — | 11m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.38% | 76.38% | 1377 ms | ↑ 1.42x | 0 | — | — | 19m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 100.00% | 96.01% | 96.01% | 1278 ms | ↑ 1.68x | 0 | — | — | 11m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1014 ms | ↓ 0.95x | 0 | — | — | 11m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.20% | 98.20% | 2775 ms | ↑ 1.37x | 0 | — | — | 17m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 33.56% | 31.93% | 31.93% | 2182 ms | ↑ 1.16x | 1 | 19d 22h | 30d ago | 20m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1134 ms | → 1.00x | 0 | — | — | 11m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2579 ms | ↑ 1.70x | 1 | 0s | 26d ago | 11m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.91% | 99.91% | 99.91% | 1550 ms | ↓ 0.76x | 1 | 0s | 11d ago | 11m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.89% | 82.21% | 82.21% | 2384 ms | ↑ 1.54x | 2 | 0s | 8d ago | 19m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.03% | 98.03% | 1031 ms | ↑ 1.13x | 0 | — | — | 20m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.86% | 99.86% | 2482 ms | ↑ 1.34x | 1 | 0s | 26d ago | 12m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 60.48% | 60.48% | 1752 ms | → 0.96x | 1 | 0s | 29d ago | 19m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.58% | 63.58% | 1919 ms | ↑ 1.30x | 0 | — | — | 19m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.22% | 99.22% | 1801 ms | ↑ 1.20x | 0 | — | — | 19m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.81% | 99.81% | 1476 ms | ↓ 0.57x | 0 | — | — | 16m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.58% | 99.58% | 680 ms | ↓ 0.88x | 1 | 0s | 18d ago | 19m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 19.38% | 19.38% | 1900 ms | ↑ 1.32x | 1 | 0s | 13d ago | 25m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.89% | 99.73% | 99.73% | 2830 ms | ↑ 1.24x | 2 | 0s | 28d ago | 29m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2281 ms | → 1.04x | 0 | — | — | 11m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.04% | 99.04% | 3898 ms | ↑ 1.19x | 1 | 29m | 23d ago | 29m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.16% | 98.16% | 3865 ms | ↑ 1.26x | 0 | — | — | 30m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.49% | 99.90% | 99.90% | 1056 ms | ↑ 1.13x | 4 | 29m | 15d ago | 26m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 75.22% | 75.22% | 2881 ms | ↑ 1.33x | 0 | — | — | 17m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1224 ms | → 1.00x | 0 | — | — | 12m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1017 ms | → 1.00x | 0 | — | — | 10m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.61% | 99.61% | 1713 ms | ↑ 1.54x | 1 | 2h 60m | 10d ago | 13m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1807 ms | ↑ 1.38x | 0 | — | — | 30m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 624 ms | ↓ 0.33x | 1 | 0s | 21d ago | 30m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.89% | 99.63% | 99.63% | 2544 ms | ↑ 1.39x | 2 | 0s | 8d ago | 28m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.52% | 89.52% | 1492 ms | ↓ 0.71x | 0 | — | — | 18m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 78.85% | 78.85% | 2253 ms | ↑ 1.07x | 0 | — | — | 16m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.79% | 99.79% | 839 ms | ↑ 1.22x | 1 | 0s | 20d ago | 29m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 650 ms | ↑ 1.21x | 0 | — | — | 13m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 84.56% | 84.56% | 2870 ms | ↑ 1.44x | 0 | — | — | 14m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2382 ms | ↑ 1.31x | 0 | — | — | 11m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2281 ms | ↑ 1.58x | 0 | — | — | 14m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.05% | 99.05% | 1100 ms | ↑ 1.61x | 0 | — | — | 20m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.41% | 97.41% | 2495 ms | ↑ 3.04x | 0 | — | — | 14m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.87% | 99.87% | 99.87% | 1786 ms | ↑ 1.29x | 1 | 0s | 11d ago | 11m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.88% | 99.94% | 99.94% | 1985 ms | ↑ 2.11x | 2 | 0s | 8d ago | 11m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2346 ms | ↑ 1.32x | 0 | — | — | 11m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.83% | 87.40% | 87.40% | 1401 ms | ↑ 1.07x | 3 | 0s | 25d ago | 28m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 68.36% | 79.06% | 79.06% | 1371 ms | ↑ 1.11x | 3 | 3d 5h | 19d ago | 13m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.86% | 98.86% | 496 ms | ↑ 1.71x | 0 | — | — | 16m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.77% | 99.05% | 99.05% | 1314 ms | ↑ 1.30x | 4 | 0s | 10d ago | 13m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.98% | 98.98% | 3268 ms | ↑ 2.38x | 0 | — | — | 20m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 83.97% | 83.97% | 1458 ms | ↑ 1.42x | 0 | — | — | 14m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.27% | 97.53% | 97.53% | 495 ms | ↓ 0.83x | 6 | 1h 34m | 26d ago | 12m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.73% | 99.73% | 99.73% | 710 ms | → 1.02x | 1 | 1h | 17d ago | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.89% | 99.89% | 1690 ms | ↑ 1.34x | 2 | 11m | 18d ago | 11m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 23.19% | 23.19% | 2503 ms | ↑ 2.25x | 0 | — | — | 20m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1528 ms | ↑ 1.68x | 0 | — | — | 31m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2826 ms | ↑ 1.10x | 0 | — | — | 30m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.87% | 98.78% | 98.78% | 2873 ms | ↑ 1.68x | 15 | 43m | 14d ago | 16m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 687 ms | ↑ 1.15x | 0 | — | — | 28m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 98.10% | 98.10% | 1624 ms | ↑ 1.24x | 0 | — | — | 14m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.09% | 98.09% | 1069 ms | ↓ 0.60x | 0 | — | — | 18m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 97.88% | 19.24% | 19.24% | 626 ms | ↓ 0.34x | 7 | 1h 40m | 7d ago | 20m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.73% | 99.73% | 844 ms | ↑ 1.39x | 0 | — | — | 30m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.72% | 99.72% | 1632 ms | ↑ 1.08x | 4 | 8m | 11d ago | 24m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 634 ms | ↓ 0.61x | 0 | — | — | 13m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.73% | 98.73% | 4710 ms | ↑ 1.10x | 0 | — | — | 31m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1140 ms | ↓ 0.41x | 0 | — | — | 28m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2213 ms | ↑ 1.37x | 0 | — | — | 13m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2758 ms | ↑ 1.15x | 0 | — | — | 25m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.89% | 99.34% | 99.34% | 2334 ms | ↑ 1.40x | 2 | 0s | 8d ago | 20m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 41.84% | 41.84% | 949 ms | ↑ 1.12x | 1 | 0s | 7d ago | 30m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.53% | 98.53% | 2492 ms | ↓ 0.55x | 0 | — | — | 17m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1161 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.89% | 99.45% | 99.45% | 2883 ms | → 1.05x | 2 | 0s | 20d ago | 24m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1519 ms | ↑ 1.09x | 3 | 10m | 11d ago | 17m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.60% | 99.25% | 99.25% | 2224 ms | ↑ 1.74x | 3 | 30m | 7d ago | 29m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2451 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.67% | 99.67% | 727 ms | ↓ 0.48x | 0 | — | — | 14m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 470 ms | ↓ 0.91x | 0 | — | — | 11m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 692 ms | → 0.98x | 0 | — | — | 29m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.12% | 61.12% | 1252 ms | → 1.05x | 0 | — | — | 19m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.94% | 21.46% | 21.46% | 688 ms | ↓ 0.34x | 1 | 0s | 8d ago | 20m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2660 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 100.00% | 100.00% | 100.00% | 2778 ms | → 1.00x | 0 | — | — | 11m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.60% | 59.38% | 59.38% | 1277 ms | ↓ 0.40x | 3 | 40m | 7d ago | 20m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.19% | 80.06% | 80.06% | 2293 ms | ↑ 1.23x | 1 | 13h | 14d ago | 30m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.89% | 99.89% | 1288 ms | ↑ 1.40x | 1 | 0s | 7d ago | 28m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1124 ms | → 1.00x | 0 | — | — | 29m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 44.14% | 44.14% | 196 ms | → 1.04x | 1 | 0s | 7d ago | 17m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1025 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1880 ms | ↑ 1.78x | 1 | 0s | 26d ago | 11m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1199 ms | ↑ 1.21x | 1 | 0s | 20d ago | 14m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.94% | 99.04% | 99.04% | 3782 ms | ↑ 1.43x | 1 | 0s | 7d ago | 28m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.48% | 98.48% | 1866 ms | ↑ 1.31x | 0 | — | — | 14m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.18% | 98.18% | 577 ms | ↓ 0.50x | 0 | — | — | 15m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.91% | 69.91% | 1281 ms | ↑ 1.32x | 0 | — | — | 19m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1324 ms | ↑ 1.05x | 0 | — | — | 11m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1243 ms | → 1.00x | 0 | — | — | 11m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 2111 ms | ↑ 1.29x | 0 | — | — | 28m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 761 ms | ↓ 0.24x | 1 | 0s | 26d ago | 12m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.58% | 92.58% | 1681 ms | → 1.02x | 3 | 0s | 15d ago | 18m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.89% | 99.86% | 99.86% | 673 ms | ↓ 0.65x | 2 | 0s | 8d ago | 24m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 26.14% | 19.12% | 19.12% | 2873 ms | → 1.01x | 2 | 11d 2h | 8d ago | 14m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.77% | 85.43% | 85.43% | 2272 ms | ↑ 1.06x | 4 | 0s | 8d ago | 29m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 99.94% | 52.50% | 52.50% | 861 ms | ↑ 1.41x | 1 | 0s | 13d ago | 17m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.51% | 85.51% | 1357 ms | ↑ 2.86x | 0 | — | — | 28m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.00% | 91.00% | 470 ms | ↑ 1.22x | 0 | — | — | 17m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.30% | 99.30% | 2378 ms | ↑ 1.17x | 0 | — | — | 19m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.57% | 67.57% | 1529 ms | ↑ 1.74x | 1 | 0s | 19d ago | 19m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.69% | 96.69% | 1599 ms | → 1.04x | 0 | — | — | 19m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.88% | 99.86% | 99.86% | 2028 ms | ↑ 1.73x | 2 | 0s | 20d ago | 11m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 21.06% | 21.06% | 2863 ms | ↑ 1.70x | 1 | 0s | 13d ago | 25m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2691 ms | ↑ 1.10x | 0 | — | — | 29m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 96.43% | 97.29% | 97.29% | 627 ms | ↓ 0.61x | 1 | 1d | 19d ago | 13m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4429 ms | ↑ 1.27x | 0 | — | — | 12m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.38% | 58.38% | 722 ms | ↑ 1.15x | 0 | — | — | 19m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 40.76% | 40.76% | 3453 ms | ↑ 1.44x | 1 | 0s | 25d ago | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.23% | 99.23% | 4167 ms | ↑ 1.20x | 1 | 0s | 19d ago | 24m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 3502 ms | ↑ 1.18x | 0 | — | — | 29m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2484 ms | ↑ 1.26x | 1 | 30m | 25d ago | 18m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.20% | 91.93% | 91.93% | 2646 ms | → 1.03x | 5 | 7h 46m | 16d ago | 16m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2362 ms | ↑ 1.20x | 0 | — | — | 18m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.48% | 98.77% | 98.77% | 2410 ms | ↑ 1.16x | 4 | 37m | 12d ago | 13m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.71% | 79.71% | 1678 ms | ↓ 0.81x | 0 | — | — | 19m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 190 ms | → 1.01x | 1 | 0s | 20d ago | 29m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2686 ms | ↑ 1.82x | 0 | — | — | 11m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2695 ms | ↑ 1.38x | 0 | — | — | 28m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1408 ms | → 0.97x | 1 | 0s | 26d ago | 12m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 2222 ms | ↑ 1.19x | 0 | — | — | 25m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.08% | 91.35% | 91.35% | 2803 ms | ↓ 0.88x | 16 | 0s | 8d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.12% | 80.12% | 2652 ms | ↑ 1.46x | 1 | 0s | 22d ago | 19m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.64% | 86.64% | 3123 ms | → 0.99x | 0 | — | — | 18m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.93% | 99.93% | 1833 ms | ↑ 1.43x | 1 | 0s | 26d ago | 12m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.14% | 96.14% | 2501 ms | ↑ 1.75x | 0 | — | — | 20m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1384 ms | ↑ 1.41x | 0 | — | — | 28m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.59% | 98.59% | 865 ms | ↑ 1.48x | 0 | — | — | 17m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 22.72% | 22.72% | 798 ms | ↑ 2.15x | 0 | — | — | 19m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 932 ms | → 1.00x | 0 | — | — | 16m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.54% | 61.54% | 2522 ms | ↑ 1.24x | 0 | — | — | 19m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.82% | 99.82% | 3143 ms | ↑ 1.09x | 1 | 0s | 15d ago | 29m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 69.23% | 32.36% | 32.36% | 969 ms | → 0.98x | 1 | 8d 21h | 30d ago | 29m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.64% | 92.64% | 27 ms | ↑ 1.11x | 0 | — | — | 14m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.57% | 98.89% | 98.89% | 1739 ms | ↑ 1.51x | 2 | 6h 50m | 18d ago | 28m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 19.36% | 19.36% | 1669 ms | ↑ 1.64x | 0 | — | — | 28m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1020 ms | ↓ 0.75x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3720 ms | ↑ 1.73x | 0 | — | — | 13m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 510 ms | ↓ 0.56x | 0 | — | — | 13m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.47% | 93.47% | 4677 ms | ↑ 1.12x | 0 | — | — | 29m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.72% | 99.56% | 99.56% | 2008 ms | ↑ 1.20x | 1 | 1h 20m | 19d ago | 28m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2255 ms | ↑ 1.20x | 1 | 0s | 13d ago | 18m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.23% | 99.23% | 1146 ms | ↑ 1.14x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.89% | 99.89% | 1588 ms | → 0.99x | 1 | 0s | 26d ago | 12m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 42.85% | 42.85% | 1440 ms | ↑ 1.08x | 2 | 0s | 12d ago | 29m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.58% | 99.58% | 1786 ms | ↑ 1.11x | 1 | 0s | 28d ago | 30m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.46% | 99.46% | 2245 ms | ↑ 1.68x | 0 | — | — | 28m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 608 ms | ↑ 1.32x | 0 | — | — | 31m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.83% | 62.07% | 62.07% | 2771 ms | ↑ 1.06x | 3 | 0s | 8d ago | 29m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.74% | 98.74% | 3130 ms | ↑ 1.16x | 0 | — | — | 14m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.73% | 96.73% | 3563 ms | ↑ 1.23x | 0 | — | — | 29m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 677 ms | ↓ 0.30x | 0 | — | — | 11m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.59% | 99.59% | 99.59% | 1148 ms | ↓ 0.63x | 3 | 20m | 8d ago | 11m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.80% | 99.80% | 854 ms | ↑ 1.21x | 1 | 20m | 20d ago | 14m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.56% | 88.56% | 2245 ms | ↑ 1.39x | 0 | — | — | 18m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.83% | 99.83% | 1097 ms | ↑ 1.09x | 0 | — | — | 14m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1838 ms | → 1.05x | 0 | — | — | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 2198 ms | ↑ 1.24x | 0 | — | — | 29m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1530 ms | ↑ 1.17x | 0 | — | — | 30m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.88% | 99.92% | 99.92% | 1490 ms | ↑ 1.14x | 2 | 0s | 11d ago | 12m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1404 ms | ↑ 1.23x | 0 | — | — | 30m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 74.39% | 74.39% | 941 ms | ↓ 0.84x | 1 | 0s | 26d ago | 17m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 2887 ms | ↑ 1.10x | 1 | 0s | 22d ago | 26m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1005 ms | ↑ 1.06x | 0 | — | — | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.60% | 84.60% | 2170 ms | ↑ 1.11x | 1 | 0s | 16d ago | 25m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 24.67% | 24.67% | 2604 ms | ↑ 1.31x | 1 | 0s | 14d ago | 31m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.10% | 98.10% | 2598 ms | ↑ 1.46x | 3 | 0s | 19d ago | 14m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.86% | 99.86% | 1742 ms | ↑ 2.02x | 2 | 30m | 14d ago | 11m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.56% | 97.56% | 3424 ms | ↑ 2.09x | 1 | 0s | 11d ago | 14m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.81% | 98.81% | 1051 ms | ↑ 1.29x | 0 | — | — | 19m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.73% | 98.73% | 1892 ms | → 0.98x | 0 | — | — | 27m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.31% | 99.57% | 99.57% | 3109 ms | ↑ 1.46x | 3 | 1h 3m | 23d ago | 12m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.91% | 97.91% | 4254 ms | ↑ 1.36x | 1 | 0s | 29d ago | 16m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1154 ms | ↑ 2.13x | 1 | 0s | 26d ago | 12m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1560 ms | → 1.00x | 0 | — | — | 11m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2798 ms | ↑ 1.45x | 0 | — | — | 11m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 96.78% | 96.78% | 96.78% | 532 ms | ↓ 0.28x | 2 | 6h 36m | 8d ago | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 29.74% | 29.74% | 1252 ms | ↑ 1.32x | 1 | 0s | 30d ago | 27m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1562 ms | ↑ 1.71x | 1 | 0s | 24d ago | 18m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.34% | 98.34% | 2182 ms | ↑ 1.34x | 0 | — | — | 18m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1913 ms | ↑ 1.53x | 0 | — | — | 27m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.55% | 88.55% | 4028 ms | ↑ 1.47x | 0 | — | — | 19m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 12.64% | 12.64% | 2617 ms | → 1.00x | 0 | — | — | 25m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.59% | 96.59% | 3157 ms | ↑ 1.63x | 0 | — | — | 20m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.86% | 99.86% | 1847 ms | ↑ 1.24x | 1 | 0s | 7d ago | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 19.36% | 19.36% | 1938 ms | → 1.03x | 0 | — | — | 29m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1037 ms | ↑ 1.22x | 0 | — | — | 13m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.08% | 97.08% | 2663 ms | ↑ 1.55x | 0 | — | — | 14m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2657 ms | ↑ 1.29x | 1 | 0s | 22d ago | 27m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.92% | 99.92% | 784 ms | ↓ 0.92x | 2 | 10m | 7d ago | 28m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 21.20% | 21.20% | 3792 ms | ↑ 1.73x | 0 | — | — | 20m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 19.16% | 19.16% | 2295 ms | ↑ 1.47x | 0 | — | — | 20m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.48% | 99.68% | 99.68% | 3352 ms | ↓ 0.91x | 5 | 24m | 9d ago | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.75% | 99.75% | 2928 ms | ↑ 1.22x | 1 | 2h 18m | 25d ago | 16m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 2259 ms | ↑ 1.31x | 0 | — | — | 29m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2235 ms | → 1.00x | 0 | — | — | 11m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.89% | 99.65% | 99.65% | 2582 ms | ↑ 1.16x | 2 | 0s | 30d ago | 27m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 894 ms | ↓ 0.53x | 0 | — | — | 27m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 316 ms | → 1.00x | 0 | — | — | 11m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.60% | 98.60% | 1892 ms | ↑ 1.48x | 0 | — | — | 14m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 2245 ms | ↑ 1.17x | 1 | 0s | 14d ago | 25m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 3283 ms | ↓ 0.94x | 1 | 0s | 17d ago | 20m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.13% | 99.13% | 1997 ms | ↑ 1.30x | 1 | 0s | 14d ago | 29m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 916 ms | ↑ 2.09x | 0 | — | — | 28m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 410 ms | → 1.00x | 0 | — | — | 11m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.83% | 99.73% | 99.73% | 3434 ms | ↑ 1.20x | 3 | 0s | 59m ago | 29m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.66% | 98.86% | 98.86% | 3142 ms | ↑ 1.22x | 6 | 0s | 20h ago | 30m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.89% | 99.53% | 99.53% | 3682 ms | ↑ 1.08x | 2 | 0s | 2d ago | 29m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.27% | 99.44% | 99.44% | 3253 ms | ↑ 1.17x | 6 | 32m | 2d ago | 30m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 99.83% | 18.51% | 18.51% | 767 ms | → 0.98x | 3 | 0s | 4d ago | 28m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.89% | 89.23% | 89.23% | 2033 ms | ↑ 1.45x | 2 | 0s | 4d ago | 28m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.83% | 99.65% | 99.65% | 1424 ms | ↑ 1.56x | 3 | 0s | 3d ago | 28m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.76% | 96.66% | 30.87% | 30.87% | 2047 ms | ↑ 1.23x | 10 | 1h 59m | 3d ago | 26m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 99.77% | 79.30% | 79.30% | 2283 ms | ↑ 1.10x | 4 | 0s | 5d ago | 25m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.43% | 81.93% | 81.93% | 2581 ms | ↑ 1.37x | 3 | 50m | 6d ago | 19m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.14% | 97.55% | 97.55% | 2343 ms | ↑ 1.33x | 10 | 12m | 2d ago | 17m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.10% | 99.10% | 1468 ms | → 1.04x | 2 | 0s | 4d ago | 18m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.48% | 52.56% | 52.56% | 1313 ms | → 1.01x | 5 | 24m | 18h ago | 20m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.89% | 62.50% | 62.50% | 676 ms | ↓ 0.93x | 2 | 0s | 6d ago | 19m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.94% | 90.21% | 90.21% | 2307 ms | ↑ 1.16x | 1 | 0s | 2d ago | 18m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.83% | 90.38% | 90.38% | 940 ms | → 1.01x | 3 | 0s | 6d ago | 18m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.54% | 21.10% | 21.10% | 1823 ms | ↑ 1.14x | 4 | 30m | 18h ago | 20m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.75% | 99.77% | 80.90% | 80.90% | 3243 ms | ↑ 1.71x | 2 | 26m | 7d ago | 19m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.37% | 98.44% | 98.44% | 1949 ms | ↑ 1.33x | 2 | 2h 9m | 48m ago | 18m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.83% | 20.20% | 20.20% | 1345 ms | ↑ 1.27x | 3 | 0s | 24h ago | 20m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.28% | 96.65% | 96.65% | 4643 ms | ↑ 1.24x | 12 | 43m | 4d ago | 20m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.75% | 99.83% | 21.94% | 21.94% | 1423 ms | ↑ 1.19x | 3 | 0s | 7d ago | 20m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.60% | 98.85% | 98.85% | 2003 ms | ↑ 1.31x | 4 | 15m | 6d ago | 18m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.65% | 98.65% | 98.65% | 2098 ms | ↑ 2.07x | 3 | 1h 47m | 5d ago | 11m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.75% | 99.83% | 98.39% | 98.39% | 2290 ms | ↑ 1.46x | 3 | 0s | 7d ago | 16m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 45.31% | 64.73% | 64.73% | 1089 ms | → 1.04x | 2 | 8d 1h | 1d ago | 15m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.88% | 99.94% | 99.94% | 1169 ms | ↑ 1.11x | 2 | 0s | 4d ago | 11m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.73% | 99.73% | 99.73% | 418 ms | ↓ 0.87x | 2 | 0s | 2d ago | 13m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.75% | 99.77% | 99.79% | 99.79% | 840 ms | ↑ 1.07x | 4 | 0s | 7d ago | 12m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 82.19% | 84.05% | 84.05% | 1296 ms | ↓ 0.43x | 14 | 8h 22m | 2d ago | 12m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.89% | 97.92% | 97.92% | 2754 ms | ↓ 0.75x | 2 | 0s | 7d ago | 16m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.88% | 99.93% | 99.93% | 1918 ms | ↑ 1.55x | 2 | 0s | 3d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.77% | 97.83% | 97.83% | 644 ms | ↓ 0.77x | 4 | 0s | 2h ago | 14m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.33% | 99.33% | 99.33% | 1043 ms | → 0.98x | 2 | 45m | 5d ago | 13m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.75% | 99.71% | 96.47% | 96.47% | 1328 ms | ↑ 1.90x | 2 | 45m | 6d ago | 15m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.87% | 99.87% | 99.87% | 1790 ms | ↑ 1.07x | 1 | 0s | 5d ago | 13m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.54% | 97.42% | 97.42% | 511 ms | ↓ 0.38x | 5 | 16m | 5d ago | 14m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.51% | 99.51% | 2518 ms | ↑ 1.55x | 1 | 0s | 1d ago | 13m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.92% | 99.92% | 2326 ms | ↑ 2.10x | 1 | 0s | 4d ago | 11m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.75% | 98.85% | 96.99% | 96.99% | 1874 ms | ↑ 1.57x | 15 | 10m | 7d ago | 13m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.42% | 99.76% | 99.76% | 4515 ms | ↑ 1.46x | 6 | 20m | 2d ago | 16m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 99.53% | 99.53% | 99.53% | 99.53% | 2372 ms | → 1.00x | 1 | 0s | 3d ago | 11m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.52% | 98.92% | 98.98% | 98.98% | 4140 ms | ↑ 1.09x | 11 | 16m | 1d ago | 27m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.52% | 99.77% | 19.35% | 19.35% | 2160 ms | ↑ 1.05x | 4 | 0s | 2d ago | 28m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.52% | 98.98% | 99.15% | 99.15% | 4157 ms | ↑ 1.15x | 10 | 18m | 1d ago | 27m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.52% | 99.83% | 19.27% | 19.27% | 3764 ms | ↑ 1.30x | 3 | 0s | 1h ago | 24m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.51% | 99.77% | 20.98% | 20.98% | 3154 ms | ↑ 1.66x | 4 | 0s | 7d ago | 20m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.77% | 66.50% | 66.50% | 1353 ms | → 0.97x | 3 | 7m | 1d ago | 19m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 99.51% | 35.63% | 67.43% | 67.43% | 692 ms | → 1.00x | 4 | 4d 19h | 4d ago | 19m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.51% | 99.48% | 98.90% | 98.90% | 2918 ms | ↓ 0.84x | 5 | 24m | 19h ago | 17m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.51% | 99.60% | 67.94% | 67.94% | 1034 ms | ↑ 1.39x | 5 | 12m | 2d ago | 19m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.51% | 99.61% | 99.61% | 99.61% | 1831 ms | ↑ 1.12x | 1 | 30m | 4d ago | 11m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.51% | 97.52% | 98.63% | 98.63% | 997 ms | ↑ 1.88x | 8 | 1h 52m | 2h ago | 13m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.51% | 35.64% | 44.28% | 44.28% | 702 ms | → 1.03x | 4 | 4d 19h | 3d ago | 12m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.51% | 99.88% | 99.93% | 99.93% | 2118 ms | ↑ 1.83x | 2 | 0s | 2d ago | 11m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.51% | 99.54% | 99.56% | 99.56% | 2848 ms | ↑ 1.21x | 8 | 0s | 4d ago | 12m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.51% | 98.73% | 92.00% | 92.00% | 766 ms | → 0.99x | 9 | 32m | 2d ago | 14m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.51% | 96.37% | 82.09% | 82.09% | 1901 ms | ↑ 2.43x | 3 | 8h 40m | 8d ago | 14m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.51% | 99.88% | 86.62% | 86.62% | 1235 ms | ↑ 1.06x | 2 | 0s | 3d ago | 13m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.39% | 99.39% | 99.39% | 99.39% | 1605 ms | → 1.00x | 2 | 0s | 2d ago | 11m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.28% | 99.83% | 92.40% | 92.40% | 3080 ms | ↑ 1.71x | 1 | 50m | 6d ago | 31m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.28% | 98.81% | 98.33% | 98.33% | 4537 ms | → 1.04x | 21 | 0s | 2d ago | 31m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.28% | 99.77% | 92.23% | 92.23% | 4406 ms | ↑ 1.36x | 2 | 25m | 6d ago | 31m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.28% | 99.77% | 55.00% | 55.00% | 1664 ms | ↑ 1.24x | 4 | 0s | 1d ago | 26m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.26% | 99.66% | 98.61% | 98.61% | 1351 ms | ↑ 1.93x | 5 | 6m | 4d ago | 17m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.26% | 93.99% | 93.99% | 93.99% | 1391 ms | ↑ 1.17x | 58 | 19m | 1d ago | 11m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.26% | 97.98% | 96.11% | 96.11% | 2279 ms | ↑ 1.38x | 12 | 45m | 4d ago | 13m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.26% | 99.77% | 99.49% | 99.49% | 4799 ms | ↑ 1.83x | 3 | 7m | 43m ago | 13m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.04% | 99.66% | 96.03% | 96.03% | 3361 ms | ↑ 1.20x | 6 | 0s | 5h ago | 30m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.04% | 98.87% | 86.44% | 86.44% | 3918 ms | ↑ 1.35x | 20 | 0s | 4d ago | 31m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.04% | 98.64% | 68.61% | 68.61% | 3946 ms | → 0.95x | 20 | 5m | 1d ago | 25m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.03% | 98.69% | 17.57% | 17.57% | 3555 ms | ↑ 1.25x | 10 | 32m | 1d ago | 24m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.03% | 98.24% | 98.91% | 98.91% | 2288 ms | ↑ 1.18x | 22 | 11m | 8h ago | 25m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.02% | 96.67% | 95.88% | 95.88% | 3523 ms | ↑ 1.33x | 5 | 4h 7m | 6h ago | 18m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.01% | 99.60% | 99.57% | 99.57% | 1488 ms | ↑ 1.41x | 4 | 14m | 2d ago | 13m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.01% | 98.53% | 89.19% | 89.19% | 4619 ms | ↑ 1.23x | 4 | 38m | 43m ago | 13m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.01% | 99.77% | 99.85% | 99.85% | 1382 ms | ↓ 0.74x | 1 | 1h 9m | 22h ago | 13m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (54)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.77% | 99.71% | 99.76% | 99.76% | 2259 ms | ↑ 1.24x | 1 | 1h 41m | 4d ago | 16m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.77% | 99.48% | 99.68% | 99.68% | 1857 ms | ↓ 0.86x | 5 | 24m | 6d ago | 12m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 98.76% | 98.76% | 98.76% | 98.76% | 3302 ms | → 1.00x | 1 | 1h 58m | 6d ago | 11m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.56% | 98.58% | 85.73% | 85.73% | 4251 ms | → 1.00x | 23 | 3m | 19h ago | 27m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.53% | 98.62% | 66.77% | 66.77% | 4697 ms | → 1.03x | 21 | 4m | 1d ago | 19m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.52% | 99.31% | 96.64% | 96.64% | 1867 ms | ↑ 1.15x | 5 | 38m | 5d ago | 14m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 98.51% | 98.51% | 98.51% | 98.51% | 3460 ms | → 1.00x | 5 | 6m | 1d ago | 11m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.31% | 98.58% | 18.80% | 18.80% | 4420 ms | ↑ 1.16x | 25 | 0s | 2h ago | 24m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.04% | 99.14% | 91.26% | 91.26% | 1626 ms | ↑ 1.16x | 14 | 2m | 3d ago | 18m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 98.03% | 99.43% | 99.43% | 99.43% | 1224 ms | ↓ 0.71x | 3 | 47m | 6d ago | 11m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.79% | 97.79% | 97.79% | 97.79% | 4522 ms | → 1.00x | 9 | 0s | 8h ago | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.78% | 98.33% | 98.61% | 98.61% | 3235 ms | ↑ 1.58x | 27 | 2m | 12h ago | 11m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.78% | 97.17% | 97.89% | 97.89% | 1790 ms | ↑ 2.63x | 9 | 1h 46m | 3d ago | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.54% | 97.24% | 97.77% | 97.77% | 4375 ms | ↑ 1.43x | 24 | 28m | 2d ago | 16m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 97.30% | 94.55% | 72.52% | 72.52% | 2004 ms | ↑ 1.33x | 18 | 1h 29m | 2d ago | 19m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 97.29% | 97.41% | 98.30% | 98.30% | 4023 ms | ↑ 1.42x | 18 | 43m | 4d ago | 16m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.06% | 98.57% | 86.25% | 86.25% | 4538 ms | ↑ 1.09x | 24 | 1m | 2d ago | 20m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 97.04% | 96.43% | 96.22% | 96.22% | 2025 ms | ↓ 0.74x | 9 | 2h 43m | 5d ago | 14m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 96.88% | 84.65% | 97.90% | 97.90% | 1984 ms | ↑ 1.28x | 126 | 29m | 7d ago | 28m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.88% | 98.24% | 96.54% | 96.54% | 1835 ms | ↑ 1.34x | 8 | 1h 1m | 5d ago | 25m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 96.80% | 99.14% | 98.63% | 98.63% | 1861 ms | ↑ 1.08x | 3 | 1h 57m | 3d ago | 13m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 96.64% | 98.87% | 99.71% | 99.71% | 164 ms | ↑ 1.23x | 13 | 12m | 58m ago | 28m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.55% | 98.27% | 98.90% | 98.90% | 2008 ms | ↑ 1.42x | 6 | 1h 26m | 5d ago | 13m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.55% | 99.02% | 49.59% | 49.59% | 4189 ms | ↑ 2.73x | 15 | 3m | 1h ago | 16m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.39% | 97.56% | 74.43% | 74.43% | 4552 ms | ↑ 1.06x | 37 | 5m | 1d ago | 25m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.08% | 96.39% | 82.60% | 82.60% | 4835 ms | → 1.03x | 62 | 26s | 4h ago | 18m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.89% | 97.16% | 98.54% | 98.54% | 4348 ms | ↑ 1.12x | 48 | 1m | 2h ago | 24m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 95.83% | 97.93% | 85.93% | 85.93% | 4796 ms | ↑ 1.06x | 25 | 12m | 2d ago | 17m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.20% | 91.68% | 40.31% | 40.31% | 3127 ms | → 0.97x | 75 | 23m | 59m ago | 29m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 95.07% | 98.10% | 98.13% | 98.13% | 1932 ms | ↑ 1.06x | 10 | 53m | 4d ago | 12m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.84% | 97.20% | 97.20% | 97.20% | 897 ms | → 0.96x | 2 | 4h 33m | 6d ago | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 94.84% | 96.04% | 83.47% | 83.47% | 4598 ms | → 0.99x | 58 | 6m | 7h ago | 16m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.74% | 98.70% | 99.74% | 99.74% | 2088 ms | ↑ 1.17x | 3 | 2h 10m | 3d ago | 29m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.75% | 98.41% | 47.84% | 47.84% | 2442 ms | ↑ 1.18x | 6 | 1h 23m | 3d ago | 25m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.91% | 97.99% | 97.86% | 97.86% | 1840 ms | ↓ 0.83x | 2 | 6h 16m | 2d ago | 19m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 91.83% | 95.97% | 17.49% | 17.49% | 2838 ms | ↑ 1.13x | 66 | 2m | 3h ago | 25m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.67% | 82.90% | 81.90% | 81.90% | 4027 ms | ↓ 0.65x | 34 | 3h 23m | 23h ago | 15m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.56% | 96.89% | 99.59% | 99.59% | 3896 ms | ↑ 1.30x | 4 | 4h 37m | 3d ago | 30m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.44% | 89.41% | 56.69% | 56.69% | 4071 ms | ↑ 1.07x | 148 | 7m | 2h ago | 15m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.01% | 88.89% | 19.92% | 19.92% | 4505 ms | ↓ 0.89x | 149 | 9m | 13h ago | 20m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 84.98% | 91.86% | 91.86% | 91.86% | 2353 ms | ↑ 1.15x | 2 | 12h 15m | 1d ago | 13m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 83.78% | 85.52% | 85.52% | 85.52% | 2538 ms | ↓ 0.91x | 5 | 15h 33m | 6d ago | 11m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 82.85% | 95.11% | 99.31% | 99.31% | 3838 ms | ↑ 1.11x | 12 | 2h 27m | 2d ago | 24m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 81.57% | 82.24% | 82.24% | 82.24% | 4255 ms | ↓ 0.94x | 74 | 1h 1m | 4h ago | 10m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 81.53% | 87.38% | 92.74% | 92.74% | 3736 ms | ↓ 0.93x | 81 | 39m | 2h ago | 13m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 69.78% | 84.60% | 97.41% | 97.41% | 4662 ms | ↑ 1.28x | 140 | 25m | 2h ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 67.65% | 88.66% | 34.95% | 34.95% | 2081 ms | ↑ 1.09x | 11 | 6h 56m | 3h ago | 19m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 57.39% | 89.97% | 89.12% | 89.12% | 4935 ms | ↑ 2.20x | 49 | 1h 2m | 2h ago | 14m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 54.68% | 75.29% | 84.69% | 84.69% | 1114 ms | ↑ 2.21x | 6 | 1d 6h | 3d ago | 11m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 24.32% | 29.40% | 29.40% | 29.40% | 1203 ms | ↓ 0.90x | 1 | 13d 23h | 16d ago | 11m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 19.90% | 58.15% | 88.49% | 88.49% | 1997 ms | ↑ 1.48x | 1 | 12d 20h | 14d ago | 28m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 14.04% | 69.45% | 92.03% | 92.03% | 4146 ms | ↓ 0.77x | 3 | 2d 24h | 6d ago | 16m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 12.99% | 3.04% | 30.42% | 30.42% | 2091 ms | → 1.00x | 1 | 29d 2h | 30d ago | 19m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 12.44% | 2.94% | 74.38% | 74.38% | 4004 ms | → 1.00x | 1 | 29d 2h | 30d ago | 31m ago |

</details>

<details open>
<summary><strong>🔴 Down (255)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.02% | 88.67% | 88.67% | 88.67% | 4679 ms | → 1.01x | 8 | 4h 30m | 11m ago | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.01% | 98.96% | 99.08% | 99.08% | 1924 ms | ↑ 1.52x | 11 | 17m | 13m ago | 13m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 93.51% | 96.15% | 18.69% | 18.69% | 891 ms | ↓ 0.77x | 65 | 55s | 26m ago | 26m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 88.42% | 96.02% | 97.53% | 97.53% | 872 ms | → 1.04x | 30 | 30m | 15h ago | 11m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 84.03% | 31.25% | 23.01% | 23.01% | 3176 ms | ↑ 1.16x | 190 | 2h 12m | 11m ago | 11m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 75.00% | 69.60% | 62.48% | 62.48% | 4769 ms | → 0.98x | 329 | 17m | 26m ago | 26m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 69.21% | 92.73% | 95.49% | 95.49% | 2081 ms | ↑ 1.87x | 2 | 1d 1h | 2d ago | 11m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 65.44% | 69.99% | 23.50% | 23.50% | 4673 ms | → 1.00x | 312 | 18m | 49m ago | 18m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 59.09% | 86.55% | 79.55% | 79.55% | 151 ms | ↑ 1.08x | 5 | 18h 42m | 3d ago | 30m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 53.47% | 53.47% | 53.47% | 53.47% | 806 ms | → 1.00x | 2 | 1d 13h | 3d ago | 12m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 44.83% | 70.13% | 66.92% | 66.92% | 4396 ms | ↑ 1.38x | 3 | 1d 5h | 4d ago | 13m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 44.83% | 86.86% | 91.26% | 91.26% | 4120 ms | ↑ 2.56x | 4 | 22h 27m | 4d ago | 13m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 44.83% | 87.03% | 89.62% | 89.62% | 3861 ms | ↑ 2.41x | 4 | 22h 5m | 4d ago | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 44.83% | 87.09% | 91.27% | 91.27% | 3392 ms | ↑ 2.91x | 3 | 1d 5h | 4d ago | 13m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 43.35% | 86.58% | 91.69% | 91.69% | 4238 ms | ↑ 3.26x | 13 | 6h 46m | 4d ago | 14m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 43.07% | 43.07% | 39.60% | 39.60% | 4278 ms | → 1.00x | 8 | 11h 6m | 4d ago | 13m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 41.63% | 86.26% | 91.19% | 91.19% | 1443 ms | ↓ 0.84x | 2 | 1d 24h | 4d ago | 12m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 28.47% | 83.04% | 98.21% | 98.21% | 1901 ms | → 1.00x | 2 | 2d 11h | 5d ago | 29m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 12.99% | 38.47% | 31.66% | 31.66% | 867 ms | ↑ 1.59x | 4 | 4d 14h | 6d ago | 19m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.15% | 1.69% | 58.77% | 58.77% | 4324 ms | ↑ 1.20x | 30 | 23h 16m | 13h ago | 31m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.24% | 51.53% | 51.15% | 51.15% | 1570 ms | ↓ 0.84x | 8 | 1d 18h | 3d ago | 26m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 79.96% | 79.96% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 66.23% | 66.23% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 71.24% | 71.24% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 4.44% | 46.53% | 46.53% | — | — | 2 | 14d 10h | 29d ago | 12m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 77.82% | 77.82% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 58.48% | 58.48% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.45% | 5.45% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.10% | 12.10% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 54.55% | 54.55% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.28% | 3.28% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 76.05% | 92.51% | 92.51% | — | — | 1 | 7d 4h | 7d ago | 14m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 65.56% | 65.56% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 80.21% | 80.21% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.20% | 35.20% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 89.56% | 89.56% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.65% | 22.65% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 71.97% | 71.97% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 48.91% | 48.91% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.71% | 28.71% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 57.86% | 88.80% | 88.80% | — | — | 6 | 2d 2h | 13d ago | 29m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 80.58% | 80.58% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 60.70% | 60.70% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 74.44% | 74.44% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 23h | 7d ago | 30m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.33% | 14.33% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 47.69% | 47.69% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 23.81% | 91.45% | 91.45% | — | — | 5 | 4d 15h | 23d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 32.75% | 32.75% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 80.96% | 80.96% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 58.22% | 88.93% | 88.93% | — | — | 1 | 12d 16h | 13d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.33% | 3.33% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 80.80% | 80.80% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 32.55% | 32.55% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.15% | 50.15% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.99% | 1.99% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.68% | 88.50% | 88.50% | — | — | 1 | 29d 19h | 30d ago | 27m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 58.14% | 58.14% | 58.14% | — | — | 1 | 8d 2h | 8d ago | 11m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 14.51% | 73.74% | 73.74% | — | — | 1 | 25d 21h | 26d ago | 16m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 73.20% | 73.20% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 29.71% | 29.71% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.78% | 52.78% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 16.35% | 50.73% | 50.73% | — | — | 1 | 25d 8h | 25d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.51% | 23.51% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 49.75% | 80.93% | 80.93% | — | — | 7 | 2d 4h | 15d ago | 31m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 49.26% | 40.45% | 40.45% | — | — | 3 | 5d 4h | 15d ago | 26m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 5h | 13d ago | 11m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 51.30% | 62.67% | 62.67% | — | — | 1 | 14d 22h | 15d ago | 14m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 55.30% | 55.30% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 23.22% | 23.22% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.10% | 5.10% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 63.63% | 63.63% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 80.53% | 80.53% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 72.71% | 81.97% | 81.97% | — | — | 4 | 2d 1h | 8d ago | 14m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.30% | 6.30% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 76.91% | 76.91% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 79.34% | 79.34% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 31.35% | 31.35% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 58.75% | 91.58% | 91.58% | — | — | 2 | 6d 5h | 12d ago | 18m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 25.72% | 25.72% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 12.15% | 23.37% | 23.37% | — | — | 3 | 8d 18h | 24d ago | 15m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.16% | 51.16% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 52.06% | 52.06% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.93% | 7.93% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 63.09% | 63.09% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.19% | 45.19% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 36.05% | 36.05% | 36.05% | — | — | 3 | 2d 18h | 8d ago | 13m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.06% | 41.06% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 27.28% | 27.28% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 80.54% | 80.54% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 56.89% | 56.89% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.79% | 37.79% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 42.04% | 73.24% | 73.24% | — | — | 2 | 8d 19h | 18d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 77.80% | 77.80% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 26.48% | 73.29% | 73.29% | — | — | 2 | 11d 3h | 22d ago | 14m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.47% | 2.47% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 80.76% | 80.76% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.40% | 40.40% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 41.56% | 94.70% | 94.70% | — | — | 1 | 17d 19h | 18d ago | 25m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 80.52% | 80.52% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.81% | 31.81% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 80.43% | 80.43% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 50.23% | 50.23% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 21.69% | 21.69% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 42.83% | 42.83% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 78.17% | 78.17% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 63.19% | 63.19% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 27.98% | 27.98% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 4h | 13d ago | 13m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 76.70% | 76.70% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 4h | 13d ago | 13m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 48.64% | 48.64% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.08% | 3.08% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 5h | 13d ago | 13m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.96% | 41.96% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 75.14% | 75.14% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 32.52% | 40.47% | 40.47% | — | — | 4 | 5d 3h | 20d ago | 27m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 57.33% | 57.33% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 45.13% | 45.13% | 45.13% | — | — | 1 | 7d 2h | 7d ago | 13m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 41.15% | 41.15% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 59.85% | 59.85% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 86.37% | 86.37% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.49% | 27.49% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.80% | 11.80% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 23.01% | 23.01% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.42% | 23.42% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 7.14% | 51.47% | 51.47% | — | — | 1 | 28d 1h | 28d ago | 27m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 13.34% | 91.45% | 91.45% | — | — | 4 | 6d 12h | 26d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 53.65% | 53.65% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 28.32% | 74.09% | 74.09% | — | — | 1 | 21d 17h | 22d ago | 15m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.52% | 9.52% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.97% | 16.97% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.11% | 48.11% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 63.26% | 50.96% | 50.96% | — | — | 2 | 5d 13h | 11d ago | 17m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 22.26% | 22.26% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.62% | 53.62% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 92.85% | 92.85% | — | — | 1 | 6d 23h | 7d ago | 24m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 37.90% | 37.90% | — | — | 1 | 13d 5h | 13d ago | 19m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.81% | 21.81% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 33.30% | 33.30% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 46.04% | 46.04% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.39% | 5.39% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 13.14% | 78.42% | 78.42% | — | — | 2 | 13d 4h | 26d ago | 18m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 87.76% | 87.76% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 33.31% | 60.93% | 60.93% | — | — | 1 | 20d 7h | 20d ago | 11m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 80.63% | 80.63% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 79.58% | 79.58% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 62.06% | 62.06% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 72.87% | 72.87% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 79.44% | 79.44% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 24h | 7d ago | 12m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.98% | 18.98% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 11.30% | 58.11% | 58.11% | — | — | 1 | 26d 21h | 27d ago | 30m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 14.22% | 40.36% | 40.36% | — | — | 2 | 12d 23h | 26d ago | 15m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.23% | 3.96% | 3.96% | — | — | 2 | 14d 23h | 28d ago | 26m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.11% | 33.11% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.68% | 66.67% | 66.67% | — | — | 4 | 7d 5h | 27d ago | 28m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.83% | 24.51% | 24.51% | — | — | 27 | 22h 39m | 24d ago | 17m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.24% | 7.24% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 63.83% | 63.83% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 30.00% | 30.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 65.71% | 65.71% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 37.95% | 37.95% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.98% | 4.98% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 22h | 7d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 14.76% | 54.26% | 54.26% | — | — | 1 | 25d 18h | 26d ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 47.30% | 47.30% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 34.53% | 34.53% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 20.92% | 20.92% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 32.62% | 5.33% | 5.33% | — | — | 3 | 6d 20h | 20d ago | 28m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.43% | 11.43% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.46% | 17.46% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.96% | 16.96% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 31.70% | 31.70% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.68% | 9.68% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 8.55% | 8.55% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.85% | 0.85% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.80% | 4.80% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.59% | 5.59% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.53% | 48.53% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 45.11% | 45.11% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 80.60% | 80.60% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 5.81% | 71.86% | 71.86% | — | — | 1 | 28d 12h | 29d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 45.09% | 45.09% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 80.78% | 80.78% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 51.68% | 51.68% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.24% | 40.24% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.79% | 1.79% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.92% | 18.92% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 5h | 13d ago | 12m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 78.59% | 78.59% | — | — | 1 | 29d 23h | 30d ago | 23m ago |

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
