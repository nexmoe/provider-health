# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 353 🟢 operational · 60 🟡 degraded · 258 🔴 down · 0 ⚫ unknown

_Updated 2026-06-16 08:49 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (353)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.11% | 98.11% | 774 ms | ↑ 1.07x | 1 | 0s | 19d ago | 14m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1627 ms | → 0.97x | 0 | — | — | 11m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.75% | 93.75% | 2113 ms | ↑ 1.49x | 3 | 0s | 10d ago | 19m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.49% | 72.36% | 72.36% | 984 ms | → 0.97x | 8 | 4m | 10d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.44% | 97.44% | 3914 ms | ↑ 1.36x | 0 | — | — | 29m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 55.41% | 55.41% | 1964 ms | ↑ 1.24x | 0 | — | — | 18m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.86% | 99.86% | 99.86% | 1224 ms | → 1.00x | 1 | 0s | 11d ago | 12m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.86% | 97.86% | 3735 ms | ↑ 1.16x | 2 | 0s | 19d ago | 25m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.81% | 98.81% | 2252 ms | ↑ 1.21x | 0 | — | — | 31m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.48% | 99.48% | 3493 ms | ↑ 1.10x | 1 | 0s | 26d ago | 31m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.25% | 99.25% | 1824 ms | ↓ 0.51x | 1 | 19m | 28d ago | 14m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.11% | 95.11% | 2930 ms | ↑ 1.34x | 0 | — | — | 15m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2112 ms | ↑ 1.49x | 0 | — | — | 13m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.66% | 97.66% | 3281 ms | ↑ 1.44x | 0 | — | — | 15m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 99.14% | 98.58% | 98.58% | 2610 ms | ↓ 0.69x | 4 | 1h 2m | 7d ago | 14m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.96% | 99.96% | 1910 ms | ↑ 1.35x | 0 | — | — | 13m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1331 ms | ↑ 1.58x | 0 | — | — | 11m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.61% | 98.61% | 1524 ms | ↑ 1.28x | 0 | — | — | 15m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.83% | 98.83% | 1454 ms | ↓ 0.93x | 0 | — | — | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 37.21% | 37.21% | 849 ms | ↑ 1.61x | 0 | — | — | 26m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1618 ms | ↑ 1.18x | 0 | — | — | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.83% | 99.86% | 99.86% | 1905 ms | ↑ 1.79x | 2 | 10m | 7d ago | 15m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.92% | 96.92% | 2764 ms | ↑ 1.27x | 1 | 0s | 21d ago | 19m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.87% | 98.87% | 1113 ms | ↑ 1.28x | 2 | 15m | 7d ago | 28m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1363 ms | ↑ 1.61x | 1 | 0s | 25d ago | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.69% | 96.69% | 895 ms | ↑ 1.33x | 0 | — | — | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.26% | 87.20% | 87.20% | 1894 ms | ↑ 1.91x | 3 | 1h 24m | 18d ago | 16m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1828 ms | ↑ 1.10x | 1 | 0s | 25d ago | 13m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.34% | 98.34% | 4003 ms | ↑ 1.43x | 1 | 60m | 26d ago | 16m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.13% | 98.13% | 446 ms | ↑ 1.67x | 0 | — | — | 14m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.48% | 85.48% | 2681 ms | ↑ 2.02x | 0 | — | — | 15m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.68% | 97.68% | 1854 ms | ↑ 1.36x | 0 | — | — | 18m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 854 ms | ↑ 1.19x | 0 | — | — | 27m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3114 ms | ↑ 1.13x | 0 | — | — | 27m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.01% | 99.01% | 684 ms | ↑ 2.24x | 0 | — | — | 17m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.88% | 97.88% | 4140 ms | ↑ 1.12x | 1 | 0s | 22d ago | 30m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.27% | 96.27% | 1222 ms | ↑ 1.09x | 0 | — | — | 17m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1214 ms | → 1.00x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1770 ms | → 1.00x | 0 | — | — | 12m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.71% | 98.89% | 98.89% | 3250 ms | ↑ 1.14x | 3 | 4h 28m | 10d ago | 13m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 2132 ms | → 1.05x | 0 | — | — | 27m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.79% | 99.79% | 99.79% | 979 ms | ↓ 0.52x | 1 | 51m | 16d ago | 11m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 4076 ms | ↑ 1.12x | 1 | 0s | 22d ago | 25m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.70% | 99.70% | 1295 ms | ↑ 1.11x | 1 | 0s | 15d ago | 15m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1264 ms | ↑ 1.10x | 0 | — | — | 11m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 29.90% | 29.90% | 1170 ms | ↑ 1.16x | 0 | — | — | 27m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.17% | 96.14% | 96.14% | 2560 ms | ↑ 1.21x | 1 | 12h 2m | 21d ago | 15m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.71% | 97.81% | 97.81% | 4220 ms | ↑ 1.08x | 14 | 52m | 13d ago | 15m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1818 ms | ↓ 0.76x | 0 | — | — | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 540 ms | ↓ 0.54x | 0 | — | — | 13m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.94% | 97.48% | 97.48% | 2415 ms | ↑ 1.33x | 1 | 0s | 30d ago | 21m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.68% | 96.68% | 906 ms | → 1.00x | 0 | — | — | 19m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.13% | 97.97% | 97.97% | 2051 ms | ↑ 1.07x | 1 | 21h 30m | 12d ago | 12m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1295 ms | → 1.00x | 0 | — | — | 11m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 54.72% | 54.72% | 1871 ms | ↑ 1.45x | 0 | — | — | 21m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.89% | 99.66% | 99.66% | 2238 ms | ↓ 0.54x | 2 | 0s | 14d ago | 12m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 45.21% | 47.02% | 47.02% | 531 ms | → 1.00x | 2 | 8d 9h | 25d ago | 20m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1710 ms | ↑ 1.51x | 1 | 0s | 25d ago | 12m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3738 ms | ↑ 1.12x | 0 | — | — | 26m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.14% | 97.14% | 1710 ms | ↑ 1.27x | 0 | — | — | 26m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.30% | 83.30% | 3292 ms | ↑ 1.50x | 0 | — | — | 19m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1334 ms | → 1.00x | 0 | — | — | 13m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.68% | 98.68% | 2786 ms | ↑ 1.35x | 0 | — | — | 16m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4414 ms | ↑ 1.37x | 1 | 0s | 25d ago | 12m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.87% | 92.87% | 743 ms | ↓ 0.94x | 1 | 0s | 22d ago | 20m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.63% | 98.63% | 1276 ms | ↑ 1.39x | 0 | — | — | 15m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.84% | 99.84% | 637 ms | ↑ 1.98x | 3 | 0s | 13d ago | 17m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.34% | 99.34% | 860 ms | ↓ 0.62x | 0 | — | — | 14m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1837 ms | → 1.00x | 0 | — | — | 12m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 75.72% | 89.17% | 89.17% | 1376 ms | ↑ 1.44x | 2 | 3d 11h | 9d ago | 15m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.94% | 47.49% | 47.49% | 2138 ms | ↑ 1.54x | 1 | 0s | 7d ago | 21m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2396 ms | → 1.00x | 0 | — | — | 12m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.27% | 76.27% | 1363 ms | ↑ 1.37x | 0 | — | — | 19m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 100.00% | 95.92% | 95.92% | 1242 ms | ↑ 1.67x | 0 | — | — | 12m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1050 ms | ↓ 0.94x | 0 | — | — | 12m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.19% | 98.19% | 2694 ms | ↑ 1.32x | 0 | — | — | 18m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 30.07% | 31.71% | 31.71% | 2048 ms | ↑ 1.10x | 1 | 20d 21h | 30d ago | 21m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1145 ms | → 1.00x | 0 | — | — | 11m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2514 ms | ↑ 1.62x | 1 | 0s | 25d ago | 12m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.91% | 99.91% | 99.91% | 2014 ms | ↓ 0.80x | 1 | 0s | 10d ago | 11m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.02% | 98.02% | 1032 ms | ↑ 1.13x | 0 | — | — | 21m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.85% | 99.85% | 2447 ms | ↑ 1.30x | 1 | 0s | 25d ago | 13m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 60.33% | 60.33% | 1828 ms | → 1.01x | 1 | 0s | 28d ago | 20m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.45% | 63.45% | 1805 ms | ↑ 1.27x | 0 | — | — | 20m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1354 ms | ↓ 0.71x | 0 | — | — | 14m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.22% | 99.22% | 1788 ms | ↑ 1.17x | 0 | — | — | 20m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.81% | 99.81% | 1578 ms | ↓ 0.62x | 0 | — | — | 17m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.58% | 99.58% | 743 ms | ↓ 0.90x | 1 | 0s | 17d ago | 20m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 19.14% | 19.14% | 1810 ms | ↑ 1.15x | 1 | 0s | 12d ago | 26m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.83% | 99.73% | 99.73% | 2644 ms | ↑ 1.22x | 3 | 0s | 27d ago | 30m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2351 ms | ↑ 1.10x | 0 | — | — | 12m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.04% | 99.04% | 3785 ms | ↑ 1.17x | 1 | 29m | 22d ago | 30m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.16% | 98.16% | 3839 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.49% | 99.90% | 99.90% | 979 ms | ↑ 1.13x | 4 | 29m | 14d ago | 27m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 75.06% | 75.06% | 2664 ms | ↑ 1.24x | 0 | — | — | 18m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1285 ms | → 1.00x | 0 | — | — | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 842 ms | → 1.00x | 0 | — | — | 11m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.43% | 99.60% | 99.60% | 1738 ms | ↑ 1.57x | 1 | 2h 60m | 9d ago | 14m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1741 ms | ↑ 1.34x | 0 | — | — | 31m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 2314 ms | ↓ 0.46x | 1 | 0s | 20d ago | 31m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.89% | 99.63% | 99.63% | 2518 ms | ↑ 1.36x | 2 | 0s | 7d ago | 29m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.46% | 89.46% | 1479 ms | ↓ 0.62x | 0 | — | — | 19m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 78.68% | 78.68% | 2249 ms | ↑ 1.06x | 0 | — | — | 17m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.79% | 99.79% | 854 ms | ↑ 1.22x | 1 | 0s | 19d ago | 31m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 626 ms | ↑ 1.17x | 0 | — | — | 13m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 84.38% | 84.38% | 2829 ms | ↑ 1.42x | 0 | — | — | 15m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2288 ms | ↑ 1.27x | 0 | — | — | 12m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2242 ms | ↑ 1.54x | 0 | — | — | 15m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.04% | 99.04% | 1052 ms | ↑ 1.57x | 0 | — | — | 21m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.38% | 97.38% | 2373 ms | ↑ 3.19x | 0 | — | — | 15m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.86% | 99.86% | 99.86% | 1743 ms | ↑ 1.22x | 1 | 0s | 10d ago | 11m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2309 ms | ↑ 1.28x | 0 | — | — | 12m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.72% | 87.37% | 87.37% | 1549 ms | ↑ 1.08x | 5 | 0s | 24d ago | 30m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 68.50% | 78.61% | 78.61% | 1548 ms | ↑ 1.20x | 3 | 3d 5h | 18d ago | 14m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.83% | 97.83% | 97.83% | 813 ms | ↓ 0.81x | 3 | 0s | 16d ago | 14m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.85% | 98.85% | 497 ms | ↑ 1.70x | 0 | — | — | 17m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.77% | 99.03% | 99.03% | 1510 ms | ↑ 1.37x | 4 | 0s | 9d ago | 14m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.98% | 98.98% | 3247 ms | ↑ 2.27x | 0 | — | — | 21m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 82.85% | 82.85% | 1162 ms | ↑ 1.34x | 0 | — | — | 14m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.94% | 19.04% | 19.04% | 3748 ms | ↑ 1.24x | 1 | 0s | 11d ago | 25m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.22% | 97.48% | 97.48% | 518 ms | ↓ 0.82x | 8 | 1h 11m | 25d ago | 12m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.72% | 99.72% | 99.72% | 692 ms | → 1.03x | 1 | 1h | 16d ago | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.88% | 99.88% | 1543 ms | ↑ 1.33x | 2 | 11m | 17d ago | 12m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 22.94% | 22.94% | 2442 ms | ↑ 2.17x | 0 | — | — | 21m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1377 ms | ↑ 1.60x | 0 | — | — | 32m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.84% | 99.84% | 2807 ms | ↑ 1.05x | 1 | 0s | 30d ago | 31m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.88% | 98.77% | 98.77% | 2747 ms | ↑ 1.56x | 15 | 43m | 13d ago | 16m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 696 ms | ↑ 1.19x | 0 | — | — | 30m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 98.08% | 98.08% | 1474 ms | ↑ 1.18x | 0 | — | — | 14m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 3402 ms | ↑ 1.18x | 2 | 0s | 24d ago | 30m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.08% | 98.08% | 1080 ms | ↓ 0.58x | 0 | — | — | 19m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.73% | 99.73% | 844 ms | ↑ 1.38x | 0 | — | — | 31m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.72% | 99.71% | 99.71% | 1627 ms | ↑ 1.08x | 4 | 8m | 10d ago | 25m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 610 ms | ↓ 0.56x | 0 | — | — | 13m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.73% | 98.73% | 4706 ms | ↑ 1.09x | 0 | — | — | 32m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2164 ms | ↓ 0.51x | 0 | — | — | 30m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2112 ms | ↑ 1.36x | 0 | — | — | 13m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2715 ms | ↑ 1.14x | 0 | — | — | 26m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.89% | 99.34% | 99.34% | 2314 ms | ↑ 1.36x | 2 | 0s | 7d ago | 21m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.52% | 98.52% | 3319 ms | ↓ 0.63x | 0 | — | — | 17m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1173 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.89% | 99.45% | 99.45% | 2856 ms | → 1.04x | 2 | 0s | 19d ago | 25m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1527 ms | ↑ 1.08x | 3 | 10m | 10d ago | 18m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2399 ms | ↑ 1.10x | 0 | — | — | 20m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.66% | 99.66% | 1497 ms | ↓ 0.60x | 0 | — | — | 14m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 416 ms | ↓ 0.88x | 0 | — | — | 11m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 702 ms | → 1.00x | 0 | — | — | 31m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 96.92% | 95.89% | 95.89% | 3434 ms | ↑ 1.29x | 4 | 4h 46m | 20d ago | 19m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 60.98% | 60.98% | 1042 ms | → 1.04x | 0 | — | — | 20m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.89% | 21.22% | 21.22% | 2033 ms | ↓ 0.48x | 2 | 0s | 7d ago | 21m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2743 ms | ↑ 1.10x | 0 | — | — | 30m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 100.00% | 100.00% | 100.00% | 2283 ms | → 1.00x | 0 | — | — | 11m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.60% | 20.88% | 20.88% | 1802 ms | ↑ 1.10x | 3 | 40m | 8d ago | 21m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.60% | 98.92% | 98.92% | 2926 ms | ↓ 0.92x | 4 | 22m | 8d ago | 18m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.20% | 80.00% | 80.00% | 2274 ms | ↑ 1.21x | 1 | 13h | 13d ago | 31m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1125 ms | → 1.00x | 0 | — | — | 31m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1041 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1838 ms | ↑ 1.62x | 1 | 0s | 25d ago | 12m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1194 ms | ↑ 1.22x | 1 | 0s | 19d ago | 15m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.46% | 98.46% | 1820 ms | ↑ 1.31x | 0 | — | — | 15m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.16% | 98.16% | 1305 ms | ↓ 0.61x | 0 | — | — | 15m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.78% | 69.78% | 1264 ms | ↑ 1.25x | 0 | — | — | 20m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1325 ms | ↑ 1.05x | 0 | — | — | 11m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1123 ms | → 1.00x | 0 | — | — | 11m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 2086 ms | ↑ 1.27x | 0 | — | — | 29m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1724 ms | ↓ 0.36x | 1 | 0s | 25d ago | 12m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.54% | 92.54% | 1665 ms | → 1.02x | 3 | 0s | 14d ago | 19m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.89% | 99.86% | 99.86% | 810 ms | ↓ 0.73x | 2 | 0s | 7d ago | 25m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 99.94% | 52.15% | 52.15% | 888 ms | ↑ 1.49x | 1 | 0s | 12d ago | 17m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.47% | 85.47% | 1316 ms | ↑ 2.74x | 0 | — | — | 29m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 90.93% | 90.93% | 479 ms | ↑ 1.17x | 0 | — | — | 17m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.30% | 99.30% | 2336 ms | ↑ 1.15x | 0 | — | — | 20m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.72% | 98.86% | 98.86% | 3139 ms | ↑ 1.21x | 5 | 0s | 10d ago | 31m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.44% | 67.44% | 1444 ms | ↑ 1.82x | 1 | 0s | 18d ago | 20m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.68% | 96.68% | 1600 ms | → 1.04x | 0 | — | — | 20m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.89% | 99.85% | 99.85% | 1961 ms | ↑ 1.59x | 2 | 0s | 19d ago | 12m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 20.83% | 20.83% | 2840 ms | ↑ 1.64x | 1 | 0s | 12d ago | 26m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2692 ms | ↑ 1.10x | 0 | — | — | 31m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 96.44% | 97.23% | 97.23% | 595 ms | ↓ 0.57x | 1 | 1d | 18d ago | 13m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4314 ms | ↑ 1.25x | 0 | — | — | 13m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.23% | 58.23% | 720 ms | ↑ 1.15x | 0 | — | — | 20m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.43% | 98.44% | 98.44% | 1950 ms | ↑ 1.32x | 1 | 4h 17m | 25d ago | 19m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 40.47% | 40.47% | 3454 ms | ↑ 1.40x | 1 | 0s | 24d ago | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.22% | 99.22% | 4094 ms | ↑ 1.17x | 1 | 0s | 18d ago | 25m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 3376 ms | ↑ 1.15x | 0 | — | — | 31m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2483 ms | ↑ 1.25x | 1 | 30m | 24d ago | 19m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.23% | 91.87% | 91.87% | 2772 ms | → 1.02x | 5 | 7h 46m | 15d ago | 17m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2321 ms | ↑ 1.18x | 0 | — | — | 19m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.48% | 98.75% | 98.75% | 2404 ms | ↑ 1.19x | 4 | 37m | 11d ago | 13m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.61% | 79.61% | 1678 ms | ↓ 0.89x | 0 | — | — | 19m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 191 ms | → 1.02x | 1 | 0s | 19d ago | 31m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2571 ms | ↑ 1.70x | 0 | — | — | 12m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2681 ms | ↑ 1.37x | 0 | — | — | 29m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2376 ms | ↑ 1.15x | 1 | 0s | 25d ago | 13m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 2215 ms | ↑ 1.18x | 0 | — | — | 26m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.02% | 80.02% | 2592 ms | ↑ 1.41x | 1 | 0s | 21d ago | 19m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.57% | 86.57% | 3151 ms | ↑ 1.09x | 0 | — | — | 19m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.93% | 99.93% | 1680 ms | ↑ 1.35x | 1 | 0s | 25d ago | 13m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.13% | 96.13% | 2453 ms | ↑ 1.68x | 0 | — | — | 21m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1350 ms | ↑ 1.35x | 0 | — | — | 29m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.58% | 98.58% | 851 ms | ↑ 1.45x | 0 | — | — | 17m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 22.45% | 22.45% | 745 ms | ↑ 1.98x | 0 | — | — | 20m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 926 ms | → 1.05x | 0 | — | — | 17m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.89% | 19.96% | 19.96% | 1337 ms | ↑ 1.26x | 2 | 0s | 19d ago | 21m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.40% | 61.40% | 2473 ms | ↑ 1.22x | 0 | — | — | 20m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.82% | 99.82% | 3138 ms | ↑ 1.12x | 1 | 0s | 14d ago | 30m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 65.50% | 31.42% | 31.42% | 955 ms | ↓ 0.90x | 1 | 9d 21h | 30d ago | 30m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.54% | 92.54% | 27 ms | ↑ 1.11x | 0 | — | — | 15m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.58% | 98.88% | 98.88% | 1688 ms | ↑ 1.46x | 2 | 6h 50m | 17d ago | 29m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 19.12% | 19.12% | 1670 ms | ↑ 1.58x | 0 | — | — | 29m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1623 ms | ↓ 0.94x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3716 ms | ↑ 1.77x | 0 | — | — | 14m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 660 ms | ↓ 0.57x | 0 | — | — | 13m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.45% | 93.45% | 4652 ms | ↑ 1.13x | 0 | — | — | 30m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.72% | 99.55% | 99.55% | 1948 ms | ↑ 1.15x | 1 | 1h 20m | 18d ago | 29m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2236 ms | ↑ 1.18x | 1 | 0s | 12d ago | 19m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.22% | 99.22% | 1160 ms | ↑ 1.12x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.89% | 99.89% | 1605 ms | → 1.02x | 1 | 0s | 25d ago | 13m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 42.46% | 42.46% | 1458 ms | ↑ 1.08x | 2 | 0s | 11d ago | 31m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.58% | 99.58% | 1748 ms | ↑ 1.06x | 1 | 0s | 27d ago | 31m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.46% | 99.46% | 2245 ms | ↑ 1.63x | 0 | — | — | 29m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 550 ms | ↑ 1.23x | 0 | — | — | 32m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.73% | 98.73% | 3130 ms | ↑ 1.18x | 0 | — | — | 15m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.72% | 96.72% | 3525 ms | ↑ 1.22x | 0 | — | — | 30m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 3233 ms | ↓ 0.60x | 0 | — | — | 11m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.57% | 99.57% | 99.57% | 1482 ms | ↓ 0.71x | 3 | 20m | 7d ago | 11m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.80% | 99.80% | 993 ms | ↑ 1.32x | 1 | 20m | 19d ago | 15m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.49% | 88.49% | 2246 ms | ↑ 1.38x | 0 | — | — | 19m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.83% | 99.83% | 1217 ms | ↑ 1.16x | 0 | — | — | 15m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1772 ms | → 1.03x | 0 | — | — | 14m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 2189 ms | ↑ 1.21x | 0 | — | — | 30m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1531 ms | ↑ 1.17x | 0 | — | — | 31m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.88% | 99.92% | 99.92% | 2260 ms | ↑ 1.32x | 2 | 0s | 10d ago | 12m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1415 ms | ↑ 1.22x | 0 | — | — | 31m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 74.21% | 74.21% | 990 ms | ↓ 0.86x | 1 | 0s | 25d ago | 17m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 3003 ms | ↑ 1.10x | 1 | 0s | 21d ago | 27m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 964 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.56% | 84.56% | 2224 ms | ↑ 1.15x | 1 | 0s | 15d ago | 26m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 24.44% | 24.44% | 2525 ms | ↑ 1.27x | 1 | 0s | 13d ago | 32m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.08% | 98.08% | 2531 ms | ↑ 1.43x | 3 | 0s | 18d ago | 15m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.85% | 99.85% | 1758 ms | ↑ 2.14x | 2 | 30m | 13d ago | 12m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.53% | 97.53% | 3372 ms | ↑ 2.00x | 1 | 0s | 10d ago | 14m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.80% | 98.80% | 903 ms | ↑ 1.25x | 0 | — | — | 20m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.72% | 98.72% | 1895 ms | → 0.97x | 0 | — | — | 28m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.31% | 99.56% | 99.56% | 2800 ms | ↑ 1.40x | 3 | 1h 3m | 22d ago | 13m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.89% | 97.89% | 4214 ms | ↑ 1.35x | 1 | 0s | 28d ago | 16m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1119 ms | ↑ 2.09x | 1 | 0s | 25d ago | 13m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1557 ms | → 1.00x | 0 | — | — | 12m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2762 ms | ↑ 1.37x | 0 | — | — | 12m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 29.53% | 29.53% | 1291 ms | ↑ 1.33x | 1 | 0s | 29d ago | 28m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1470 ms | ↑ 1.66x | 1 | 0s | 23d ago | 19m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.33% | 98.33% | 2166 ms | ↑ 1.33x | 0 | — | — | 19m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1896 ms | ↑ 1.48x | 0 | — | — | 28m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.49% | 88.49% | 3956 ms | ↑ 1.42x | 0 | — | — | 19m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 12.32% | 12.32% | 2554 ms | → 1.00x | 0 | — | — | 27m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.58% | 96.58% | 3067 ms | ↑ 1.57x | 0 | — | — | 21m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 19.12% | 19.12% | 1948 ms | → 1.04x | 0 | — | — | 30m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1038 ms | ↑ 1.16x | 0 | — | — | 13m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.05% | 97.05% | 2653 ms | ↑ 1.51x | 0 | — | — | 15m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2528 ms | ↑ 1.28x | 1 | 0s | 21d ago | 28m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 20.97% | 20.97% | 3682 ms | ↑ 1.65x | 0 | — | — | 21m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 18.92% | 18.92% | 2297 ms | ↑ 1.45x | 0 | — | — | 21m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.48% | 99.67% | 99.67% | 3353 ms | → 0.96x | 5 | 24m | 8d ago | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.75% | 99.75% | 2918 ms | ↑ 1.19x | 1 | 2h 18m | 24d ago | 17m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 2220 ms | ↑ 1.27x | 0 | — | — | 30m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2220 ms | → 1.00x | 0 | — | — | 12m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 96.95% | 99.65% | 99.65% | 2547 ms | ↑ 1.14x | 6 | 2h 50m | 29d ago | 28m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1384 ms | ↓ 0.60x | 0 | — | — | 28m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 318 ms | → 1.00x | 0 | — | — | 12m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.58% | 98.58% | 1881 ms | ↑ 1.48x | 0 | — | — | 15m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 2233 ms | ↑ 1.16x | 1 | 0s | 13d ago | 26m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 3284 ms | ↑ 1.07x | 1 | 0s | 16d ago | 21m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.13% | 99.13% | 1953 ms | ↑ 1.28x | 1 | 0s | 13d ago | 30m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 916 ms | ↑ 2.00x | 0 | — | — | 29m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 454 ms | → 1.00x | 0 | — | — | 11m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.76% | 99.94% | 41.67% | 41.67% | 938 ms | ↑ 1.13x | 1 | 0s | 6d ago | 31m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.76% | 99.78% | 85.39% | 85.39% | 2268 ms | ↑ 1.07x | 4 | 0s | 7d ago | 31m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.89% | 99.53% | 99.53% | 3730 ms | ↑ 1.09x | 2 | 0s | 23h ago | 31m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.27% | 99.44% | 99.44% | 3152 ms | ↑ 1.16x | 6 | 32m | 1d ago | 31m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.76% | 99.83% | 61.96% | 61.96% | 2818 ms | → 1.05x | 3 | 0s | 7d ago | 31m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 99.83% | 18.27% | 18.27% | 787 ms | → 0.98x | 3 | 0s | 3d ago | 30m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.89% | 89.19% | 89.19% | 2000 ms | ↑ 1.42x | 2 | 0s | 3d ago | 29m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.76% | 99.94% | 99.89% | 99.89% | 1263 ms | ↑ 1.36x | 1 | 0s | 6d ago | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.72% | 99.65% | 99.65% | 1409 ms | ↑ 1.51x | 4 | 5m | 2d ago | 29m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.76% | 99.94% | 99.04% | 99.04% | 3789 ms | ↑ 1.40x | 1 | 0s | 6d ago | 29m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.76% | 99.94% | 99.86% | 99.86% | 1847 ms | ↑ 1.20x | 1 | 0s | 6d ago | 28m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 99.77% | 79.24% | 79.24% | 2387 ms | ↑ 1.12x | 4 | 0s | 4d ago | 26m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.71% | 98.65% | 98.65% | 1228 ms | ↓ 0.90x | 5 | 0s | 7d ago | 20m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.54% | 52.42% | 52.42% | 1161 ms | → 0.98x | 4 | 30m | 6d ago | 21m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.89% | 62.34% | 62.34% | 742 ms | → 0.95x | 2 | 0s | 5d ago | 20m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.89% | 19.00% | 19.00% | 2148 ms | ↓ 0.48x | 7 | 1h 40m | 6d ago | 21m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.75% | 99.77% | 21.72% | 21.72% | 1441 ms | ↑ 1.18x | 4 | 0s | 6d ago | 21m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.43% | 81.84% | 81.84% | 2565 ms | ↑ 1.33x | 3 | 50m | 5d ago | 19m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.14% | 97.54% | 97.54% | 2274 ms | ↑ 1.30x | 10 | 12m | 1d ago | 18m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.10% | 99.10% | 1446 ms | → 1.02x | 2 | 0s | 3d ago | 19m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.75% | 99.89% | 82.12% | 82.12% | 2354 ms | ↑ 1.48x | 2 | 0s | 7d ago | 19m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.94% | 90.16% | 90.16% | 2302 ms | ↑ 1.15x | 1 | 0s | 1d ago | 19m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.75% | 99.89% | 43.76% | 43.76% | 196 ms | ↑ 1.06x | 2 | 0s | 6d ago | 18m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.75% | 99.77% | 80.81% | 80.81% | 3189 ms | ↑ 1.63x | 2 | 26m | 6d ago | 19m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.60% | 98.84% | 98.84% | 2003 ms | ↑ 1.30x | 4 | 15m | 5d ago | 19m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.89% | 99.94% | 99.94% | 1169 ms | ↑ 1.09x | 2 | 0s | 3d ago | 12m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.75% | 97.59% | 98.64% | 98.64% | 946 ms | ↑ 1.68x | 7 | 2h 8m | 6d ago | 14m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.71% | 99.71% | 99.71% | 474 ms | ↓ 0.90x | 2 | 0s | 16h ago | 13m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.75% | 99.77% | 99.78% | 99.78% | 970 ms | ↑ 1.11x | 4 | 0s | 6d ago | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 78.49% | 83.70% | 83.70% | 1928 ms | ↓ 0.51x | 14 | 10h 4m | 21h ago | 12m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.59% | 98.59% | 98.59% | 2107 ms | ↑ 2.03x | 3 | 1h 47m | 4d ago | 11m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.89% | 99.93% | 99.93% | 1684 ms | ↑ 1.48x | 2 | 0s | 2d ago | 13m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.89% | 99.94% | 99.94% | 1966 ms | ↑ 1.95x | 2 | 0s | 7d ago | 12m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.28% | 99.28% | 99.28% | 1192 ms | → 1.01x | 2 | 45m | 4d ago | 13m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.86% | 99.86% | 99.86% | 1738 ms | → 1.05x | 1 | 0s | 4d ago | 14m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.75% | 99.83% | 98.37% | 98.37% | 2291 ms | ↑ 1.42x | 3 | 0s | 6d ago | 17m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.75% | 99.09% | 91.29% | 91.29% | 2838 ms | ↓ 0.89x | 16 | 0s | 7d ago | 17m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.50% | 99.50% | 2075 ms | ↑ 1.46x | 1 | 0s | 6h ago | 13m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.92% | 99.92% | 2215 ms | ↑ 2.04x | 1 | 0s | 3d ago | 12m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.75% | 96.61% | 96.61% | 96.61% | 1039 ms | ↓ 0.45x | 2 | 6h 36m | 7d ago | 11m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 41.75% | 64.37% | 64.37% | 1051 ms | → 1.03x | 2 | 8d 13h | 2h ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.75% | 99.83% | 99.85% | 99.85% | 1434 ms | ↑ 1.26x | 3 | 0s | 7d ago | 15m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.89% | 97.91% | 97.91% | 2795 ms | ↓ 0.83x | 2 | 0s | 6d ago | 16m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.75% | 99.71% | 96.43% | 96.43% | 1215 ms | ↑ 1.93x | 2 | 45m | 5d ago | 15m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.54% | 97.39% | 97.39% | 1305 ms | ↓ 0.50x | 5 | 16m | 4d ago | 14m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.43% | 99.76% | 99.76% | 4283 ms | ↑ 1.43x | 6 | 20m | 1d ago | 16m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.52% | 98.93% | 98.98% | 98.98% | 4198 ms | ↑ 1.10x | 11 | 16m | 2h ago | 28m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.52% | 98.98% | 99.15% | 99.15% | 4106 ms | ↑ 1.15x | 10 | 18m | 2h ago | 28m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.52% | 99.83% | 99.92% | 99.92% | 864 ms | → 0.96x | 2 | 10m | 6d ago | 29m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.77% | 66.36% | 66.36% | 1316 ms | → 0.98x | 3 | 7m | 4h ago | 20m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.51% | 99.60% | 67.80% | 67.80% | 1069 ms | ↑ 1.34x | 5 | 12m | 1d ago | 20m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.51% | 98.29% | 96.63% | 96.63% | 4583 ms | ↑ 1.22x | 12 | 43m | 3d ago | 21m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.51% | 99.83% | 90.33% | 90.33% | 936 ms | → 1.02x | 3 | 0s | 5d ago | 19m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.51% | 99.56% | 99.56% | 99.56% | 1804 ms | ↑ 1.06x | 1 | 30m | 3d ago | 11m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.51% | 99.89% | 99.93% | 99.93% | 2106 ms | ↑ 1.66x | 2 | 0s | 1d ago | 12m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.51% | 99.54% | 99.55% | 99.55% | 2838 ms | ↑ 1.14x | 8 | 0s | 3d ago | 13m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.51% | 99.89% | 86.32% | 86.32% | 1221 ms | → 1.01x | 2 | 0s | 2d ago | 13m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.51% | 99.83% | 99.52% | 99.52% | 4621 ms | ↑ 1.84x | 2 | 10m | 14h ago | 14m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.50% | 98.57% | 91.90% | 91.90% | 890 ms | → 1.05x | 10 | 33m | 1d ago | 15m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 99.36% | 99.36% | 99.36% | 99.36% | 2377 ms | → 1.00x | 1 | 0s | 2d ago | 12m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.28% | 99.83% | 92.38% | 92.38% | 2896 ms | ↑ 1.65x | 1 | 50m | 5d ago | 32m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.28% | 99.72% | 96.02% | 96.02% | 3361 ms | ↑ 1.19x | 5 | 0s | 4d ago | 31m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.28% | 99.78% | 92.20% | 92.20% | 4335 ms | ↑ 1.32x | 2 | 25m | 5d ago | 32m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.28% | 99.77% | 19.11% | 19.11% | 2144 ms | → 1.05x | 4 | 0s | 19h ago | 30m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.28% | 99.77% | 54.87% | 54.87% | 1656 ms | ↑ 1.25x | 4 | 0s | 43m ago | 27m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.27% | 98.30% | 98.91% | 98.91% | 2320 ms | ↑ 1.21x | 21 | 12m | 2d ago | 26m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.26% | 99.77% | 20.75% | 20.75% | 3029 ms | ↑ 1.62x | 4 | 0s | 6d ago | 21m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 99.26% | 32.13% | 67.27% | 67.27% | 697 ms | → 1.01x | 4 | 5d 1h | 3d ago | 19m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.26% | 99.26% | 99.26% | 99.26% | 1563 ms | → 1.00x | 2 | 0s | 1d ago | 11m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.26% | 93.78% | 93.78% | 93.78% | 1473 ms | ↑ 1.17x | 58 | 19m | 1h ago | 11m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.26% | 98.55% | 88.52% | 88.52% | 4437 ms | ↑ 1.19x | 3 | 50m | 14h ago | 14m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.26% | 32.15% | 43.10% | 43.10% | 714 ms | → 1.03x | 4 | 5d 1h | 2d ago | 13m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.26% | 98.91% | 99.10% | 99.10% | 1788 ms | ↑ 1.51x | 12 | 16m | 6h ago | 13m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.26% | 98.85% | 96.93% | 96.93% | 1875 ms | ↑ 1.59x | 15 | 10m | 6d ago | 14m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.03% | 98.59% | 68.52% | 68.52% | 3947 ms | → 0.95x | 21 | 4m | 43m ago | 26m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.01% | 99.66% | 98.60% | 98.60% | 1274 ms | ↑ 1.81x | 5 | 6m | 3d ago | 18m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.01% | 97.99% | 96.02% | 96.02% | 2201 ms | ↑ 1.41x | 12 | 45m | 3d ago | 14m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.01% | 87.86% | 87.86% | 87.86% | 4682 ms | → 1.01x | 7 | 5h 9m | 19h ago | 12m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (60)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.80% | 98.82% | 86.28% | 86.28% | 3848 ms | ↑ 1.31x | 21 | 0s | 3d ago | 32m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.80% | 99.61% | 99.25% | 99.25% | 2155 ms | ↑ 1.67x | 3 | 30m | 6d ago | 31m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.77% | 99.60% | 58.81% | 58.81% | 1384 ms | ↓ 0.43x | 3 | 40m | 6d ago | 21m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.77% | 99.54% | 99.56% | 99.56% | 1481 ms | ↑ 1.40x | 6 | 10m | 17h ago | 14m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.77% | 99.71% | 99.75% | 99.75% | 2260 ms | ↑ 1.23x | 1 | 1h 41m | 3d ago | 17m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.56% | 98.76% | 98.31% | 98.31% | 4530 ms | → 1.04x | 22 | 0s | 1d ago | 32m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 98.55% | 98.55% | 98.55% | 98.55% | 3384 ms | → 1.00x | 1 | 1h 58m | 5d ago | 12m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 98.55% | 99.32% | 99.79% | 99.79% | 177 ms | ↑ 1.11x | 7 | 17m | 15h ago | 30m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.52% | 99.48% | 99.67% | 99.67% | 2486 ms | → 0.99x | 5 | 24m | 5d ago | 13m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.51% | 99.31% | 96.60% | 96.60% | 1840 ms | ↑ 1.15x | 5 | 38m | 4d ago | 15m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.30% | 98.64% | 18.56% | 18.56% | 4250 ms | ↑ 1.13x | 24 | 0s | 42m ago | 25m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.28% | 98.28% | 98.28% | 98.28% | 4520 ms | → 1.00x | 6 | 0s | 18h ago | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.27% | 98.45% | 98.65% | 98.65% | 3179 ms | ↑ 1.52x | 25 | 2m | 1d ago | 12m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 98.27% | 98.27% | 98.27% | 98.27% | 3766 ms | → 1.00x | 5 | 6m | 1h ago | 12m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 98.02% | 99.41% | 99.41% | 99.41% | 1442 ms | ↓ 0.82x | 3 | 47m | 5d ago | 11m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.02% | 98.34% | 98.94% | 98.94% | 932 ms | ↑ 1.06x | 29 | 0s | 2h ago | 12m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 98.02% | 22.68% | 18.03% | 18.03% | 3012 ms | → 1.00x | 2 | 11d 14h | 7d ago | 14m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.83% | 98.53% | 85.69% | 85.69% | 4365 ms | → 1.00x | 24 | 3m | 2d ago | 28m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.78% | 98.63% | 66.61% | 66.61% | 4642 ms | → 1.02x | 21 | 4m | 4h ago | 19m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.78% | 99.09% | 91.21% | 91.21% | 1631 ms | ↑ 1.16x | 15 | 2m | 2d ago | 19m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.78% | 97.18% | 97.85% | 97.85% | 1763 ms | ↑ 2.52x | 9 | 1h 46m | 2d ago | 12m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.52% | 97.25% | 97.75% | 97.75% | 4308 ms | ↑ 1.44x | 24 | 28m | 1d ago | 16m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 97.29% | 94.58% | 72.39% | 72.39% | 1981 ms | ↑ 1.28x | 18 | 1h 29m | 23h ago | 19m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.28% | 92.21% | 84.67% | 84.67% | 1996 ms | ↑ 1.21x | 9 | 6h 19m | 7d ago | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 97.28% | 97.42% | 98.28% | 98.28% | 3889 ms | ↑ 1.42x | 18 | 43m | 3d ago | 16m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.28% | 99.26% | 49.22% | 49.22% | 4004 ms | ↑ 2.58x | 12 | 2m | 21h ago | 16m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.10% | 96.67% | 30.66% | 30.66% | 2041 ms | ↑ 1.22x | 10 | 1h 59m | 2d ago | 28m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.86% | 98.25% | 96.53% | 96.53% | 1787 ms | ↑ 1.30x | 8 | 1h 1m | 5d ago | 27m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 96.81% | 98.52% | 86.21% | 86.21% | 4523 ms | ↑ 1.07x | 25 | 1m | 20h ago | 20m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 96.79% | 99.14% | 98.61% | 98.61% | 2008 ms | ↑ 1.20x | 3 | 1h 57m | 2d ago | 13m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.54% | 98.28% | 98.88% | 98.88% | 1887 ms | ↑ 1.41x | 6 | 1h 26m | 5d ago | 13m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.12% | 97.34% | 98.55% | 98.55% | 4322 ms | ↑ 1.11x | 45 | 1m | 3h ago | 25m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 95.64% | 97.51% | 74.36% | 74.36% | 4545 ms | ↑ 1.05x | 38 | 4m | 6h ago | 26m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.57% | 96.23% | 82.51% | 82.51% | 4831 ms | → 1.03x | 64 | 52s | 3h ago | 18m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.18% | 91.50% | 39.50% | 39.50% | 3224 ms | → 1.03x | 79 | 22m | 19h ago | 30m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 95.06% | 98.05% | 98.09% | 98.09% | 1932 ms | ↑ 1.09x | 11 | 48m | 3d ago | 13m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.83% | 97.83% | 85.84% | 85.84% | 4772 ms | → 1.05x | 27 | 11m | 20h ago | 18m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.81% | 96.97% | 96.97% | 96.97% | 896 ms | → 0.97x | 2 | 4h 33m | 5d ago | 11m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.71% | 98.71% | 99.74% | 99.74% | 2111 ms | ↑ 1.15x | 3 | 2h 10m | 2d ago | 31m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 94.32% | 96.06% | 83.38% | 83.38% | 4603 ms | → 1.00x | 58 | 6m | 4h ago | 17m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.20% | 96.33% | 18.48% | 18.48% | 928 ms | ↓ 0.80x | 63 | 38s | 43m ago | 27m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.06% | 98.63% | 96.81% | 96.81% | 1751 ms | ↑ 1.09x | 1 | 8h 47m | 7d ago | 15m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.72% | 98.36% | 47.67% | 47.67% | 2392 ms | ↑ 1.14x | 7 | 1h 12m | 2d ago | 27m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.89% | 98.00% | 97.85% | 97.85% | 1858 ms | ↓ 0.85x | 2 | 6h 16m | 1d ago | 19m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 91.57% | 84.73% | 97.89% | 97.89% | 1932 ms | ↑ 1.28x | 126 | 29m | 6d ago | 29m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 91.55% | 96.21% | 17.27% | 17.27% | 2596 ms | ↑ 1.11x | 63 | 2m | 3m ago | 27m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 91.34% | 96.45% | 96.17% | 96.17% | 2081 ms | ↓ 0.73x | 9 | 2h 43m | 4d ago | 14m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.37% | 82.93% | 81.74% | 81.74% | 3942 ms | ↓ 0.62x | 35 | 3h 17m | 4d ago | 15m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 87.62% | 96.39% | 81.88% | 81.88% | 1982 ms | ↑ 2.56x | 3 | 8h 40m | 7d ago | 15m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.62% | 89.58% | 56.43% | 56.43% | 4066 ms | → 1.03x | 148 | 7m | 2h ago | 15m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.50% | 96.91% | 99.58% | 99.58% | 3808 ms | ↑ 1.25x | 4 | 4h 37m | 2d ago | 31m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 86.24% | 89.01% | 19.69% | 19.69% | 4486 ms | ↓ 0.88x | 150 | 8m | 3h ago | 21m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 83.95% | 28.52% | 21.63% | 21.63% | 4076 ms | ↑ 1.18x | 190 | 2h 18m | 59m ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 83.70% | 88.01% | 92.90% | 92.90% | 3746 ms | → 1.02x | 71 | 44m | 6h ago | 13m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 81.73% | 82.15% | 82.15% | 82.15% | 4311 ms | ↓ 0.94x | 68 | 1h 5m | 4h ago | 11m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 69.88% | 84.83% | 84.83% | 84.83% | 2575 ms | ↓ 0.91x | 5 | 15h 33m | 5d ago | 11m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 69.40% | 85.75% | 97.50% | 97.50% | 4630 ms | ↑ 1.28x | 128 | 26m | 6m ago | 29m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 40.49% | 75.40% | 84.37% | 84.37% | 1111 ms | ↑ 2.38x | 6 | 1d 6h | 2d ago | 12m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 10.12% | 25.54% | 25.54% | 25.54% | 1133 ms | ↓ 0.83x | 1 | 13d 23h | 15d ago | 11m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 5.54% | 58.34% | 88.45% | 88.45% | 656 ms | ↓ 0.52x | 1 | 12d 20h | 13d ago | 29m ago |

</details>

<details open>
<summary><strong>🔴 Down (258)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.03% | 98.70% | 17.33% | 17.33% | 3526 ms | ↑ 1.20x | 10 | 32m | 1h ago | 25m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.01% | 99.42% | 99.42% | 99.42% | 2239 ms | ↑ 1.09x | 2 | 38m | 2h ago | 14m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 84.47% | 95.53% | 99.34% | 99.34% | 3563 ms | ↑ 1.06x | 12 | 2h 15m | 1d ago | 25m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 83.46% | 96.09% | 97.52% | 97.52% | 2006 ms | ↑ 1.63x | 2 | 13h 19m | 1d ago | 12m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 73.32% | 89.99% | 79.79% | 79.79% | 153 ms | ↑ 1.13x | 5 | 13h 56m | 2d ago | 31m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.19% | 68.04% | 62.46% | 62.46% | 4746 ms | → 0.98x | 321 | 20m | 27m ago | 27m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 68.64% | 92.66% | 90.51% | 90.51% | 4923 ms | ↑ 2.04x | 38 | 57m | 3h ago | 14m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 65.02% | 69.81% | 23.26% | 23.26% | 4633 ms | → 0.99x | 310 | 19m | 19m ago | 19m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 62.43% | 62.43% | 62.43% | 62.43% | 806 ms | → 1.00x | 2 | 1d 2h | 2d ago | 12m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 59.01% | 76.01% | 72.25% | 72.25% | 4206 ms | ↑ 1.25x | 3 | 21h 32m | 3d ago | 14m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 59.01% | 90.25% | 93.18% | 93.18% | 4087 ms | ↑ 2.32x | 4 | 16h 31m | 3d ago | 14m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 59.01% | 90.42% | 91.54% | 91.54% | 3786 ms | ↑ 2.17x | 4 | 16h 9m | 3d ago | 14m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 59.01% | 90.48% | 93.26% | 93.26% | 3353 ms | ↑ 2.59x | 3 | 21h 32m | 3d ago | 14m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 57.53% | 89.97% | 93.07% | 93.07% | 4135 ms | ↑ 3.12x | 13 | 4h 56m | 3d ago | 14m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 56.02% | 89.29% | 34.78% | 34.78% | 2085 ms | ↑ 1.10x | 8 | 9h 10m | 1d ago | 20m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 55.80% | 89.66% | 93.18% | 93.18% | 2612 ms | ↑ 1.10x | 2 | 1d 12h | 3d ago | 12m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 50.29% | 50.29% | 44.80% | 44.80% | 4278 ms | → 1.00x | 8 | 8h 8m | 3d ago | 14m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 42.31% | 86.50% | 98.50% | 98.50% | 1784 ms | → 0.98x | 2 | 1d 24h | 4d ago | 31m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 27.03% | 38.26% | 31.78% | 31.78% | 1114 ms | ↑ 1.79x | 4 | 4d 14h | 5d ago | 19m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 24.26% | 72.07% | 92.59% | 92.59% | 458 ms | ↓ 0.20x | 3 | 2d 18h | 5d ago | 16m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 12.84% | 48.91% | 48.91% | 48.91% | 303 ms | ↓ 0.95x | 1 | 6d 2h | 6d ago | 13m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 11.39% | 79.50% | 93.47% | 93.47% | 1612 ms | ↑ 1.59x | 1 | 6d 5h | 6d ago | 15m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.92% | 1.57% | 58.94% | 58.94% | 4358 ms | ↑ 1.18x | 28 | 1d 1h | 2d ago | 32m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.24% | 52.54% | 51.30% | 51.30% | 1570 ms | ↓ 0.84x | 8 | 1d 17h | 2d ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 80.20% | 80.20% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 66.42% | 66.42% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 71.45% | 71.45% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 8.10% | 47.41% | 47.41% | — | — | 4 | 6d 23h | 28d ago | 12m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 78.33% | 78.33% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 58.92% | 58.92% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.47% | 5.47% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.13% | 12.13% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 55.10% | 55.10% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.29% | 3.29% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 66.14% | 66.14% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 80.44% | 80.44% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.31% | 35.31% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 89.83% | 89.83% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.75% | 22.75% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 72.18% | 72.18% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 49.23% | 49.23% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.83% | 28.83% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 61.45% | 89.07% | 89.07% | — | — | 6 | 1d 22h | 12d ago | 30m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 80.82% | 80.82% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 60.88% | 60.88% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 74.66% | 74.66% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 23h | 6d ago | 31m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.41% | 14.41% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 47.91% | 47.91% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 27.48% | 91.72% | 91.72% | — | — | 6 | 3d 16h | 22d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 32.92% | 32.92% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 81.19% | 81.19% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 61.75% | 89.69% | 89.69% | — | — | 1 | 11d 16h | 12d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.34% | 3.34% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 81.04% | 81.04% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 33.26% | 33.26% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.30% | 50.30% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.99% | 1.99% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 4.51% | 88.76% | 88.76% | — | — | 1 | 28d 20h | 29d ago | 28m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 61.32% | 61.32% | 61.32% | — | — | 1 | 7d 2h | 7d ago | 12m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 18.27% | 74.42% | 74.42% | — | — | 1 | 24d 21h | 25d ago | 16m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 73.68% | 73.68% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 29.96% | 29.96% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.93% | 52.93% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 20.10% | 51.23% | 51.23% | — | — | 1 | 24d 8h | 24d ago | 15m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.60% | 23.60% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 53.31% | 81.17% | 81.17% | — | — | 8 | 1d 19h | 14d ago | 32m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 52.88% | 40.57% | 40.57% | — | — | 3 | 4d 20h | 14d ago | 27m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 5h | 12d ago | 11m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 54.84% | 63.91% | 63.91% | — | — | 1 | 13d 22h | 14d ago | 14m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 55.46% | 55.46% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 23.36% | 23.36% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.13% | 5.13% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 63.82% | 63.82% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 80.77% | 80.77% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 76.17% | 83.03% | 83.03% | — | — | 4 | 1d 19h | 7d ago | 15m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.36% | 6.36% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 77.14% | 77.14% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 79.58% | 79.58% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 31.57% | 31.57% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 62.27% | 92.11% | 92.11% | — | — | 2 | 5d 17h | 11d ago | 19m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 25.92% | 25.92% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 15.92% | 23.61% | 23.61% | — | — | 3 | 8d 11h | 23d ago | 15m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.31% | 51.31% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 52.35% | 52.35% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 8.09% | 8.09% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 63.63% | 63.63% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 74.34% | 74.34% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.32% | 45.32% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 39.07% | 39.07% | 39.07% | — | — | 3 | 2d 10h | 7d ago | 14m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.18% | 41.18% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 27.87% | 27.87% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 80.78% | 80.78% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 57.06% | 57.06% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.90% | 37.90% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 45.66% | 73.77% | 73.77% | — | — | 2 | 8d 7h | 17d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 78.31% | 78.31% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 30.13% | 74.13% | 74.13% | — | — | 3 | 7d 2h | 21d ago | 15m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.17% | 30.17% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.48% | 2.48% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 81.00% | 81.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.52% | 40.52% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 45.22% | 94.98% | 94.98% | — | — | 1 | 16d 19h | 17d ago | 26m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 80.76% | 80.76% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.92% | 31.92% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 80.68% | 80.68% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 50.81% | 50.81% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 21.95% | 21.95% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 43.03% | 43.03% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 78.40% | 78.40% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 63.54% | 63.54% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 28.28% | 28.28% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 4h | 12d ago | 13m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 76.92% | 76.92% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 4h | 12d ago | 14m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 49.01% | 49.01% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.09% | 3.09% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 5h | 12d ago | 13m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.08% | 42.08% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 75.37% | 75.37% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 36.21% | 40.59% | 40.59% | — | — | 4 | 4d 21h | 19d ago | 28m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 57.50% | 57.50% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 41.76% | 41.76% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 60.36% | 60.36% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 86.62% | 86.62% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.58% | 27.58% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.88% | 11.88% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 23.32% | 23.32% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.49% | 23.49% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 10.94% | 51.62% | 51.62% | — | — | 1 | 27d 1h | 27d ago | 28m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 16.70% | 91.72% | 91.72% | — | — | 6 | 4d 5h | 25d ago | 30m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 54.02% | 54.02% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 32.02% | 74.75% | 74.75% | — | — | 1 | 20d 18h | 21d ago | 16m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.66% | 9.66% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.02% | 17.02% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.25% | 48.25% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 66.76% | 51.32% | 51.32% | — | — | 2 | 5d 1h | 10d ago | 18m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 22.74% | 22.74% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.78% | 53.78% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 93.16% | 93.16% | — | — | 1 | 5d 23h | 6d ago | 25m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 38.06% | 38.06% | — | — | 1 | 12d 5h | 12d ago | 20m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.98% | 21.98% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 33.65% | 33.65% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 46.45% | 46.45% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.41% | 5.41% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 16.89% | 78.84% | 78.84% | — | — | 2 | 12d 16h | 25d ago | 19m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 88.02% | 88.02% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 36.95% | 62.15% | 62.15% | — | — | 1 | 19d 7h | 19d ago | 12m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 80.87% | 80.87% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 79.81% | 79.81% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 62.25% | 62.25% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 73.09% | 73.09% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 79.67% | 79.67% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d | 6d ago | 13m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.04% | 19.04% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 15.12% | 58.28% | 58.28% | — | — | 1 | 25d 21h | 26d ago | 31m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 17.87% | 40.72% | 40.72% | — | — | 3 | 8d 8h | 25d ago | 16m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.23% | 3.97% | 3.97% | — | — | 2 | 14d 23h | 27d ago | 27m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.21% | 33.21% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.66% | 66.87% | 66.87% | — | — | 4 | 7d 5h | 26d ago | 29m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.76% | 24.67% | 24.67% | — | — | 27 | 22h 39m | 23d ago | 18m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.28% | 7.28% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 64.02% | 64.02% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 30.65% | 30.65% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 65.90% | 65.90% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 38.51% | 38.51% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.08% | 5.08% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 22h | 6d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 18.47% | 55.07% | 55.07% | — | — | 1 | 24d 19h | 25d ago | 14m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 48.06% | 48.06% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 34.87% | 34.87% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 21.22% | 21.22% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 36.30% | 5.34% | 5.34% | — | — | 3 | 6d 12h | 19d ago | 29m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.52% | 11.52% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.51% | 17.51% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 17.12% | 17.12% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 32.21% | 32.21% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.72% | 9.72% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 8.73% | 8.73% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.86% | 0.86% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.87% | 4.87% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.67% | 5.67% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.67% | 48.67% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 45.84% | 45.84% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 80.84% | 80.84% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 9.62% | 72.48% | 72.48% | — | — | 1 | 27d 12h | 28d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 45.45% | 45.45% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 81.02% | 81.02% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 52.31% | 52.31% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.36% | 40.36% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.82% | 1.82% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 19.01% | 19.01% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 5h | 12d ago | 13m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 78.82% | 78.82% | — | — | 1 | 29d 24h | 30d ago | 24m ago |

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
