# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**667 providers** — 341 🟢 operational · 70 🟡 degraded · 256 🔴 down · 0 ⚫ unknown

_Updated 2026-06-14 07:25 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (341)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.05% | 98.05% | 719 ms | → 0.97x | 1 | 0s | 17d ago | 9m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1680 ms | → 0.97x | 0 | — | — | 5m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.67% | 93.67% | 1450 ms | ↑ 1.14x | 3 | 0s | 8d ago | 13m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.49% | 72.09% | 72.09% | 1066 ms | → 0.98x | 8 | 4m | 8d ago | 14m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.43% | 97.43% | 3731 ms | ↑ 1.27x | 0 | — | — | 22m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 54.75% | 54.75% | 2006 ms | ↑ 1.25x | 0 | — | — | 12m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.82% | 99.82% | 99.82% | 1322 ms | → 1.01x | 1 | 0s | 8d ago | 6m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.84% | 97.84% | 3330 ms | ↑ 1.05x | 2 | 0s | 17d ago | 19m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.80% | 98.80% | 2136 ms | ↑ 1.15x | 0 | — | — | 24m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.46% | 99.46% | 3408 ms | ↑ 1.05x | 1 | 0s | 24d ago | 24m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.21% | 99.21% | 2423 ms | ↓ 0.95x | 1 | 19m | 26d ago | 8m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.99% | 94.99% | 2927 ms | ↑ 1.31x | 0 | — | — | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1994 ms | ↑ 1.52x | 0 | — | — | 7m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.61% | 97.61% | 3163 ms | ↑ 1.37x | 0 | — | — | 9m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.96% | 99.96% | 1778 ms | ↑ 1.37x | 0 | — | — | 7m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1065 ms | ↑ 1.38x | 0 | — | — | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.58% | 98.58% | 1350 ms | ↑ 1.18x | 0 | — | — | 10m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.79% | 98.79% | 1702 ms | ↑ 1.34x | 0 | — | — | 8m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 36.80% | 36.80% | 798 ms | ↑ 1.39x | 0 | — | — | 19m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1474 ms | ↑ 1.07x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.88% | 96.88% | 2661 ms | ↑ 1.21x | 1 | 0s | 19d ago | 13m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 34.69% | 63.58% | 63.58% | 1051 ms | → 0.99x | 1 | 19d 3h | 30d ago | 9m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1121 ms | ↑ 1.40x | 1 | 0s | 23d ago | 6m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.64% | 96.64% | 863 ms | ↑ 1.27x | 0 | — | — | 11m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.20% | 86.97% | 86.97% | 1757 ms | ↑ 1.70x | 4 | 1h 3m | 16d ago | 11m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1921 ms | ↑ 1.13x | 1 | 0s | 23d ago | 6m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.31% | 98.31% | 3651 ms | ↑ 1.34x | 1 | 60m | 24d ago | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.07% | 98.07% | 395 ms | ↑ 1.47x | 0 | — | — | 9m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.16% | 85.16% | 2533 ms | ↑ 1.87x | 0 | — | — | 10m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.64% | 97.64% | 1871 ms | ↑ 1.38x | 0 | — | — | 12m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 834 ms | ↑ 1.15x | 0 | — | — | 20m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3212 ms | ↑ 1.12x | 0 | — | — | 20m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.99% | 98.99% | 630 ms | ↑ 2.14x | 0 | — | — | 12m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.86% | 97.86% | 4019 ms | ↑ 1.08x | 1 | 0s | 20d ago | 23m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.21% | 96.21% | 1125 ms | → 1.05x | 0 | — | — | 11m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1267 ms | → 1.00x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1370 ms | → 1.00x | 0 | — | — | 6m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1482 ms | → 1.00x | 0 | — | — | 5m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.71% | 98.85% | 98.85% | 3112 ms | ↑ 1.09x | 3 | 4h 28m | 8d ago | 7m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.52% | 99.52% | 2267 ms | ↑ 1.06x | 0 | — | — | 20m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.78% | 99.78% | 99.78% | 1341 ms | ↓ 0.90x | 1 | 51m | 14d ago | 5m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 3491 ms | → 0.98x | 1 | 0s | 20d ago | 19m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.14% | 97.51% | 97.51% | 2129 ms | ↑ 1.26x | 10 | 12m | 8d ago | 12m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.69% | 99.69% | 1328 ms | ↑ 1.13x | 1 | 0s | 13d ago | 9m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1178 ms | → 1.00x | 0 | — | — | 5m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 29.45% | 29.45% | 1185 ms | ↑ 1.15x | 0 | — | — | 20m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.17% | 96.03% | 96.03% | 2432 ms | ↑ 1.16x | 1 | 12h 2m | 19d ago | 9m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1837 ms | ↑ 1.27x | 1 | 0s | 23d ago | 6m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.71% | 97.76% | 97.76% | 4226 ms | ↑ 1.28x | 14 | 52m | 11d ago | 10m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2041 ms | ↓ 0.87x | 0 | — | — | 8m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 610 ms | ↓ 0.56x | 0 | — | — | 7m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.77% | 97.47% | 97.47% | 2276 ms | ↑ 1.19x | 3 | 10m | 28d ago | 15m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.63% | 96.63% | 899 ms | → 0.99x | 0 | — | — | 13m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.13% | 97.88% | 97.88% | 2130 ms | ↑ 1.13x | 1 | 21h 30m | 10d ago | 6m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 54.40% | 54.40% | 1708 ms | ↑ 1.35x | 0 | — | — | 15m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.89% | 99.65% | 99.65% | 2401 ms | ↓ 0.70x | 2 | 0s | 12d ago | 6m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1579 ms | ↑ 1.20x | 1 | 0s | 23d ago | 6m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3828 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.12% | 97.12% | 1690 ms | ↑ 1.38x | 0 | — | — | 19m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.12% | 83.12% | 3050 ms | ↑ 1.37x | 0 | — | — | 13m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 66.07% | 66.07% | 1406 ms | → 0.98x | 2 | 0s | 12d ago | 14m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1346 ms | → 1.00x | 0 | — | — | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.66% | 98.66% | 2534 ms | ↑ 1.27x | 0 | — | — | 11m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 4360 ms | ↑ 1.27x | 1 | 0s | 23d ago | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.82% | 92.82% | 730 ms | ↓ 0.92x | 1 | 0s | 20d ago | 14m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.60% | 98.60% | 1241 ms | ↑ 1.42x | 0 | — | — | 9m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.84% | 99.84% | 580 ms | ↑ 1.88x | 3 | 0s | 11d ago | 12m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.31% | 99.31% | 857 ms | ↓ 0.57x | 0 | — | — | 8m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1771 ms | → 1.00x | 0 | — | — | 6m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2537 ms | → 1.00x | 0 | — | — | 6m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.03% | 76.03% | 1313 ms | ↑ 1.25x | 0 | — | — | 14m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.54% | 95.71% | 95.71% | 1252 ms | ↑ 1.63x | 2 | 1h 30m | 29d ago | 6m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1214 ms | ↓ 0.95x | 0 | — | — | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.16% | 98.16% | 2644 ms | ↑ 1.23x | 0 | — | — | 12m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 22.92% | 31.23% | 31.23% | 1959 ms | → 1.00x | 1 | 22d 23h | 30d ago | 15m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1264 ms | → 1.00x | 0 | — | — | 5m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2388 ms | ↑ 1.43x | 1 | 0s | 23d ago | 6m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.89% | 99.89% | 99.89% | 2304 ms | ↓ 0.89x | 1 | 0s | 8d ago | 5m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.94% | 98.01% | 98.01% | 984 ms | ↑ 1.10x | 1 | 0s | 30d ago | 15m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.85% | 99.85% | 2292 ms | ↑ 1.21x | 1 | 0s | 23d ago | 6m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 60.00% | 60.00% | 2020 ms | ↑ 1.09x | 1 | 0s | 26d ago | 14m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.15% | 63.15% | 1528 ms | ↑ 1.20x | 0 | — | — | 14m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1250 ms | ↓ 0.64x | 0 | — | — | 8m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.21% | 99.21% | 1762 ms | ↑ 1.11x | 0 | — | — | 14m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 100.00% | 90.05% | 90.05% | 2168 ms | ↑ 1.09x | 0 | — | — | 13m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.81% | 99.81% | 2504 ms | ↓ 0.80x | 0 | — | — | 11m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.58% | 99.58% | 848 ms | → 0.97x | 1 | 0s | 15d ago | 14m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.89% | 98.09% | 98.09% | 1856 ms | ↓ 0.89x | 1 | 30m | 12d ago | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 18.62% | 18.62% | 1251 ms | ↓ 0.75x | 1 | 0s | 10d ago | 19m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.83% | 99.73% | 99.73% | 2549 ms | ↑ 1.16x | 3 | 0s | 25d ago | 23m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2426 ms | ↑ 1.25x | 0 | — | — | 6m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.04% | 99.04% | 3766 ms | ↑ 1.14x | 1 | 29m | 20d ago | 23m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.84% | 99.84% | 3398 ms | ↑ 1.16x | 3 | 0s | 14d ago | 24m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.15% | 98.15% | 3665 ms | ↑ 1.19x | 0 | — | — | 24m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.49% | 99.90% | 99.90% | 1067 ms | ↑ 1.13x | 4 | 29m | 12d ago | 20m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 74.68% | 74.68% | 2192 ms | ↑ 1.09x | 0 | — | — | 12m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1369 ms | → 1.00x | 0 | — | — | 6m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1672 ms | ↑ 1.26x | 0 | — | — | 24m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 2698 ms | ↓ 0.69x | 1 | 0s | 18d ago | 24m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.34% | 89.34% | 1078 ms | ↓ 0.46x | 0 | — | — | 13m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 78.30% | 78.30% | 2117 ms | → 1.03x | 0 | — | — | 11m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.78% | 99.78% | 854 ms | ↑ 1.21x | 1 | 0s | 17d ago | 24m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 586 ms | ↑ 1.09x | 0 | — | — | 7m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 83.99% | 83.99% | 2804 ms | ↑ 1.37x | 0 | — | — | 9m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2041 ms | ↑ 1.19x | 0 | — | — | 6m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2178 ms | ↑ 1.48x | 0 | — | — | 9m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.04% | 99.04% | 999 ms | ↑ 1.46x | 0 | — | — | 15m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.31% | 97.31% | 2267 ms | ↑ 3.04x | 0 | — | — | 9m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.83% | 99.83% | 99.83% | 1637 ms | ↑ 1.08x | 1 | 0s | 8d ago | 5m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 1562 ms | ↑ 1.33x | 1 | 0s | 23d ago | 6m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2118 ms | ↑ 1.20x | 0 | — | — | 6m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.72% | 87.28% | 87.28% | 1633 ms | ↑ 1.07x | 5 | 0s | 22d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.83% | 97.76% | 97.76% | 1407 ms | ↓ 0.91x | 3 | 0s | 14d ago | 9m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.83% | 98.83% | 391 ms | ↑ 1.66x | 0 | — | — | 11m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.97% | 98.97% | 3132 ms | ↑ 1.96x | 0 | — | — | 15m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 79.86% | 79.86% | 711 ms | ↑ 1.15x | 0 | — | — | 9m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.94% | 18.51% | 18.51% | 2995 ms | ↑ 1.10x | 1 | 0s | 9d ago | 19m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.93% | 97.36% | 97.36% | 577 ms | ↓ 0.80x | 13 | 44m | 23d ago | 6m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.68% | 99.68% | 99.68% | 681 ms | ↑ 1.07x | 1 | 1h | 14d ago | 5m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 100.00% | 100.00% | 100.00% | 644 ms | → 1.00x | 0 | — | — | 6m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.88% | 99.88% | 1639 ms | ↑ 1.32x | 2 | 11m | 15d ago | 6m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 22.40% | 22.40% | 2379 ms | ↑ 1.99x | 0 | — | — | 15m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1069 ms | ↑ 1.43x | 0 | — | — | 25m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.84% | 99.84% | 2788 ms | ↑ 1.10x | 1 | 0s | 28d ago | 24m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.88% | 98.75% | 98.75% | 1651 ms | ↑ 1.41x | 15 | 43m | 11d ago | 11m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 768 ms | ↑ 1.23x | 0 | — | — | 23m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 98.01% | 98.01% | 1241 ms | ↑ 1.09x | 0 | — | — | 9m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 3249 ms | ↑ 1.14x | 2 | 0s | 22d ago | 23m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.05% | 98.05% | 978 ms | ↓ 0.51x | 0 | — | — | 13m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 781 ms | ↑ 1.32x | 2 | 25m | 29d ago | 24m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.72% | 99.70% | 99.70% | 1515 ms | → 1.05x | 4 | 8m | 8d ago | 19m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 544 ms | ↓ 0.44x | 0 | — | — | 7m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.72% | 98.72% | 4608 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2583 ms | ↓ 0.71x | 0 | — | — | 23m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1942 ms | ↑ 1.38x | 0 | — | — | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2647 ms | ↑ 1.10x | 0 | — | — | 19m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.50% | 98.50% | 3731 ms | ↓ 0.79x | 0 | — | — | 11m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1168 ms | ↑ 1.06x | 0 | — | — | 23m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.83% | 99.45% | 99.45% | 2811 ms | → 1.00x | 3 | 0s | 17d ago | 19m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.66% | 99.85% | 99.85% | 170 ms | ↑ 1.13x | 4 | 15m | 20d ago | 23m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1528 ms | ↑ 1.06x | 3 | 10m | 8d ago | 12m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2230 ms | → 1.05x | 0 | — | — | 14m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.94% | 99.85% | 99.85% | 2050 ms | ↑ 1.07x | 1 | 0s | 17d ago | 24m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.65% | 99.65% | 1748 ms | ↓ 0.80x | 0 | — | — | 9m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 347 ms | ↓ 0.89x | 0 | — | — | 5m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 676 ms | → 0.98x | 0 | — | — | 24m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 96.92% | 95.84% | 95.84% | 3207 ms | ↑ 1.23x | 4 | 4h 46m | 18d ago | 13m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.94% | 60.68% | 60.68% | 1351 ms | → 1.03x | 1 | 0s | 29d ago | 14m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2718 ms | ↑ 1.12x | 0 | — | — | 23m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.20% | 79.87% | 79.87% | 2286 ms | ↑ 1.17x | 1 | 13h | 11d ago | 24m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1121 ms | → 1.00x | 0 | — | — | 24m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.77% | 99.66% | 99.66% | 1353 ms | ↑ 1.36x | 3 | 7m | 19d ago | 22m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1044 ms | ↑ 1.06x | 0 | — | — | 24m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1531 ms | ↑ 1.27x | 1 | 0s | 23d ago | 6m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 1205 ms | ↑ 1.21x | 1 | 0s | 17d ago | 9m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.42% | 98.42% | 1726 ms | ↑ 1.30x | 0 | — | — | 9m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.12% | 98.12% | 1450 ms | ↓ 0.82x | 0 | — | — | 9m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.49% | 69.49% | 1124 ms | ↑ 1.15x | 0 | — | — | 14m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1382 ms | ↑ 1.09x | 0 | — | — | 5m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 2069 ms | ↑ 1.21x | 0 | — | — | 22m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1911 ms | ↓ 0.58x | 1 | 0s | 23d ago | 6m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.77% | 92.44% | 92.44% | 1616 ms | → 1.04x | 4 | 0s | 12d ago | 13m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 99.94% | 51.36% | 51.36% | 886 ms | ↑ 1.59x | 1 | 0s | 10d ago | 11m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.37% | 85.37% | 1069 ms | ↑ 2.45x | 0 | — | — | 22m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 90.79% | 90.79% | 363 ms | → 1.03x | 0 | — | — | 12m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.29% | 99.29% | 2269 ms | ↑ 1.07x | 0 | — | — | 14m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.72% | 98.85% | 98.85% | 2956 ms | ↑ 1.16x | 5 | 0s | 8d ago | 24m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.16% | 67.16% | 1461 ms | ↑ 2.05x | 1 | 0s | 16d ago | 14m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.65% | 96.65% | 1625 ms | ↑ 1.09x | 0 | — | — | 14m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.89% | 99.85% | 99.85% | 1729 ms | ↑ 1.27x | 2 | 0s | 17d ago | 6m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 20.31% | 20.31% | 2779 ms | ↑ 1.48x | 1 | 0s | 10d ago | 19m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2850 ms | ↑ 1.11x | 0 | — | — | 24m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 96.44% | 97.09% | 97.09% | 572 ms | ↓ 0.50x | 1 | 1d | 16d ago | 7m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4097 ms | ↑ 1.08x | 0 | — | — | 6m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 57.90% | 57.90% | 720 ms | ↑ 1.15x | 0 | — | — | 14m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.43% | 98.42% | 98.42% | 1750 ms | ↑ 1.25x | 1 | 4h 17m | 23d ago | 13m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 39.82% | 39.82% | 3236 ms | ↑ 1.27x | 1 | 0s | 22d ago | 13m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.83% | 99.22% | 99.22% | 3630 ms | ↑ 1.09x | 3 | 0s | 16d ago | 19m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 3346 ms | ↑ 1.10x | 0 | — | — | 24m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2386 ms | ↑ 1.19x | 1 | 30m | 22d ago | 13m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.23% | 91.73% | 91.73% | 2341 ms | → 1.00x | 5 | 7h 46m | 13d ago | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.97% | 99.18% | 99.18% | 1599 ms | ↑ 1.54x | 11 | 17m | 9d ago | 7m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.24% | 99.24% | 2236 ms | ↑ 1.12x | 0 | — | — | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.48% | 98.71% | 98.71% | 2425 ms | ↑ 1.27x | 4 | 37m | 9d ago | 7m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.41% | 79.41% | 1695 ms | ↑ 1.09x | 0 | — | — | 14m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 191 ms | → 1.02x | 1 | 0s | 17d ago | 24m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2437 ms | ↑ 1.48x | 0 | — | — | 6m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2535 ms | ↑ 1.31x | 0 | — | — | 22m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2609 ms | ↑ 1.46x | 1 | 0s | 23d ago | 6m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 2143 ms | ↑ 1.11x | 0 | — | — | 19m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.53% | 99.53% | 3560 ms | ↑ 1.09x | 1 | 0s | 25d ago | 24m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 79.80% | 79.80% | 2447 ms | ↑ 1.30x | 1 | 0s | 19d ago | 13m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.42% | 86.42% | 3170 ms | ↑ 1.31x | 0 | — | — | 13m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.92% | 99.92% | 1554 ms | ↑ 1.22x | 1 | 0s | 23d ago | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.10% | 96.10% | 2375 ms | ↑ 1.53x | 0 | — | — | 15m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1383 ms | ↑ 1.25x | 0 | — | — | 22m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.56% | 98.56% | 833 ms | ↑ 1.34x | 0 | — | — | 12m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 21.86% | 21.86% | 665 ms | ↑ 1.50x | 0 | — | — | 14m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 855 ms | ↑ 1.08x | 0 | — | — | 11m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.77% | 19.42% | 19.42% | 1338 ms | ↑ 1.28x | 4 | 0s | 17d ago | 15m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.08% | 61.08% | 2427 ms | ↑ 1.17x | 0 | — | — | 14m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.81% | 99.81% | 2972 ms | ↑ 1.12x | 1 | 0s | 12d ago | 23m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 58.37% | 29.26% | 29.26% | 916 ms | ↓ 0.74x | 1 | 11d 22h | 30d ago | 23m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.37% | 92.34% | 92.34% | 28 ms | ↑ 1.17x | 1 | 3h 1m | 30d ago | 9m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.57% | 98.88% | 98.88% | 1574 ms | ↑ 1.35x | 2 | 6h 50m | 15d ago | 22m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 18.60% | 18.60% | 1652 ms | ↑ 1.45x | 0 | — | — | 22m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1914 ms | ↑ 1.27x | 0 | — | — | 8m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.51% | 99.51% | 1806 ms | ↑ 1.44x | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3588 ms | ↑ 1.83x | 0 | — | — | 8m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 598 ms | ↓ 0.58x | 0 | — | — | 7m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.33% | 99.44% | 99.44% | 3088 ms | ↑ 1.13x | 5 | 38m | 12d ago | 24m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.41% | 93.41% | 4632 ms | ↑ 1.12x | 0 | — | — | 23m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.72% | 99.53% | 99.53% | 1893 ms | → 1.01x | 1 | 1h 20m | 16d ago | 22m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2137 ms | ↑ 1.11x | 1 | 0s | 9d ago | 13m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.21% | 99.21% | 1116 ms | → 1.01x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.88% | 99.88% | 1666 ms | ↑ 1.05x | 1 | 0s | 23d ago | 6m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 41.57% | 41.57% | 1397 ms | ↑ 1.07x | 2 | 0s | 9d ago | 24m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.58% | 99.58% | 1559 ms | ↓ 0.93x | 1 | 0s | 25d ago | 24m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.46% | 99.46% | 2066 ms | ↑ 1.51x | 0 | — | — | 22m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 551 ms | ↑ 1.21x | 0 | — | — | 25m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.69% | 98.69% | 3111 ms | ↑ 1.19x | 0 | — | — | 9m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.70% | 96.70% | 3486 ms | ↑ 1.17x | 0 | — | — | 23m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 4020 ms | ↑ 1.12x | 0 | — | — | 5m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.94% | 99.57% | 99.57% | 4100 ms | ↑ 1.86x | 1 | 0s | 22d ago | 8m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.79% | 99.79% | 1004 ms | ↑ 1.42x | 1 | 20m | 17d ago | 9m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.33% | 88.33% | 2200 ms | ↑ 1.32x | 0 | — | — | 13m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.82% | 99.82% | 1219 ms | ↑ 1.24x | 0 | — | — | 9m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1737 ms | → 1.00x | 0 | — | — | 8m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 2147 ms | ↑ 1.14x | 0 | — | — | 23m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1422 ms | ↑ 1.15x | 0 | — | — | 24m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.87% | 99.92% | 99.92% | 2523 ms | ↑ 1.68x | 2 | 0s | 8d ago | 6m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1261 ms | ↑ 1.19x | 0 | — | — | 24m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 73.81% | 73.81% | 1047 ms | ↓ 0.92x | 1 | 0s | 23d ago | 11m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 3259 ms | ↑ 1.10x | 1 | 0s | 19d ago | 20m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 907 ms | ↑ 1.06x | 0 | — | — | 21m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.46% | 84.46% | 2229 ms | ↑ 1.19x | 1 | 0s | 13d ago | 19m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 23.95% | 23.95% | 2264 ms | ↑ 1.21x | 1 | 0s | 11d ago | 25m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.03% | 98.03% | 2528 ms | ↑ 1.38x | 3 | 0s | 16d ago | 9m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.85% | 99.85% | 1764 ms | ↑ 2.37x | 2 | 30m | 11d ago | 6m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 97.44% | 97.44% | 2501 ms | ↑ 1.70x | 1 | 0s | 8d ago | 9m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.79% | 98.79% | 973 ms | ↑ 1.21x | 0 | — | — | 14m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.72% | 98.72% | 1867 ms | ↓ 0.92x | 0 | — | — | 21m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.31% | 99.54% | 99.54% | 2611 ms | ↑ 1.26x | 3 | 1h 3m | 20d ago | 6m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.86% | 97.86% | 3948 ms | ↑ 1.33x | 1 | 0s | 25d ago | 11m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1112 ms | ↑ 1.86x | 1 | 0s | 23d ago | 6m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1709 ms | → 1.00x | 0 | — | — | 6m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2652 ms | ↑ 1.21x | 0 | — | — | 6m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 29.07% | 29.07% | 1272 ms | ↑ 1.31x | 1 | 0s | 27d ago | 21m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1074 ms | ↑ 1.44x | 1 | 0s | 21d ago | 13m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.30% | 98.30% | 2016 ms | ↑ 1.29x | 0 | — | — | 13m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1675 ms | ↑ 1.32x | 0 | — | — | 21m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.36% | 88.36% | 3766 ms | ↑ 1.30x | 0 | — | — | 13m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 11.63% | 11.63% | 2551 ms | → 1.00x | 0 | — | — | 20m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.55% | 96.55% | 2812 ms | ↑ 1.40x | 0 | — | — | 15m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 18.59% | 18.59% | 1925 ms | ↑ 1.05x | 0 | — | — | 23m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1013 ms | → 0.98x | 0 | — | — | 8m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.98% | 96.98% | 2486 ms | ↑ 1.44x | 0 | — | — | 9m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2450 ms | ↑ 1.18x | 1 | 0s | 19d ago | 21m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 20.46% | 20.46% | 3475 ms | ↑ 1.45x | 0 | — | — | 15m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 18.40% | 18.40% | 2034 ms | ↑ 1.33x | 0 | — | — | 15m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.48% | 99.77% | 99.77% | 4039 ms | ↑ 1.35x | 5 | 24m | 11d ago | 11m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.75% | 99.75% | 2922 ms | ↑ 1.15x | 1 | 2h 18m | 22d ago | 11m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 2101 ms | ↑ 1.20x | 0 | — | — | 23m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2242 ms | → 1.00x | 0 | — | — | 6m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 96.95% | 99.65% | 99.65% | 2342 ms | ↑ 1.07x | 6 | 2h 50m | 27d ago | 21m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1573 ms | ↓ 0.73x | 0 | — | — | 21m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 318 ms | → 1.00x | 0 | — | — | 6m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.55% | 98.55% | 1920 ms | ↑ 1.50x | 0 | — | — | 9m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 2126 ms | ↑ 1.09x | 1 | 0s | 11d ago | 19m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 3289 ms | ↑ 1.27x | 1 | 0s | 13d ago | 15m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.12% | 99.12% | 1837 ms | ↑ 1.20x | 1 | 0s | 11d ago | 23m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 870 ms | ↑ 1.74x | 0 | — | — | 22m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 521 ms | → 1.00x | 0 | — | — | 5m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.75% | 98.98% | 98.98% | 98.98% | 4011 ms | ↑ 1.08x | 10 | 18m | 1d ago | 21m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.75% | 99.89% | 99.63% | 99.63% | 2369 ms | ↑ 1.28x | 2 | 0s | 5d ago | 22m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.75% | 99.94% | 41.29% | 41.29% | 901 ms | ↑ 1.10x | 1 | 0s | 4d ago | 24m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.75% | 99.77% | 17.74% | 17.74% | 790 ms | → 1.00x | 4 | 0s | 16h ago | 23m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.75% | 99.89% | 89.12% | 89.12% | 1928 ms | ↑ 1.32x | 2 | 0s | 1d ago | 22m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.75% | 99.72% | 99.89% | 99.89% | 1138 ms | ↑ 1.27x | 3 | 17m | 4d ago | 22m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.75% | 99.94% | 99.03% | 99.03% | 3515 ms | ↑ 1.31x | 1 | 0s | 4d ago | 22m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.75% | 99.77% | 85.29% | 85.29% | 2164 ms | ↑ 1.07x | 4 | 0s | 5d ago | 24m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.75% | 99.04% | 99.15% | 99.15% | 4086 ms | ↑ 1.16x | 9 | 20m | 1d ago | 21m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.83% | 61.71% | 61.71% | 2807 ms | → 1.02x | 3 | 0s | 5d ago | 24m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.75% | 99.94% | 99.86% | 99.86% | 1769 ms | ↑ 1.10x | 1 | 0s | 4d ago | 21m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.75% | 98.75% | 68.33% | 68.33% | 4204 ms | → 0.99x | 19 | 3m | 2d ago | 20m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.75% | 99.77% | 79.10% | 79.10% | 2265 ms | ↑ 1.16x | 4 | 0s | 2d ago | 19m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.75% | 98.92% | 16.81% | 16.81% | 2698 ms | ↑ 1.06x | 8 | 34m | 5d ago | 19m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.75% | 99.89% | 99.86% | 99.86% | 885 ms | ↓ 0.86x | 2 | 0s | 5d ago | 19m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.94% | 47.12% | 47.12% | 2021 ms | ↑ 1.43x | 1 | 0s | 5d ago | 15m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.89% | 18.48% | 18.48% | 2834 ms | ↓ 0.79x | 7 | 1h 40m | 4d ago | 15m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.89% | 99.34% | 99.34% | 2110 ms | ↑ 1.22x | 2 | 0s | 5d ago | 15m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.89% | 20.71% | 20.71% | 2486 ms | ↓ 0.74x | 2 | 0s | 5d ago | 15m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 97.89% | 98.64% | 98.64% | 1244 ms | → 0.96x | 6 | 1h 46m | 5d ago | 14m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.89% | 61.97% | 61.97% | 843 ms | → 0.99x | 2 | 0s | 3d ago | 14m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.43% | 81.64% | 81.64% | 2413 ms | ↑ 1.24x | 3 | 50m | 3d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.75% | 99.83% | 99.84% | 99.84% | 1436 ms | ↑ 1.29x | 3 | 0s | 5d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.09% | 99.09% | 1413 ms | → 1.03x | 2 | 0s | 1d ago | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.89% | 97.87% | 97.87% | 3162 ms | → 1.01x | 2 | 0s | 4d ago | 11m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.75% | 74.13% | 88.91% | 88.91% | 1562 ms | ↑ 1.43x | 2 | 3d 18h | 7d ago | 9m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.75% | 99.89% | 42.92% | 42.92% | 195 ms | ↑ 1.09x | 2 | 0s | 4d ago | 12m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.75% | 99.48% | 96.35% | 96.35% | 1194 ms | ↑ 1.95x | 3 | 51m | 3d ago | 9m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.75% | 99.77% | 80.60% | 80.60% | 2907 ms | ↑ 1.43x | 2 | 26m | 4d ago | 13m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.75% | 99.83% | 98.34% | 98.34% | 2026 ms | ↑ 1.28x | 3 | 0s | 4d ago | 11m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.54% | 97.31% | 97.31% | 1744 ms | ↓ 0.72x | 5 | 16m | 2d ago | 9m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.89% | 99.93% | 99.93% | 1133 ms | ↑ 1.06x | 2 | 0s | 14h ago | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.75% | 97.59% | 98.59% | 98.59% | 940 ms | ↑ 1.46x | 7 | 2h 8m | 4d ago | 8m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.82% | 99.82% | 99.82% | 517 ms | → 0.96x | 1 | 0s | 6d ago | 7m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.75% | 93.46% | 93.46% | 93.46% | 1567 ms | ↑ 1.20x | 55 | 20m | 5d ago | 5m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 75.11% | 82.95% | 82.95% | 2293 ms | ↓ 0.70x | 13 | 12h 55m | 6d ago | 6m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.45% | 98.45% | 98.45% | 2118 ms | ↑ 1.98x | 3 | 1h 47m | 2d ago | 5m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.75% | 98.59% | 86.67% | 86.67% | 3659 ms | ↑ 1.10x | 2 | 1h 6m | 2d ago | 8m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.75% | 99.94% | 99.96% | 99.96% | 1777 ms | ↑ 1.30x | 1 | 0s | 2d ago | 6m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.89% | 99.93% | 99.93% | 1799 ms | ↑ 1.58x | 2 | 0s | 5d ago | 6m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 99.77% | 98.98% | 98.98% | 1696 ms | ↑ 1.55x | 4 | 0s | 7d ago | 8m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.75% | 99.94% | 85.70% | 85.70% | 1193 ms | ↓ 0.91x | 1 | 0s | 19h ago | 8m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.82% | 99.82% | 99.82% | 1709 ms | → 1.00x | 1 | 0s | 2d ago | 8m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.92% | 99.92% | 2160 ms | ↑ 1.96x | 1 | 0s | 1d ago | 6m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.75% | 99.82% | 99.82% | 99.82% | 2240 ms | → 1.03x | 1 | 0s | 4d ago | 8m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.75% | 96.16% | 96.16% | 96.16% | 1283 ms | ↓ 0.73x | 2 | 6h 36m | 5d ago | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.51% | 99.83% | 98.86% | 98.86% | 1214 ms | ↑ 1.29x | 2 | 15m | 5d ago | 21m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.51% | 96.12% | 80.21% | 80.21% | 150 ms | ↑ 1.09x | 4 | 7h 8m | 1d ago | 24m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.83% | 18.59% | 18.59% | 2120 ms | → 1.04x | 3 | 0s | 2d ago | 23m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.51% | 99.83% | 99.92% | 99.92% | 809 ms | → 1.01x | 2 | 10m | 4d ago | 22m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.51% | 99.83% | 54.58% | 54.58% | 1571 ms | ↑ 1.22x | 3 | 0s | 1d ago | 20m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.50% | 99.77% | 21.22% | 21.22% | 1373 ms | ↑ 1.13x | 4 | 0s | 4d ago | 15m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.50% | 99.83% | 99.86% | 99.86% | 1830 ms | ↑ 1.63x | 2 | 10m | 5d ago | 9m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.50% | 99.83% | 81.93% | 81.93% | 2178 ms | ↑ 1.35x | 3 | 0s | 5d ago | 14m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.50% | 99.83% | 90.22% | 90.22% | 968 ms | → 1.03x | 3 | 0s | 3d ago | 13m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.50% | 99.77% | 99.77% | 99.77% | 930 ms | ↑ 1.11x | 4 | 0s | 3d ago | 6m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.50% | 99.54% | 99.53% | 99.53% | 2841 ms | → 1.00x | 8 | 0s | 1d ago | 6m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.39% | 99.39% | 99.39% | 99.39% | 1715 ms | → 1.00x | 1 | 30m | 18h ago | 5m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.26% | 99.83% | 92.33% | 92.33% | 2871 ms | ↑ 1.55x | 1 | 50m | 3d ago | 25m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.26% | 99.66% | 95.99% | 95.99% | 3255 ms | ↑ 1.14x | 6 | 0s | 2d ago | 24m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.26% | 87.61% | 38.02% | 38.02% | 2974 ms | → 1.02x | 79 | 40m | 1d ago | 23m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.26% | 99.78% | 92.15% | 92.15% | 4291 ms | ↑ 1.25x | 2 | 25m | 3d ago | 25m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.25% | 99.77% | 20.25% | 20.25% | 2828 ms | ↑ 1.45x | 4 | 0s | 4d ago | 15m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 99.25% | 24.97% | 66.92% | 66.92% | 696 ms | → 1.02x | 4 | 5d 14h | 1d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.25% | 99.09% | 91.14% | 91.14% | 3051 ms | ↓ 0.94x | 16 | 0s | 5d ago | 11m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.25% | 25.01% | 40.41% | 40.41% | 722 ms | → 1.02x | 4 | 5d 14h | 9h ago | 6m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.10% | 99.10% | 99.10% | 99.10% | 3458 ms | → 1.00x | 2 | 0s | 17h ago | 6m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.00% | 99.60% | 67.51% | 67.51% | 1038 ms | ↑ 1.18x | 5 | 12m | 12h ago | 14m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (70)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.00% | 98.63% | 91.71% | 91.71% | 934 ms | → 1.00x | 9 | 37m | 4d ago | 9m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.00% | 99.14% | 98.58% | 98.58% | 977 ms | ↑ 1.48x | 7 | 24m | 19h ago | 12m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.99% | 99.60% | 99.58% | 99.58% | 1470 ms | ↑ 1.38x | 5 | 12m | 3d ago | 8m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.77% | 99.21% | 99.24% | 99.24% | 2012 ms | ↑ 1.49x | 4 | 52m | 4d ago | 24m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.77% | 98.71% | 98.28% | 98.28% | 4512 ms | → 1.00x | 23 | 0s | 2d ago | 25m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.76% | 98.36% | 98.92% | 98.92% | 2368 ms | ↑ 1.24x | 21 | 11m | 2d ago | 19m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.75% | 99.60% | 57.52% | 57.52% | 2290 ms | ↓ 0.58x | 3 | 40m | 4d ago | 15m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.75% | 99.71% | 99.75% | 99.75% | 2210 ms | ↑ 1.17x | 1 | 1h 41m | 21h ago | 11m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.74% | 99.14% | 98.51% | 98.51% | 3213 ms | ↓ 0.94x | 4 | 1h 2m | 5d ago | 8m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.74% | 85.39% | 85.39% | 85.39% | 4700 ms | → 1.02x | 6 | 6h | 14h ago | 5m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 98.74% | 99.12% | 99.12% | 99.12% | 1269 ms | → 1.04x | 2 | 45m | 2d ago | 7m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.74% | 99.53% | 99.53% | 99.53% | 1826 ms | ↓ 0.87x | 3 | 20m | 5d ago | 5m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.53% | 98.71% | 85.91% | 85.91% | 3664 ms | ↑ 1.24x | 23 | 0s | 1d ago | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.50% | 99.60% | 20.37% | 20.37% | 1793 ms | → 1.03x | 3 | 40m | 6d ago | 15m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.50% | 99.60% | 98.90% | 98.90% | 2968 ms | ↑ 1.10x | 4 | 22m | 6d ago | 12m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.50% | 99.60% | 98.82% | 98.82% | 2004 ms | ↑ 1.25x | 4 | 15m | 3d ago | 13m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.50% | 99.31% | 96.51% | 96.51% | 1884 ms | ↑ 1.16x | 5 | 38m | 2d ago | 9m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.49% | 97.99% | 95.83% | 95.83% | 2237 ms | ↑ 1.44x | 12 | 45m | 22h ago | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.49% | 99.48% | 99.66% | 99.66% | 2690 ms | ↑ 1.20x | 5 | 24m | 3d ago | 6m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 98.49% | 96.78% | 97.86% | 97.86% | 1608 ms | ↑ 2.33x | 9 | 1h 60m | 3h ago | 6m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.49% | 99.48% | 99.66% | 99.66% | 3401 ms | ↑ 1.07x | 5 | 24m | 6d ago | 6m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.27% | 99.09% | 99.66% | 99.66% | 3061 ms | → 0.98x | 10 | 15m | 2d ago | 19m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.25% | 99.54% | 52.11% | 52.11% | 1011 ms | → 0.97x | 4 | 30m | 4d ago | 15m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.25% | 99.49% | 48.34% | 48.34% | 3812 ms | ↑ 2.22x | 8 | 3m | 2d ago | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.24% | 98.51% | 98.62% | 98.62% | 3066 ms | ↑ 1.44x | 24 | 2m | 18h ago | 6m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.22% | 98.22% | 98.22% | 98.22% | 4434 ms | → 1.00x | 4 | 0s | 6h ago | 5m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 97.99% | 99.35% | 99.35% | 99.35% | 1672 ms | → 1.01x | 3 | 47m | 3d ago | 5m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 97.99% | 98.85% | 96.78% | 96.78% | 1944 ms | ↑ 1.68x | 15 | 10m | 4d ago | 8m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 97.75% | 97.75% | 97.75% | 97.75% | 3599 ms | → 1.00x | 1 | 1h 58m | 3d ago | 6m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.74% | 98.63% | 66.26% | 66.26% | 4692 ms | → 1.00x | 21 | 4m | 18h ago | 13m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.74% | 98.45% | 98.97% | 98.97% | 915 ms | → 1.02x | 27 | 0s | 12h ago | 6m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.55% | 98.36% | 85.60% | 85.60% | 4259 ms | → 0.97x | 27 | 2m | 1d ago | 21m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.49% | 97.31% | 97.72% | 97.72% | 4180 ms | ↑ 1.44x | 23 | 29m | 1d ago | 11m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 97.49% | 99.43% | 99.58% | 99.58% | 1725 ms | ↑ 1.61x | 1 | 2h 60m | 6d ago | 8m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.28% | 97.62% | 98.57% | 98.57% | 4089 ms | ↑ 1.05x | 40 | 2m | 2h ago | 19m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.26% | 98.57% | 86.13% | 86.13% | 4514 ms | → 1.01x | 24 | 1m | 16h ago | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 97.24% | 97.42% | 98.25% | 98.25% | 3666 ms | ↑ 1.40x | 18 | 43m | 21h ago | 11m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.24% | 99.09% | 91.11% | 91.11% | 1622 ms | ↑ 1.12x | 15 | 2m | 2h ago | 13m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.05% | 96.67% | 30.21% | 30.21% | 1993 ms | ↑ 1.15x | 10 | 1h 59m | 2h ago | 21m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.55% | 98.25% | 96.51% | 96.51% | 1741 ms | ↑ 1.23x | 8 | 1h 1m | 2d ago | 20m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.48% | 98.28% | 98.82% | 98.82% | 1733 ms | ↑ 1.42x | 6 | 1h 26m | 2d ago | 7m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 96.24% | 92.22% | 84.27% | 84.27% | 2008 ms | ↑ 1.22x | 9 | 6h 19m | 5d ago | 9m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.05% | 97.57% | 74.22% | 74.22% | 4541 ms | → 1.03x | 36 | 5m | 21h ago | 20m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.58% | 96.78% | 17.99% | 17.99% | 1636 ms | ↓ 0.86x | 55 | 44s | 5h ago | 20m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.49% | 96.00% | 82.29% | 82.29% | 4840 ms | → 1.03x | 66 | 1m | 16h ago | 13m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 94.97% | 98.05% | 98.00% | 98.00% | 1955 ms | ↑ 1.12x | 11 | 48m | 23h ago | 6m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.72% | 96.30% | 96.30% | 96.30% | 969 ms | → 1.00x | 2 | 4h 33m | 3d ago | 5m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 94.26% | 98.29% | 96.61% | 96.61% | 4552 ms | ↑ 1.17x | 12 | 43m | 12h ago | 15m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.24% | 97.66% | 85.64% | 85.64% | 4768 ms | → 1.03x | 30 | 10m | 1h ago | 12m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.98% | 98.57% | 96.72% | 96.72% | 1759 ms | ↑ 1.09x | 2 | 4h 23m | 4d ago | 9m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.60% | 98.13% | 47.31% | 47.31% | 2394 ms | ↑ 1.10x | 9 | 1h 1m | 10h ago | 20m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 93.23% | 94.63% | 72.14% | 72.14% | 1982 ms | ↑ 1.22x | 19 | 1h 22m | 4h ago | 14m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.23% | 96.45% | 96.05% | 96.05% | 2119 ms | ↓ 0.71x | 9 | 2h 43m | 2d ago | 9m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 89.41% | 96.32% | 16.75% | 16.75% | 3079 ms | ↑ 1.15x | 60 | 2m | 1d ago | 20m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.22% | 89.81% | 55.81% | 55.81% | 3997 ms | → 1.03x | 147 | 6m | 4h ago | 10m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.22% | 82.88% | 81.35% | 81.35% | 4444 ms | ↓ 0.73x | 36 | 3h 12m | 2d ago | 10m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 87.47% | 96.39% | 81.42% | 81.42% | 1989 ms | ↑ 2.28x | 3 | 8h 40m | 5d ago | 9m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 85.78% | 84.67% | 97.88% | 97.88% | 1818 ms | ↑ 1.23x | 127 | 28m | 4d ago | 22m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 85.04% | 88.94% | 19.19% | 19.19% | 4480 ms | ↓ 0.91x | 152 | 8m | 1h ago | 15m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 83.42% | 68.52% | 77.56% | 77.56% | 1554 ms | ↑ 1.28x | 3 | 3d 5h | 16d ago | 8m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 82.25% | 45.15% | 46.61% | 46.61% | 554 ms | ↑ 1.18x | 2 | 8d 9h | 22d ago | 14m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 81.16% | 90.02% | 93.65% | 93.65% | 3788 ms | ↑ 1.13x | 43 | 1h 9m | 37m ago | 8m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 80.05% | 92.59% | 34.94% | 34.94% | 2079 ms | ↑ 1.08x | 4 | 12h 47m | 5h ago | 14m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 72.48% | 67.16% | 62.36% | 62.36% | 4800 ms | → 0.99x | 326 | 21m | 2h ago | 20m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 68.17% | 15.57% | 15.59% | 15.59% | 3281 ms | → 1.00x | 2 | 12d 14h | 5d ago | 9m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 64.95% | 87.66% | 97.66% | 97.66% | 4613 ms | ↑ 1.31x | 100 | 32m | 2h ago | 22m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 64.57% | 23.68% | 18.79% | 18.79% | 4084 ms | ↑ 1.19x | 188 | 2h 30m | 1h ago | 5m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 56.53% | 81.65% | 81.65% | 81.65% | 4369 ms | ↓ 0.92x | 54 | 1h 21m | 3h ago | 5m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 56.28% | 83.14% | 83.14% | 83.14% | 3668 ms | → 1.04x | 5 | 15h 33m | 2d ago | 5m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 10.30% | 75.47% | 83.66% | 83.66% | 1459 ms | ↑ 2.99x | 5 | 1d 12h | 14h ago | 6m ago |

</details>

<details open>
<summary><strong>🔴 Down (256)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.01% | 98.81% | 18.05% | 18.05% | 3757 ms | → 1.04x | 21 | 0s | 19m ago | 19m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.49% | 99.31% | 98.65% | 98.65% | 2088 ms | ↑ 1.43x | 3 | 1h 27m | 4h ago | 7m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 97.30% | 97.30% | 97.30% | 97.30% | 806 ms | → 1.00x | 2 | 60m | 2h ago | 6m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 94.74% | 96.11% | 83.16% | 83.16% | 4547 ms | → 0.99x | 58 | 5m | 11m ago | 11m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 91.71% | 98.11% | 93.56% | 93.56% | 4625 ms | ↑ 1.85x | 13 | 36m | 8m ago | 8m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 89.45% | 92.61% | 87.09% | 87.09% | 3958 ms | ↑ 1.11x | 3 | 5h 6m | 15h ago | 8m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 89.45% | 97.36% | 97.57% | 97.57% | 3677 ms | ↑ 2.06x | 4 | 4h 12m | 15h ago | 8m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 89.45% | 97.59% | 97.80% | 97.80% | 3230 ms | ↑ 2.31x | 3 | 5h 6m | 15h ago | 8m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 89.20% | 97.53% | 95.93% | 95.93% | 3648 ms | ↑ 1.96x | 4 | 3h 50m | 15h ago | 8m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 87.44% | 97.08% | 96.14% | 96.14% | 3844 ms | ↑ 2.95x | 13 | 1h 9m | 15h ago | 8m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 86.18% | 96.78% | 97.72% | 97.72% | 2680 ms | ↑ 1.26x | 2 | 11h 15m | 23h ago | 6m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 78.38% | 78.38% | 62.26% | 62.26% | 4278 ms | → 1.00x | 8 | 1h 59m | 15h ago | 8m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 72.55% | 93.70% | 99.14% | 99.14% | 1696 ms | → 0.96x | 2 | 22h 40m | 2d ago | 24m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 68.67% | 69.77% | 22.80% | 22.80% | 4644 ms | → 0.99x | 306 | 19m | 13m ago | 13m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 57.25% | 38.30% | 32.06% | 32.06% | 1016 ms | ↑ 1.42x | 4 | 4d 14h | 3d ago | 14m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 54.39% | 79.18% | 94.31% | 94.31% | 468 ms | ↓ 0.19x | 3 | 2d 2h | 3d ago | 11m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 42.46% | 59.61% | 59.61% | 59.61% | 311 ms | → 0.96x | 1 | 4d 1h | 4d ago | 8m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 41.35% | 86.55% | 95.58% | 95.58% | 1304 ms | ↑ 1.50x | 2 | 2d 2h | 4d ago | 9m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 28.14% | 69.44% | 69.44% | 69.44% | 1985 ms | ↑ 1.06x | 1 | 5d 1h | 5d ago | 6m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 27.57% | 83.29% | 85.40% | 85.40% | 330 ms | ↑ 1.16x | 4 | 1d 7h | 5d ago | 9m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 25.63% | 47.62% | 47.62% | 47.62% | 4662 ms | → 0.97x | 3 | 1d 18h | 5d ago | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 14.00% | 59.60% | 51.62% | 51.62% | 3541 ms | ↑ 1.08x | 7 | 1d 16h | 6d ago | 20m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.96% | 1.57% | 59.32% | 59.32% | 4358 ms | ↑ 1.24x | 28 | 1d 1h | 9h ago | 25m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 80.72% | 80.72% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 66.85% | 66.85% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 71.90% | 71.90% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 15.21% | 49.41% | 49.41% | — | — | 5 | 5d 4h | 26d ago | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 3.60% | 79.45% | 79.45% | — | — | 4 | 7d 6h | 29d ago | 12m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 59.88% | 59.88% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.51% | 5.51% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.21% | 12.21% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 56.30% | 56.30% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.31% | 3.31% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 67.40% | 67.40% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 80.96% | 80.96% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.54% | 35.54% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 90.42% | 90.42% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.99% | 22.99% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 72.65% | 72.65% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 49.93% | 49.93% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.08% | 29.08% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 68.56% | 89.65% | 89.65% | — | — | 7 | 1d 9h | 10d ago | 23m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 81.35% | 81.35% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 61.27% | 61.27% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 75.15% | 75.15% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 22h | 4d ago | 24m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.59% | 14.59% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 48.40% | 48.40% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 34.58% | 92.31% | 92.31% | — | — | 6 | 3d 8h | 20d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 33.30% | 33.30% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 6.95% | 81.71% | 81.71% | — | — | 2 | 13d 23h | 28d ago | 15m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 68.86% | 91.35% | 91.35% | — | — | 1 | 9d 15h | 10d ago | 10m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.37% | 3.37% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 81.56% | 81.56% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 5.40% | 34.88% | 34.88% | — | — | 1 | 28d 13h | 29d ago | 6m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.63% | 50.63% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.00% | 2.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 11.63% | 89.34% | 89.34% | — | — | 1 | 26d 18h | 27d ago | 21m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 25.41% | 75.90% | 75.90% | — | — | 1 | 22d 20h | 23d ago | 11m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 74.74% | 74.74% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 30.51% | 30.51% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 53.28% | 53.28% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 27.25% | 52.35% | 52.35% | — | — | 1 | 22d 7h | 22d ago | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.82% | 23.82% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 60.43% | 81.70% | 81.70% | — | — | 9 | 1d 9h | 12d ago | 25m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 60.00% | 40.83% | 40.83% | — | — | 3 | 4d 3h | 12d ago | 20m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 4h | 10d ago | 5m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 61.97% | 66.71% | 66.71% | — | — | 1 | 11d 21h | 12d ago | 9m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 55.82% | 55.82% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 4.28% | 23.66% | 23.66% | — | — | 1 | 28d 21h | 29d ago | 13m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.21% | 5.21% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 64.23% | 64.23% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 81.30% | 81.30% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.49% | 6.49% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 77.64% | 77.64% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 80.10% | 80.10% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 6.97% | 32.03% | 32.03% | — | — | 1 | 28d 4h | 28d ago | 12m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 69.45% | 93.29% | 93.29% | — | — | 2 | 4d 16h | 9d ago | 13m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 26.35% | 26.35% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 23.07% | 24.15% | 24.15% | — | — | 3 | 7d 18h | 21d ago | 10m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.64% | 51.64% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 52.99% | 52.99% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 8.47% | 8.47% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 64.82% | 64.82% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 74.82% | 74.82% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.62% | 45.62% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.45% | 41.45% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 29.23% | 29.23% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 81.31% | 81.31% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 57.43% | 57.43% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.14% | 38.14% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 52.80% | 74.93% | 74.93% | — | — | 2 | 7d 7h | 15d ago | 11m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 3.54% | 79.43% | 79.43% | — | — | 4 | 7d 6h | 29d ago | 12m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 37.26% | 75.98% | 75.98% | — | — | 3 | 6d 10h | 19d ago | 9m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.44% | 30.44% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.50% | 2.50% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 81.52% | 81.52% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.78% | 40.78% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 52.35% | 95.60% | 95.60% | — | — | 1 | 14d 18h | 15d ago | 19m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 81.28% | 81.28% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.15% | 32.15% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 81.20% | 81.20% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 52.09% | 52.09% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 22.54% | 22.54% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 43.47% | 43.47% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 78.91% | 78.91% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 64.32% | 64.32% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 28.95% | 28.95% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 3h | 10d ago | 8m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 77.42% | 77.42% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 3h | 10d ago | 8m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 49.84% | 49.84% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 3h | 10d ago | 8m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.36% | 42.36% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 75.86% | 75.86% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 43.34% | 40.86% | 40.86% | — | — | 4 | 4d 9h | 17d ago | 21m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 57.87% | 57.87% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 43.14% | 43.14% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 61.47% | 61.47% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 87.18% | 87.18% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.76% | 27.76% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.04% | 12.04% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 24.00% | 24.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.64% | 23.64% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 18.06% | 51.95% | 51.95% | — | — | 1 | 24d 24h | 25d ago | 21m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 23.07% | 92.31% | 92.31% | — | — | 8 | 2d 22h | 23d ago | 23m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 54.84% | 54.84% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 39.15% | 76.23% | 76.23% | — | — | 1 | 18d 16h | 19d ago | 10m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.98% | 9.98% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.14% | 17.14% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.57% | 48.57% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 73.94% | 52.10% | 52.10% | — | — | 2 | 4d | 8d ago | 12m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 23.85% | 23.85% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 54.12% | 54.12% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 93.86% | 93.86% | — | — | 1 | 3d 21h | 4d ago | 18m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 38.41% | 38.41% | — | — | 1 | 10d 3h | 10d ago | 14m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 22.35% | 22.35% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 34.40% | 34.40% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 47.35% | 47.35% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.44% | 5.44% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 24.00% | 79.77% | 79.77% | — | — | 2 | 11d 15h | 23d ago | 13m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 88.59% | 88.59% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 44.11% | 64.92% | 64.92% | — | — | 1 | 17d 6h | 17d ago | 5m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 81.39% | 81.39% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 80.33% | 80.33% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 62.65% | 62.65% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 73.56% | 73.56% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 80.19% | 80.19% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 23h | 4d ago | 6m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.17% | 19.17% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 22.27% | 58.66% | 58.66% | — | — | 1 | 23d 19h | 24d ago | 24m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 24.96% | 41.52% | 41.52% | — | — | 4 | 5d 17h | 23d ago | 10m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.23% | 4.00% | 4.00% | — | — | 2 | 14d 23h | 25d ago | 20m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.44% | 33.44% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.66% | 67.30% | 67.30% | — | — | 4 | 7d 5h | 23d ago | 22m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.77% | 25.03% | 25.03% | — | — | 27 | 22h 39m | 21d ago | 12m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.36% | 7.36% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 64.43% | 64.43% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.97% | 32.14% | 32.14% | — | — | 2 | 14d 21h | 30d ago | 6m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 66.33% | 66.33% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 39.79% | 39.79% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.32% | 5.32% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 21h | 4d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 25.63% | 56.90% | 56.90% | — | — | 1 | 22d 17h | 23d ago | 8m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 1.15% | 49.77% | 49.77% | — | — | 1 | 29d 17h | 30d ago | 8m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 35.62% | 35.62% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 21.89% | 21.89% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 43.43% | 5.38% | 5.38% | — | — | 3 | 5d 20h | 17d ago | 22m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.73% | 11.73% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 0.00% | 64.18% | 88.90% | 88.90% | — | — | 1 | 11d 4h | 11d ago | 22m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.63% | 17.63% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 17.49% | 17.49% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 33.36% | 33.36% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 3.77% | 9.83% | 9.83% | — | — | 32 | 21h 16m | 28d ago | 13m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 9.14% | 9.14% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.89% | 0.89% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.02% | 5.02% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.86% | 5.86% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.99% | 48.99% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 47.47% | 47.47% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 81.36% | 81.36% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 24.55% | 24.55% | 24.55% | — | — | 1 | 12d 14h | 13d ago | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 16.77% | 73.84% | 73.84% | — | — | 1 | 25d 11h | 25d ago | 10m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 46.25% | 46.25% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 81.55% | 81.55% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 53.71% | 53.71% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.62% | 40.62% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.91% | 1.91% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.11% | 19.21% | 19.21% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 4h | 10d ago | 6m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 79.33% | 79.33% | — | — | 1 | 29d 23h | 30d ago | 18m ago |

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
