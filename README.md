# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**667 providers** — 346 🟢 operational · 62 🟡 degraded · 259 🔴 down · 0 ⚫ unknown

_Updated 2026-06-15 09:27 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (346)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.08% | 98.08% | 735 ms | → 1.01x | 1 | 0s | 18d ago | 10m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1645 ms | → 0.97x | 0 | — | — | 8m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.71% | 93.71% | 1918 ms | ↑ 1.33x | 3 | 0s | 9d ago | 15m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.48% | 72.23% | 72.23% | 1012 ms | → 0.97x | 8 | 4m | 9d ago | 15m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.44% | 97.44% | 3762 ms | ↑ 1.32x | 0 | — | — | 24m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 55.11% | 55.11% | 1996 ms | ↑ 1.26x | 0 | — | — | 14m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.84% | 99.84% | 99.84% | 1321 ms | → 1.00x | 1 | 0s | 10d ago | 8m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.85% | 97.85% | 3729 ms | ↑ 1.11x | 2 | 0s | 18d ago | 20m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.81% | 98.81% | 2217 ms | ↑ 1.18x | 0 | — | — | 26m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.47% | 99.47% | 3446 ms | ↑ 1.08x | 1 | 0s | 25d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.88% | 99.23% | 99.23% | 2255 ms | ↓ 0.72x | 1 | 19m | 27d ago | 10m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.05% | 95.05% | 2930 ms | ↑ 1.32x | 0 | — | — | 11m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1993 ms | ↑ 1.48x | 0 | — | — | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.64% | 97.64% | 3226 ms | ↑ 1.41x | 0 | — | — | 11m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.96% | 99.96% | 1786 ms | ↑ 1.35x | 0 | — | — | 9m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1096 ms | ↑ 1.44x | 0 | — | — | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.60% | 98.60% | 1411 ms | ↑ 1.23x | 0 | — | — | 11m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.82% | 98.82% | 1546 ms | ↑ 1.12x | 0 | — | — | 9m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 37.02% | 37.02% | 812 ms | ↑ 1.51x | 0 | — | — | 21m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1534 ms | ↑ 1.13x | 0 | — | — | 8m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.90% | 96.90% | 2740 ms | ↑ 1.25x | 1 | 0s | 20d ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 38.64% | 64.01% | 64.01% | 1041 ms | → 1.01x | 1 | 18d 1h | 30d ago | 11m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1334 ms | ↑ 1.52x | 1 | 0s | 24d ago | 9m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.67% | 96.67% | 868 ms | ↑ 1.31x | 0 | — | — | 13m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.25% | 87.09% | 87.09% | 1792 ms | ↑ 1.81x | 3 | 1h 24m | 17d ago | 12m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1848 ms | ↑ 1.11x | 1 | 0s | 24d ago | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.33% | 98.33% | 3927 ms | ↑ 1.39x | 1 | 60m | 25d ago | 12m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.11% | 98.11% | 413 ms | ↑ 1.56x | 0 | — | — | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.33% | 85.33% | 2631 ms | ↑ 1.94x | 0 | — | — | 11m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.66% | 97.66% | 1856 ms | ↑ 1.36x | 0 | — | — | 14m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 838 ms | ↑ 1.16x | 0 | — | — | 22m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3157 ms | ↑ 1.12x | 0 | — | — | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.00% | 99.00% | 648 ms | ↑ 2.21x | 0 | — | — | 13m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.87% | 97.87% | 4036 ms | ↑ 1.10x | 1 | 0s | 21d ago | 25m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.24% | 96.24% | 1126 ms | ↑ 1.09x | 0 | — | — | 13m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1228 ms | → 1.00x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1722 ms | → 1.00x | 0 | — | — | 8m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.70% | 98.87% | 98.87% | 3240 ms | ↑ 1.12x | 3 | 4h 28m | 9d ago | 9m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 2226 ms | ↑ 1.05x | 0 | — | — | 22m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.79% | 99.79% | 99.79% | 1294 ms | ↓ 0.71x | 1 | 51m | 15d ago | 8m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.84% | 99.84% | 99.84% | 512 ms | ↓ 0.94x | 1 | 0s | 7d ago | 9m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 3765 ms | ↑ 1.05x | 1 | 0s | 21d ago | 20m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.70% | 99.70% | 1314 ms | ↑ 1.16x | 1 | 0s | 14d ago | 11m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1210 ms | → 1.00x | 0 | — | — | 8m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 29.69% | 29.69% | 1185 ms | ↑ 1.17x | 0 | — | — | 22m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.16% | 96.09% | 96.09% | 2560 ms | ↑ 1.19x | 1 | 12h 2m | 20d ago | 11m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.70% | 97.79% | 97.79% | 4223 ms | ↑ 1.18x | 14 | 52m | 12d ago | 11m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1917 ms | ↓ 0.82x | 0 | — | — | 9m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 607 ms | ↓ 0.55x | 0 | — | — | 9m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.94% | 97.48% | 97.48% | 2317 ms | ↑ 1.26x | 1 | 0s | 29d ago | 17m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.65% | 96.65% | 907 ms | → 1.00x | 0 | — | — | 15m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.11% | 97.93% | 97.93% | 2064 ms | ↑ 1.10x | 1 | 21h 30m | 11d ago | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 54.57% | 54.57% | 1814 ms | ↑ 1.41x | 0 | — | — | 17m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.88% | 99.66% | 99.66% | 2269 ms | ↓ 0.61x | 2 | 0s | 13d ago | 9m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1624 ms | ↑ 1.35x | 1 | 0s | 24d ago | 9m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3784 ms | ↑ 1.13x | 0 | — | — | 21m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.13% | 97.13% | 1711 ms | ↑ 1.32x | 0 | — | — | 21m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.22% | 83.22% | 3253 ms | ↑ 1.45x | 0 | — | — | 15m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 66.24% | 66.24% | 1373 ms | → 0.98x | 2 | 0s | 13d ago | 15m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1336 ms | → 1.00x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.67% | 98.67% | 2656 ms | ↑ 1.32x | 0 | — | — | 12m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4403 ms | ↑ 1.31x | 1 | 0s | 24d ago | 8m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.85% | 92.85% | 733 ms | ↓ 0.92x | 1 | 0s | 21d ago | 16m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.62% | 98.62% | 1272 ms | ↑ 1.41x | 0 | — | — | 11m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.84% | 99.84% | 604 ms | ↑ 1.94x | 3 | 0s | 12d ago | 13m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.33% | 99.33% | 866 ms | ↓ 0.60x | 0 | — | — | 10m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1831 ms | → 1.00x | 0 | — | — | 8m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 74.01% | 89.05% | 89.05% | 1379 ms | ↑ 1.43x | 2 | 3d 18h | 8d ago | 11m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2416 ms | → 1.00x | 0 | — | — | 8m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.16% | 76.16% | 1346 ms | ↑ 1.31x | 0 | — | — | 15m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.60% | 95.83% | 95.83% | 1242 ms | ↑ 1.68x | 1 | 3h | 30d ago | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1128 ms | ↓ 0.95x | 0 | — | — | 9m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.18% | 98.18% | 2646 ms | ↑ 1.28x | 0 | — | — | 14m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 26.83% | 31.49% | 31.49% | 2038 ms | → 1.05x | 1 | 21d 21h | 30d ago | 17m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1208 ms | → 1.00x | 0 | — | — | 8m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2490 ms | ↑ 1.51x | 1 | 0s | 24d ago | 9m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.90% | 99.90% | 99.90% | 2161 ms | ↓ 0.84x | 1 | 0s | 9d ago | 8m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.02% | 98.02% | 1012 ms | ↑ 1.12x | 0 | — | — | 17m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.85% | 99.85% | 2289 ms | ↑ 1.26x | 1 | 0s | 24d ago | 9m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 60.18% | 60.18% | 1927 ms | → 1.04x | 1 | 0s | 27d ago | 15m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.31% | 63.31% | 1657 ms | ↑ 1.23x | 0 | — | — | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1324 ms | ↓ 0.68x | 0 | — | — | 10m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.21% | 99.21% | 1775 ms | ↑ 1.15x | 0 | — | — | 15m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.81% | 99.81% | 2182 ms | ↓ 0.73x | 0 | — | — | 13m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.58% | 99.58% | 778 ms | ↓ 0.93x | 1 | 0s | 16d ago | 15m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 18.90% | 18.90% | 1631 ms | → 0.97x | 1 | 0s | 11d ago | 21m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.83% | 99.73% | 99.73% | 2627 ms | ↑ 1.19x | 3 | 0s | 26d ago | 25m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2398 ms | ↑ 1.16x | 0 | — | — | 8m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.04% | 99.04% | 3774 ms | ↑ 1.15x | 1 | 29m | 21d ago | 25m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.15% | 98.15% | 3793 ms | ↑ 1.22x | 0 | — | — | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.49% | 99.90% | 99.90% | 983 ms | ↑ 1.13x | 4 | 29m | 13d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 74.88% | 74.88% | 2290 ms | ↑ 1.16x | 0 | — | — | 14m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1312 ms | → 1.00x | 0 | — | — | 9m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.59% | 99.59% | 1742 ms | ↑ 1.58x | 1 | 2h 60m | 8d ago | 10m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1696 ms | ↑ 1.29x | 0 | — | — | 26m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 2591 ms | ↓ 0.57x | 1 | 0s | 19d ago | 26m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.40% | 89.40% | 1460 ms | ↓ 0.54x | 0 | — | — | 15m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 78.50% | 78.50% | 2155 ms | ↑ 1.05x | 0 | — | — | 13m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.78% | 99.78% | 854 ms | ↑ 1.21x | 1 | 0s | 18d ago | 25m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 614 ms | ↑ 1.13x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 84.20% | 84.20% | 2829 ms | ↑ 1.40x | 0 | — | — | 11m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2110 ms | ↑ 1.22x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2236 ms | ↑ 1.52x | 0 | — | — | 11m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.04% | 99.04% | 1052 ms | ↑ 1.52x | 0 | — | — | 17m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.35% | 97.35% | 2337 ms | ↑ 3.18x | 0 | — | — | 11m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.85% | 99.85% | 99.85% | 1711 ms | ↑ 1.15x | 1 | 0s | 9d ago | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2147 ms | ↑ 1.22x | 0 | — | — | 9m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.72% | 87.33% | 87.33% | 1633 ms | ↑ 1.08x | 5 | 0s | 23d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.83% | 97.80% | 97.80% | 1190 ms | ↓ 0.86x | 3 | 0s | 15d ago | 10m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.84% | 98.84% | 400 ms | ↑ 1.68x | 0 | — | — | 13m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.77% | 99.00% | 99.00% | 1599 ms | ↑ 1.47x | 4 | 0s | 8d ago | 10m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.98% | 98.98% | 3215 ms | ↑ 2.13x | 0 | — | — | 17m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 81.57% | 81.57% | 922 ms | ↑ 1.25x | 0 | — | — | 10m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.94% | 18.80% | 18.80% | 3443 ms | ↑ 1.18x | 1 | 0s | 10d ago | 20m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.10% | 97.43% | 97.43% | 538 ms | ↓ 0.81x | 10 | 57m | 24d ago | 9m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.70% | 99.70% | 99.70% | 622 ms | → 1.04x | 1 | 1h | 15d ago | 8m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.88% | 99.88% | 1543 ms | ↑ 1.32x | 2 | 11m | 16d ago | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 22.69% | 22.69% | 2382 ms | ↑ 2.05x | 0 | — | — | 17m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1195 ms | ↑ 1.54x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.84% | 99.84% | 2826 ms | ↑ 1.08x | 1 | 0s | 29d ago | 26m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.87% | 98.76% | 98.76% | 2520 ms | ↑ 1.51x | 15 | 43m | 12d ago | 12m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 734 ms | ↑ 1.22x | 0 | — | — | 24m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 98.05% | 98.05% | 1358 ms | ↑ 1.14x | 0 | — | — | 10m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 3402 ms | ↑ 1.16x | 2 | 0s | 23d ago | 25m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.07% | 98.07% | 1088 ms | ↓ 0.56x | 0 | — | — | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.73% | 99.73% | 820 ms | ↑ 1.35x | 0 | — | — | 26m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.71% | 99.71% | 1600 ms | ↑ 1.07x | 4 | 8m | 9d ago | 20m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 575 ms | ↓ 0.49x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.72% | 98.72% | 4672 ms | ↑ 1.09x | 0 | — | — | 27m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2370 ms | ↓ 0.61x | 0 | — | — | 24m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1980 ms | ↑ 1.36x | 0 | — | — | 9m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2682 ms | ↑ 1.12x | 0 | — | — | 21m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.51% | 98.51% | 3686 ms | ↓ 0.71x | 0 | — | — | 13m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1161 ms | ↑ 1.06x | 0 | — | — | 24m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.83% | 99.45% | 99.45% | 2830 ms | → 1.02x | 3 | 0s | 18d ago | 20m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.66% | 99.85% | 99.85% | 174 ms | ↑ 1.12x | 4 | 15m | 21d ago | 24m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1531 ms | ↑ 1.07x | 3 | 10m | 9d ago | 14m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2286 ms | ↑ 1.08x | 0 | — | — | 15m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.66% | 99.66% | 1652 ms | ↓ 0.70x | 0 | — | — | 10m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 326 ms | ↓ 0.86x | 0 | — | — | 8m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 680 ms | → 0.98x | 0 | — | — | 25m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 96.90% | 95.87% | 95.87% | 3363 ms | ↑ 1.26x | 4 | 4h 46m | 19d ago | 15m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 60.84% | 60.84% | 1266 ms | → 1.04x | 0 | — | — | 16m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2732 ms | ↑ 1.12x | 0 | — | — | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.60% | 20.64% | 20.64% | 1773 ms | ↑ 1.06x | 3 | 40m | 7d ago | 17m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.60% | 98.91% | 98.91% | 2940 ms | → 1.01x | 4 | 22m | 7d ago | 14m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.20% | 79.94% | 79.94% | 2283 ms | ↑ 1.19x | 1 | 13h | 12d ago | 26m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1122 ms | → 0.99x | 0 | — | — | 25m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1050 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1654 ms | ↑ 1.45x | 1 | 0s | 24d ago | 9m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 1196 ms | ↑ 1.22x | 1 | 0s | 18d ago | 11m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.44% | 98.44% | 1800 ms | ↑ 1.31x | 0 | — | — | 11m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.14% | 98.14% | 1417 ms | ↓ 0.73x | 0 | — | — | 11m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.65% | 69.65% | 1185 ms | ↑ 1.21x | 0 | — | — | 15m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1314 ms | ↑ 1.06x | 0 | — | — | 8m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 2063 ms | ↑ 1.25x | 0 | — | — | 24m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1876 ms | ↓ 0.47x | 1 | 0s | 24d ago | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.49% | 92.49% | 1669 ms | → 1.03x | 3 | 0s | 13d ago | 15m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 99.94% | 51.78% | 51.78% | 888 ms | ↑ 1.54x | 1 | 0s | 11d ago | 13m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.42% | 85.42% | 1218 ms | ↑ 2.59x | 0 | — | — | 23m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 90.86% | 90.86% | 407 ms | ↑ 1.09x | 0 | — | — | 13m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.30% | 99.30% | 2294 ms | ↑ 1.12x | 0 | — | — | 15m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.72% | 98.86% | 98.86% | 3074 ms | ↑ 1.19x | 5 | 0s | 9d ago | 26m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.31% | 67.31% | 1458 ms | ↑ 1.95x | 1 | 0s | 17d ago | 15m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.67% | 96.67% | 1622 ms | ↑ 1.07x | 0 | — | — | 15m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.88% | 99.85% | 99.85% | 1834 ms | ↑ 1.44x | 2 | 0s | 18d ago | 9m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 20.59% | 20.59% | 2798 ms | ↑ 1.56x | 1 | 0s | 11d ago | 21m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2727 ms | ↑ 1.10x | 0 | — | — | 25m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 96.43% | 97.17% | 97.17% | 592 ms | ↓ 0.53x | 1 | 1d | 17d ago | 9m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4269 ms | ↑ 1.17x | 0 | — | — | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.08% | 58.08% | 725 ms | ↑ 1.16x | 0 | — | — | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.43% | 98.43% | 98.43% | 1862 ms | ↑ 1.29x | 1 | 4h 17m | 24d ago | 15m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 40.17% | 40.17% | 3423 ms | ↑ 1.34x | 1 | 0s | 23d ago | 15m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.22% | 99.22% | 3780 ms | ↑ 1.12x | 1 | 0s | 17d ago | 20m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 3377 ms | ↑ 1.12x | 0 | — | — | 25m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2422 ms | ↑ 1.22x | 1 | 30m | 23d ago | 15m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.20% | 91.80% | 91.80% | 2658 ms | → 1.00x | 5 | 7h 46m | 14d ago | 13m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2267 ms | ↑ 1.15x | 0 | — | — | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.48% | 98.73% | 98.73% | 2404 ms | ↑ 1.21x | 4 | 37m | 10d ago | 9m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.52% | 79.52% | 1690 ms | → 1.00x | 0 | — | — | 15m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 191 ms | → 1.03x | 1 | 0s | 18d ago | 25m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2536 ms | ↑ 1.60x | 0 | — | — | 8m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2646 ms | ↑ 1.34x | 0 | — | — | 24m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2534 ms | ↑ 1.29x | 1 | 0s | 24d ago | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 2188 ms | ↑ 1.15x | 0 | — | — | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.53% | 99.53% | 3693 ms | ↑ 1.09x | 1 | 0s | 26d ago | 25m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 79.92% | 79.92% | 2501 ms | ↑ 1.36x | 1 | 0s | 20d ago | 15m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.50% | 86.50% | 3167 ms | ↑ 1.20x | 0 | — | — | 15m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.92% | 99.92% | 1589 ms | ↑ 1.29x | 1 | 0s | 24d ago | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.12% | 96.12% | 2453 ms | ↑ 1.61x | 0 | — | — | 17m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1371 ms | ↑ 1.29x | 0 | — | — | 23m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.57% | 98.57% | 856 ms | ↑ 1.42x | 0 | — | — | 13m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 22.18% | 22.18% | 713 ms | ↑ 1.73x | 0 | — | — | 16m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 923 ms | ↑ 1.08x | 0 | — | — | 13m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.77% | 19.71% | 19.71% | 1337 ms | ↑ 1.26x | 4 | 0s | 18d ago | 17m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.25% | 61.25% | 2463 ms | ↑ 1.20x | 0 | — | — | 15m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.82% | 99.82% | 3115 ms | ↑ 1.12x | 1 | 0s | 13d ago | 25m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 62.39% | 30.45% | 30.45% | 926 ms | ↓ 0.82x | 1 | 10d 20h | 30d ago | 25m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.45% | 92.45% | 28 ms | ↑ 1.17x | 0 | — | — | 11m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.57% | 98.88% | 98.88% | 1664 ms | ↑ 1.41x | 2 | 6h 50m | 16d ago | 23m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 18.88% | 18.88% | 1672 ms | ↑ 1.51x | 0 | — | — | 23m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1739 ms | ↑ 1.09x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.52% | 99.52% | 1876 ms | ↑ 1.44x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3693 ms | ↑ 1.80x | 0 | — | — | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 618 ms | ↓ 0.57x | 0 | — | — | 9m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.43% | 93.43% | 4638 ms | ↑ 1.12x | 0 | — | — | 25m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.72% | 99.54% | 99.54% | 1914 ms | ↑ 1.09x | 1 | 1h 20m | 17d ago | 24m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2197 ms | ↑ 1.16x | 1 | 0s | 11d ago | 15m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.22% | 99.22% | 1139 ms | ↑ 1.06x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.89% | 99.89% | 1660 ms | → 1.03x | 1 | 0s | 24d ago | 9m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 42.05% | 42.05% | 1440 ms | ↑ 1.06x | 2 | 0s | 10d ago | 25m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.58% | 99.58% | 1646 ms | → 0.99x | 1 | 0s | 26d ago | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.46% | 99.46% | 2245 ms | ↑ 1.58x | 0 | — | — | 23m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 549 ms | ↑ 1.23x | 0 | — | — | 27m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.71% | 98.71% | 3130 ms | ↑ 1.19x | 0 | — | — | 11m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.71% | 96.71% | 3527 ms | ↑ 1.20x | 0 | — | — | 25m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 3543 ms | ↓ 0.85x | 0 | — | — | 8m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.94% | 99.58% | 99.58% | 4498 ms | ↑ 1.85x | 1 | 0s | 23d ago | 10m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.80% | 99.80% | 993 ms | ↑ 1.37x | 1 | 20m | 18d ago | 11m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.42% | 88.42% | 2239 ms | ↑ 1.36x | 0 | — | — | 15m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.82% | 99.82% | 1208 ms | ↑ 1.20x | 0 | — | — | 11m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1760 ms | → 1.02x | 0 | — | — | 10m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 2141 ms | ↑ 1.18x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1465 ms | ↑ 1.16x | 0 | — | — | 26m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.87% | 99.92% | 99.92% | 2427 ms | ↑ 1.46x | 2 | 0s | 9d ago | 9m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1404 ms | ↑ 1.21x | 0 | — | — | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 74.02% | 74.02% | 997 ms | ↓ 0.89x | 1 | 0s | 24d ago | 13m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 3189 ms | ↑ 1.10x | 1 | 0s | 20d ago | 22m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 924 ms | ↑ 1.06x | 0 | — | — | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.51% | 84.51% | 2199 ms | ↑ 1.16x | 1 | 0s | 14d ago | 21m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 24.22% | 24.22% | 2450 ms | ↑ 1.24x | 1 | 0s | 12d ago | 27m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.05% | 98.05% | 2531 ms | ↑ 1.41x | 3 | 0s | 17d ago | 11m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.85% | 99.85% | 1761 ms | ↑ 2.23x | 2 | 30m | 12d ago | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.49% | 97.49% | 3117 ms | ↑ 1.85x | 1 | 0s | 9d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.80% | 98.80% | 910 ms | ↑ 1.23x | 0 | — | — | 15m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.72% | 98.72% | 1876 ms | ↓ 0.94x | 0 | — | — | 23m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.31% | 99.55% | 99.55% | 2667 ms | ↑ 1.33x | 3 | 1h 3m | 21d ago | 9m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.88% | 97.88% | 4004 ms | ↑ 1.34x | 1 | 0s | 27d ago | 12m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1091 ms | ↑ 2.03x | 1 | 0s | 24d ago | 9m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1622 ms | → 1.00x | 0 | — | — | 8m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2681 ms | ↑ 1.29x | 0 | — | — | 8m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 29.32% | 29.32% | 1277 ms | ↑ 1.31x | 1 | 0s | 28d ago | 23m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1388 ms | ↑ 1.57x | 1 | 0s | 22d ago | 15m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.32% | 98.32% | 2158 ms | ↑ 1.33x | 0 | — | — | 15m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1755 ms | ↑ 1.41x | 0 | — | — | 23m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.43% | 88.43% | 3889 ms | ↑ 1.36x | 0 | — | — | 15m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 12.00% | 12.00% | 2644 ms | → 1.00x | 0 | — | — | 21m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.57% | 96.57% | 3007 ms | ↑ 1.49x | 0 | — | — | 17m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 18.88% | 18.88% | 1971 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1028 ms | ↑ 1.09x | 0 | — | — | 9m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.01% | 97.01% | 2595 ms | ↑ 1.48x | 0 | — | — | 11m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2488 ms | ↑ 1.23x | 1 | 0s | 20d ago | 23m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 20.73% | 20.73% | 3604 ms | ↑ 1.55x | 0 | — | — | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 18.68% | 18.68% | 2144 ms | ↑ 1.40x | 0 | — | — | 17m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.48% | 99.66% | 99.66% | 3353 ms | → 1.01x | 5 | 24m | 7d ago | 9m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.75% | 99.75% | 2919 ms | ↑ 1.17x | 1 | 2h 18m | 23d ago | 13m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 2152 ms | ↑ 1.24x | 0 | — | — | 25m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2310 ms | → 1.00x | 0 | — | — | 8m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 96.94% | 99.65% | 99.65% | 2362 ms | ↑ 1.11x | 6 | 2h 50m | 28d ago | 23m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1542 ms | ↓ 0.68x | 0 | — | — | 23m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 315 ms | → 1.00x | 0 | — | — | 8m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.57% | 98.57% | 1917 ms | ↑ 1.49x | 0 | — | — | 11m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 2176 ms | ↑ 1.13x | 1 | 0s | 12d ago | 21m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 3284 ms | ↑ 1.17x | 1 | 0s | 15d ago | 17m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.12% | 99.12% | 1894 ms | ↑ 1.23x | 1 | 0s | 12d ago | 25m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 933 ms | ↑ 1.91x | 0 | — | — | 23m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 496 ms | → 1.00x | 0 | — | — | 8m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.76% | 99.94% | 41.49% | 41.49% | 939 ms | ↑ 1.12x | 1 | 0s | 5d ago | 26m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.76% | 99.77% | 85.35% | 85.35% | 2268 ms | ↑ 1.06x | 4 | 0s | 6d ago | 25m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.27% | 99.44% | 99.44% | 3088 ms | ↑ 1.14x | 6 | 32m | 1h ago | 26m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.76% | 99.83% | 61.84% | 61.84% | 2799 ms | → 1.03x | 3 | 0s | 6d ago | 25m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.76% | 98.98% | 98.98% | 98.98% | 4078 ms | ↑ 1.09x | 10 | 18m | 2d ago | 23m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.76% | 99.89% | 99.63% | 99.63% | 2408 ms | ↑ 1.31x | 2 | 0s | 6d ago | 24m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 99.83% | 18.03% | 18.03% | 794 ms | → 1.00x | 3 | 0s | 2d ago | 24m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.89% | 89.16% | 89.16% | 1957 ms | ↑ 1.37x | 2 | 0s | 2d ago | 24m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.76% | 99.94% | 99.89% | 99.89% | 1226 ms | ↑ 1.31x | 1 | 0s | 5d ago | 24m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.72% | 99.65% | 99.65% | 1410 ms | ↑ 1.42x | 4 | 5m | 17h ago | 23m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.76% | 99.94% | 99.03% | 99.03% | 3722 ms | ↑ 1.35x | 1 | 0s | 5d ago | 24m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.76% | 99.04% | 99.15% | 99.15% | 4106 ms | ↑ 1.16x | 9 | 20m | 2d ago | 23m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.76% | 99.94% | 99.86% | 99.86% | 1766 ms | ↑ 1.15x | 1 | 0s | 5d ago | 23m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 99.77% | 79.18% | 79.18% | 2368 ms | ↑ 1.14x | 4 | 0s | 3d ago | 21m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.76% | 98.92% | 17.10% | 17.10% | 3298 ms | ↑ 1.14x | 8 | 34m | 6d ago | 20m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.89% | 99.86% | 99.86% | 849 ms | ↓ 0.80x | 2 | 0s | 6d ago | 20m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.94% | 47.32% | 47.32% | 2139 ms | ↑ 1.48x | 1 | 0s | 6d ago | 17m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.54% | 52.28% | 52.28% | 1123 ms | → 0.98x | 4 | 30m | 5d ago | 17m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.88% | 18.76% | 18.76% | 2650 ms | ↓ 0.65x | 7 | 1h 40m | 5d ago | 17m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.89% | 99.34% | 99.34% | 2179 ms | ↑ 1.29x | 2 | 0s | 6d ago | 17m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.89% | 20.99% | 20.99% | 2266 ms | ↓ 0.60x | 2 | 0s | 6d ago | 17m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 97.88% | 98.64% | 98.64% | 1257 ms | → 0.95x | 6 | 1h 46m | 6d ago | 15m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.89% | 62.17% | 62.17% | 781 ms | → 0.97x | 2 | 0s | 4d ago | 15m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.43% | 81.75% | 81.75% | 2510 ms | ↑ 1.29x | 3 | 50m | 4d ago | 15m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.14% | 97.52% | 97.52% | 2310 ms | ↑ 1.29x | 10 | 12m | 6h ago | 14m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.09% | 99.09% | 1445 ms | → 1.02x | 2 | 0s | 2d ago | 15m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.94% | 90.10% | 90.10% | 2257 ms | ↑ 1.12x | 1 | 0s | 3h ago | 15m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.75% | 99.89% | 43.37% | 43.37% | 195 ms | ↑ 1.07x | 2 | 0s | 5d ago | 14m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.75% | 99.77% | 80.71% | 80.71% | 3109 ms | ↑ 1.54x | 2 | 26m | 5d ago | 15m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.60% | 98.83% | 98.83% | 2000 ms | ↑ 1.27x | 4 | 15m | 5d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.75% | 99.83% | 99.85% | 99.85% | 1434 ms | ↑ 1.27x | 3 | 0s | 6d ago | 11m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.89% | 97.89% | 97.89% | 2981 ms | ↓ 0.92x | 2 | 0s | 5d ago | 12m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.75% | 99.71% | 96.39% | 96.39% | 1215 ms | ↑ 1.95x | 2 | 45m | 4d ago | 11m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.75% | 99.83% | 98.36% | 98.36% | 2187 ms | ↑ 1.36x | 3 | 0s | 5d ago | 13m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.54% | 97.35% | 97.35% | 1533 ms | ↓ 0.62x | 5 | 16m | 3d ago | 10m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.42% | 99.76% | 99.76% | 4223 ms | ↑ 1.39x | 6 | 20m | 7h ago | 12m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.88% | 99.93% | 99.93% | 1133 ms | ↑ 1.07x | 2 | 0s | 2d ago | 9m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.75% | 97.58% | 98.62% | 98.62% | 946 ms | ↑ 1.57x | 7 | 2h 8m | 5d ago | 10m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 75.52% | 83.38% | 83.38% | 2171 ms | ↓ 0.61x | 13 | 12h 38m | 7d ago | 9m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.53% | 98.53% | 98.53% | 2111 ms | ↑ 2.00x | 3 | 1h 47m | 3d ago | 8m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.75% | 98.74% | 87.88% | 87.88% | 4193 ms | ↑ 1.13x | 2 | 1h 6m | 3d ago | 10m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.88% | 99.92% | 99.92% | 1606 ms | ↑ 1.40x | 2 | 0s | 21h ago | 9m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.88% | 99.93% | 99.93% | 1855 ms | ↑ 1.77x | 2 | 0s | 6d ago | 9m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.21% | 99.21% | 99.21% | 1265 ms | → 1.03x | 2 | 45m | 3d ago | 9m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.84% | 99.84% | 99.84% | 1748 ms | → 1.03x | 1 | 0s | 3d ago | 10m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.92% | 99.92% | 2204 ms | ↑ 2.01x | 1 | 0s | 2d ago | 8m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.75% | 99.84% | 99.84% | 99.84% | 2238 ms | ↑ 1.06x | 1 | 0s | 5d ago | 10m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.75% | 96.41% | 96.41% | 96.41% | 1157 ms | ↓ 0.60x | 2 | 6h 36m | 6d ago | 8m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.52% | 99.83% | 98.87% | 98.87% | 1116 ms | ↑ 1.27x | 2 | 15m | 6d ago | 23m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.52% | 99.83% | 18.88% | 18.88% | 2123 ms | → 1.04x | 3 | 0s | 3d ago | 24m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.52% | 99.83% | 99.92% | 99.92% | 821 ms | → 0.98x | 2 | 10m | 5d ago | 24m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.52% | 99.83% | 54.74% | 54.74% | 1582 ms | ↑ 1.23x | 3 | 0s | 3d ago | 22m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.51% | 99.77% | 21.48% | 21.48% | 1388 ms | ↑ 1.15x | 4 | 0s | 5d ago | 17m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.51% | 99.54% | 67.66% | 67.66% | 1020 ms | ↑ 1.26x | 6 | 10m | 6h ago | 15m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.51% | 99.89% | 82.03% | 82.03% | 2308 ms | ↑ 1.43x | 2 | 0s | 6d ago | 15m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.51% | 99.83% | 90.28% | 90.28% | 972 ms | → 1.03x | 3 | 0s | 4d ago | 15m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.50% | 99.83% | 99.86% | 99.86% | 1906 ms | ↑ 1.72x | 2 | 10m | 6d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.50% | 99.08% | 91.22% | 91.22% | 2964 ms | ↓ 0.92x | 16 | 0s | 6d ago | 13m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.50% | 93.67% | 93.67% | 93.67% | 1557 ms | ↑ 1.18x | 56 | 19m | 4h ago | 8m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.50% | 99.77% | 99.78% | 99.78% | 915 ms | ↑ 1.11x | 4 | 0s | 5d ago | 9m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.50% | 99.88% | 99.93% | 99.93% | 1983 ms | ↑ 1.49x | 2 | 0s | 6h ago | 9m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.50% | 99.54% | 99.54% | 99.54% | 2839 ms | ↑ 1.07x | 8 | 0s | 2d ago | 9m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.50% | 99.88% | 86.02% | 86.02% | 1217 ms | → 0.97x | 2 | 0s | 1d ago | 9m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.50% | 98.91% | 99.12% | 99.12% | 1644 ms | ↑ 1.51x | 12 | 16m | 15h ago | 9m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.49% | 99.49% | 99.49% | 99.49% | 1796 ms | → 1.00x | 1 | 30m | 2d ago | 8m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.31% | 99.31% | 99.31% | 99.31% | 3618 ms | → 1.00x | 2 | 0s | 2d ago | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.28% | 99.83% | 92.35% | 92.35% | 2856 ms | ↑ 1.61x | 1 | 50m | 4d ago | 27m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.28% | 99.66% | 96.01% | 96.01% | 3325 ms | ↑ 1.16x | 6 | 0s | 3d ago | 26m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.28% | 99.77% | 92.18% | 92.18% | 4331 ms | ↑ 1.29x | 2 | 25m | 4d ago | 27m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.27% | 98.64% | 68.43% | 68.43% | 4067 ms | → 0.97x | 20 | 5m | 1d ago | 21m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.26% | 99.77% | 20.52% | 20.52% | 2950 ms | ↑ 1.53x | 4 | 0s | 5d ago | 17m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 99.26% | 28.90% | 67.10% | 67.10% | 695 ms | → 1.02x | 4 | 5d 7h | 2d ago | 15m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.26% | 98.56% | 91.81% | 91.81% | 892 ms | → 1.02x | 10 | 33m | 6h ago | 11m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.26% | 28.93% | 41.87% | 41.87% | 715 ms | → 1.03x | 4 | 5d 7h | 1d ago | 9m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.06% | 99.06% | 99.06% | 99.06% | 1617 ms | → 1.00x | 2 | 0s | 11h ago | 8m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.03% | 98.24% | 98.91% | 98.91% | 2364 ms | ↑ 1.24x | 22 | 11m | 18h ago | 21m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.01% | 99.14% | 98.59% | 98.59% | 1188 ms | ↑ 1.66x | 7 | 24m | 2d ago | 14m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.01% | 99.60% | 99.59% | 99.59% | 1460 ms | ↑ 1.39x | 5 | 12m | 4d ago | 10m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.01% | 86.91% | 86.91% | 86.91% | 4693 ms | → 1.00x | 6 | 6h | 2d ago | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (62)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 98.98% | 98.98% | 98.98% | 98.98% | 2446 ms | → 1.00x | 1 | 0s | 1d ago | 8m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.80% | 99.61% | 99.25% | 99.25% | 2014 ms | ↑ 1.57x | 3 | 30m | 5d ago | 25m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.77% | 99.60% | 58.22% | 58.22% | 1936 ms | ↓ 0.50x | 3 | 40m | 5d ago | 17m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.76% | 99.71% | 99.75% | 99.75% | 2267 ms | ↑ 1.20x | 1 | 1h 41m | 2d ago | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.76% | 99.14% | 98.54% | 98.54% | 2973 ms | ↓ 0.80x | 4 | 1h 2m | 6d ago | 10m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 98.76% | 68.38% | 78.13% | 78.13% | 1553 ms | ↑ 1.24x | 3 | 3d 5h | 17d ago | 10m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.76% | 99.55% | 99.55% | 99.55% | 1705 ms | ↓ 0.78x | 3 | 20m | 6d ago | 8m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.56% | 98.76% | 86.11% | 86.11% | 3788 ms | ↑ 1.28x | 22 | 0s | 3d ago | 27m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.56% | 98.76% | 98.28% | 98.28% | 4520 ms | → 1.03x | 22 | 0s | 8h ago | 26m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.54% | 98.64% | 18.33% | 18.33% | 4017 ms | ↑ 1.09x | 24 | 0s | 9h ago | 20m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.51% | 99.31% | 96.56% | 96.56% | 1872 ms | ↑ 1.16x | 5 | 38m | 3d ago | 11m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.51% | 97.98% | 95.94% | 95.94% | 2214 ms | ↑ 1.41x | 12 | 45m | 2d ago | 10m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.51% | 99.48% | 99.66% | 99.66% | 2629 ms | ↑ 1.09x | 5 | 24m | 4d ago | 9m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.51% | 98.85% | 96.86% | 96.86% | 1886 ms | ↑ 1.62x | 15 | 10m | 5d ago | 10m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.28% | 98.28% | 98.28% | 98.28% | 4518 ms | → 1.00x | 5 | 0s | 19h ago | 8m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 98.26% | 98.26% | 98.26% | 98.26% | 3429 ms | → 1.00x | 1 | 1h 58m | 4d ago | 8m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.26% | 98.39% | 98.96% | 98.96% | 907 ms | → 1.04x | 28 | 0s | 1h ago | 9m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.26% | 98.44% | 98.62% | 98.62% | 3131 ms | ↑ 1.49x | 25 | 2m | 11h ago | 8m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.03% | 98.28% | 96.62% | 96.62% | 4580 ms | ↑ 1.21x | 12 | 43m | 2d ago | 16m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 98.01% | 99.38% | 99.38% | 99.38% | 1614 ms | ↓ 0.92x | 3 | 47m | 4d ago | 8m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.78% | 98.68% | 66.45% | 66.45% | 4688 ms | → 1.00x | 20 | 5m | 2d ago | 15m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.78% | 99.08% | 91.17% | 91.17% | 1614 ms | ↑ 1.16x | 15 | 2m | 1d ago | 15m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.77% | 96.60% | 97.80% | 97.80% | 1560 ms | ↑ 2.37x | 10 | 1h 54m | 1d ago | 8m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 97.54% | 44.96% | 46.83% | 46.83% | 553 ms | ↑ 1.12x | 2 | 8d 9h | 24d ago | 16m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.52% | 99.31% | 48.80% | 48.80% | 3917 ms | ↑ 2.42x | 11 | 2m | 4h ago | 12m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.35% | 98.47% | 85.65% | 85.65% | 4313 ms | → 0.99x | 25 | 2m | 22h ago | 23m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.28% | 97.24% | 97.73% | 97.73% | 4294 ms | ↑ 1.45x | 24 | 28m | 7h ago | 12m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 97.28% | 97.41% | 98.27% | 98.27% | 3801 ms | ↑ 1.41x | 18 | 43m | 2d ago | 12m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.10% | 96.66% | 30.46% | 30.46% | 2042 ms | ↑ 1.20x | 10 | 1h 59m | 1d ago | 22m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.05% | 98.57% | 86.18% | 86.18% | 4479 ms | → 1.04x | 24 | 1m | 23h ago | 17m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 96.77% | 99.14% | 98.59% | 98.59% | 2041 ms | ↑ 1.30x | 3 | 1h 57m | 1d ago | 9m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.62% | 98.24% | 96.52% | 96.52% | 1699 ms | ↑ 1.26x | 8 | 1h 1m | 4d ago | 21m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.60% | 97.39% | 98.56% | 98.56% | 4253 ms | ↑ 1.08x | 44 | 1m | 8h ago | 20m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.53% | 98.27% | 98.85% | 98.85% | 1807 ms | ↑ 1.41x | 6 | 1h 26m | 4d ago | 9m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.30% | 96.16% | 82.43% | 82.43% | 4835 ms | → 1.03x | 64 | 1m | 2d ago | 15m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 96.29% | 92.18% | 84.49% | 84.49% | 2001 ms | ↑ 1.22x | 9 | 6h 19m | 6d ago | 11m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.13% | 97.62% | 74.30% | 74.30% | 4538 ms | → 1.03x | 36 | 5m | 1h ago | 21m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.90% | 90.90% | 38.71% | 38.71% | 3169 ms | → 1.05x | 84 | 22m | 3h ago | 25m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.41% | 96.60% | 18.26% | 18.26% | 1163 ms | ↓ 0.83x | 59 | 41s | 2m ago | 22m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 95.04% | 98.04% | 98.05% | 98.05% | 1937 ms | ↑ 1.10x | 11 | 48m | 2d ago | 9m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.81% | 97.82% | 85.75% | 85.75% | 4787 ms | → 1.04x | 27 | 11m | 1d ago | 14m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.79% | 96.69% | 96.69% | 96.69% | 860 ms | → 0.98x | 2 | 4h 33m | 4d ago | 8m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.71% | 98.70% | 99.74% | 99.74% | 2082 ms | ↑ 1.11x | 3 | 2h 10m | 16h ago | 25m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 94.55% | 96.15% | 83.26% | 83.26% | 4560 ms | → 1.00x | 56 | 6m | 5h ago | 13m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.06% | 98.62% | 96.77% | 96.77% | 1763 ms | ↑ 1.09x | 1 | 8h 47m | 6d ago | 11m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.72% | 98.30% | 47.51% | 47.51% | 2394 ms | ↑ 1.12x | 8 | 1h 3m | 2d ago | 21m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.59% | 94.38% | 72.26% | 72.26% | 1981 ms | ↑ 1.26x | 20 | 1h 21m | 11h ago | 15m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 91.34% | 96.43% | 96.12% | 96.12% | 2132 ms | ↓ 0.72x | 9 | 2h 43m | 3d ago | 10m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 90.34% | 96.31% | 17.04% | 17.04% | 2803 ms | ↑ 1.12x | 60 | 2m | 2d ago | 21m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.37% | 82.81% | 81.56% | 81.56% | 4206 ms | ↓ 0.67x | 36 | 3h 12m | 3d ago | 11m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.87% | 89.76% | 56.14% | 56.14% | 3999 ms | → 1.02x | 147 | 6m | 6h ago | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 87.62% | 96.38% | 81.67% | 81.67% | 2020 ms | ↑ 2.44x | 3 | 8h 40m | 6d ago | 11m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.50% | 96.90% | 99.58% | 99.58% | 3593 ms | ↑ 1.20x | 4 | 4h 37m | 1d ago | 26m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 87.47% | 84.62% | 97.88% | 97.88% | 1920 ms | ↑ 1.26x | 127 | 28m | 5d ago | 24m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 84.77% | 88.96% | 19.46% | 19.46% | 4494 ms | ↓ 0.89x | 148 | 9m | 5h ago | 16m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 84.12% | 88.94% | 93.26% | 93.26% | 3745 ms | ↑ 1.08x | 61 | 49m | 38m ago | 9m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 83.66% | 19.44% | 16.91% | 16.91% | 3258 ms | → 1.00x | 2 | 12d 1h | 6d ago | 10m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 76.67% | 26.56% | 20.57% | 20.57% | 4079 ms | ↑ 1.18x | 182 | 2h 30m | 2h ago | 8m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 72.22% | 67.57% | 62.41% | 62.41% | 4784 ms | → 0.99x | 323 | 20m | 2h ago | 22m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 70.97% | 82.20% | 82.20% | 82.20% | 4316 ms | ↓ 0.93x | 59 | 1h 14m | 36m ago | 8m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 56.82% | 84.09% | 84.09% | 84.09% | 2846 ms | ↓ 0.93x | 5 | 15h 33m | 4d ago | 8m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 26.30% | 75.30% | 84.03% | 84.03% | 1107 ms | ↑ 2.60x | 6 | 1d 6h | 21h ago | 8m ago |

</details>

<details open>
<summary><strong>🔴 Down (259)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.79% | 98.86% | 99.63% | 99.63% | 3503 ms | → 1.04x | 12 | 19m | 50m ago | 20m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 97.77% | 99.42% | 99.63% | 99.63% | 1956 ms | ↑ 1.47x | 2 | 1h 40m | 3h ago | 8m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 93.60% | 98.40% | 97.89% | 97.89% | 1849 ms | ↓ 0.87x | 2 | 4h 51m | 9h ago | 15m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 87.50% | 93.29% | 80.02% | 80.02% | 150 ms | ↑ 1.12x | 5 | 9h 16m | 18h ago | 26m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 78.66% | 94.99% | 91.78% | 91.78% | 4801 ms | ↑ 1.93x | 24 | 1h 2m | 2h ago | 10m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 75.00% | 75.00% | 75.00% | 75.00% | 806 ms | → 1.00x | 2 | 13h 59m | 1d ago | 9m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 73.20% | 82.97% | 78.51% | 78.51% | 4061 ms | ↑ 1.17x | 3 | 13h 46m | 2d ago | 10m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 73.20% | 93.55% | 95.19% | 95.19% | 3766 ms | ↑ 2.16x | 4 | 10h 41m | 2d ago | 10m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 73.20% | 93.72% | 93.54% | 93.54% | 3684 ms | ↑ 2.05x | 4 | 10h 19m | 2d ago | 10m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 73.20% | 93.78% | 95.33% | 95.33% | 3271 ms | ↑ 2.42x | 3 | 13h 46m | 2d ago | 10m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 71.71% | 93.26% | 94.48% | 94.48% | 3992 ms | ↑ 3.00x | 13 | 3h 9m | 2d ago | 10m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 69.98% | 92.96% | 95.25% | 95.25% | 2618 ms | ↑ 1.20x | 2 | 1d | 2d ago | 9m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 68.55% | 92.62% | 34.91% | 34.91% | 2092 ms | ↑ 1.09x | 8 | 6h 15m | 6h ago | 16m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 67.95% | 86.66% | 97.58% | 97.58% | 4673 ms | ↑ 1.32x | 114 | 29m | 24m ago | 24m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 67.41% | 70.18% | 23.08% | 23.08% | 4644 ms | → 0.99x | 305 | 19m | 15m ago | 15m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 60.42% | 60.42% | 51.56% | 51.56% | 4278 ms | → 1.00x | 8 | 5h 14m | 2d ago | 10m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 56.49% | 89.79% | 98.79% | 98.79% | 1719 ms | → 0.97x | 2 | 1d 12h | 3d ago | 25m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 41.38% | 38.43% | 31.91% | 31.91% | 1084 ms | ↑ 1.59x | 4 | 4d 14h | 4d ago | 15m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 38.61% | 75.29% | 93.39% | 93.39% | 474 ms | ↓ 0.20x | 3 | 2d 10h | 4d ago | 12m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 26.80% | 53.40% | 53.40% | 53.40% | 304 ms | ↓ 0.94x | 1 | 5d 3h | 5d ago | 9m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 25.74% | 82.75% | 94.45% | 94.45% | 1472 ms | ↑ 1.53x | 1 | 5d 5h | 5d ago | 11m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 12.66% | 64.87% | 64.87% | 64.87% | 1996 ms | ↑ 1.08x | 1 | 6d 3h | 6d ago | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 12.13% | 79.41% | 84.12% | 84.12% | 306 ms | → 0.95x | 4 | 1d 13h | 6d ago | 11m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 10.42% | 42.65% | 42.65% | 42.65% | 4046 ms | ↓ 0.86x | 3 | 2d 2h | 6d ago | 10m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.16% | 1.63% | 59.11% | 59.11% | 4324 ms | ↑ 1.19x | 29 | 1d | 15h ago | 27m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.24% | 55.69% | 51.45% | 51.45% | 1570 ms | ↓ 0.85x | 8 | 1d 14h | 19h ago | 22m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 80.43% | 80.43% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 66.62% | 66.62% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 71.66% | 71.66% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 11.01% | 48.32% | 48.32% | — | — | 5 | 5d 9h | 27d ago | 9m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.46% | 78.86% | 78.86% | — | — | 1 | 29d 20h | 30d ago | 13m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 59.37% | 59.37% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.49% | 5.49% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.17% | 12.17% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 55.65% | 55.65% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.30% | 3.30% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 66.72% | 66.72% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 80.68% | 80.68% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.41% | 35.41% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 90.10% | 90.10% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.86% | 22.86% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 49.56% | 49.56% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.94% | 28.94% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 64.65% | 89.33% | 89.33% | — | — | 6 | 1d 19h | 11d ago | 25m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 81.06% | 81.06% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 61.06% | 61.06% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 74.88% | 74.88% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 24h | 5d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.50% | 14.50% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 48.14% | 48.14% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 30.54% | 91.99% | 91.99% | — | — | 6 | 3d 12h | 21d ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 33.10% | 33.10% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 2.80% | 81.44% | 81.44% | — | — | 2 | 14d 12h | 29d ago | 17m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 64.93% | 90.46% | 90.46% | — | — | 1 | 10d 17h | 11d ago | 12m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.35% | 3.35% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 81.28% | 81.28% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 1.15% | 34.00% | 34.00% | — | — | 1 | 29d 15h | 30d ago | 9m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.45% | 50.45% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.00% | 2.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 7.53% | 89.03% | 89.03% | — | — | 1 | 27d 21h | 28d ago | 23m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 21.28% | 75.10% | 75.10% | — | — | 1 | 23d 22h | 24d ago | 12m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 74.17% | 74.17% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 30.22% | 30.22% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 53.09% | 53.09% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 23.12% | 51.75% | 51.75% | — | — | 1 | 23d 9h | 23d ago | 11m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.70% | 23.70% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 56.45% | 81.41% | 81.41% | — | — | 9 | 1d 11h | 13d ago | 27m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 56.03% | 40.69% | 40.69% | — | — | 3 | 4d 12h | 13d ago | 22m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 6h | 11d ago | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 58.00% | 65.19% | 65.19% | — | — | 1 | 12d 23h | 13d ago | 10m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 55.63% | 55.63% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.06% | 23.50% | 23.50% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.17% | 5.17% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 64.01% | 64.01% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 81.01% | 81.01% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.42% | 6.42% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 77.37% | 77.37% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 79.81% | 79.81% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 2.76% | 31.78% | 31.78% | — | — | 1 | 29d 6h | 29d ago | 14m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 65.48% | 92.66% | 92.66% | — | — | 2 | 5d 5h | 10d ago | 15m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 26.12% | 26.12% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 18.92% | 23.86% | 23.86% | — | — | 3 | 8d 3h | 22d ago | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.46% | 51.46% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 52.65% | 52.65% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 8.26% | 8.26% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 64.18% | 64.18% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 74.56% | 74.56% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.46% | 45.46% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.31% | 41.31% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 28.49% | 28.49% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 81.02% | 81.02% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 57.23% | 57.23% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.01% | 38.01% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 48.79% | 74.31% | 74.31% | — | — | 2 | 7d 20h | 16d ago | 13m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.46% | 78.83% | 78.83% | — | — | 1 | 29d 20h | 30d ago | 13m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 33.18% | 74.99% | 74.99% | — | — | 3 | 6d 18h | 20d ago | 11m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.49% | 2.49% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 81.24% | 81.24% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.64% | 40.64% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 48.35% | 95.27% | 95.27% | — | — | 1 | 15d 20h | 16d ago | 21m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 81.00% | 81.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.03% | 32.03% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 80.92% | 80.92% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 51.40% | 51.40% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 22.22% | 22.22% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 43.23% | 43.23% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 78.63% | 78.63% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 63.90% | 63.90% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 28.59% | 28.59% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 5h | 11d ago | 9m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 77.15% | 77.15% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 5h | 11d ago | 10m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 49.40% | 49.40% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.11% | 3.11% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 5h | 11d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.21% | 42.21% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 75.59% | 75.59% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 39.33% | 40.71% | 40.71% | — | — | 4 | 4d 15h | 18d ago | 23m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 57.67% | 57.67% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 42.39% | 42.39% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 60.87% | 60.87% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 86.88% | 86.88% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.66% | 27.66% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.95% | 11.95% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 23.63% | 23.63% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.56% | 23.56% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 13.98% | 51.77% | 51.77% | — | — | 1 | 26d 2h | 26d ago | 23m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 19.06% | 91.99% | 91.99% | — | — | 7 | 3d 12h | 24d ago | 25m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 54.41% | 54.41% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 35.08% | 75.44% | 75.44% | — | — | 1 | 19d 18h | 20d ago | 12m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.80% | 9.80% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.08% | 17.08% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.40% | 48.40% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 69.99% | 51.68% | 51.68% | — | — | 2 | 4d 13h | 9d ago | 14m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.94% | 53.94% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 93.48% | 93.48% | — | — | 1 | 4d 24h | 5d ago | 20m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 38.22% | 38.22% | — | — | 1 | 11d 5h | 11d ago | 16m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 22.15% | 22.15% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 46.86% | 46.86% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.43% | 5.43% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 19.90% | 79.27% | 79.27% | — | — | 2 | 12d 4h | 24d ago | 15m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 88.28% | 88.28% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 40.05% | 63.42% | 63.42% | — | — | 1 | 18d 8h | 18d ago | 8m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 81.11% | 81.11% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 80.05% | 80.05% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 62.43% | 62.43% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 73.31% | 73.31% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 79.91% | 79.91% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 1h | 5d ago | 9m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.10% | 19.10% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 18.21% | 58.45% | 58.45% | — | — | 1 | 24d 21h | 25d ago | 26m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 20.82% | 41.09% | 41.09% | — | — | 4 | 5d 24h | 24d ago | 12m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.23% | 3.98% | 3.98% | — | — | 2 | 14d 23h | 26d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.32% | 33.32% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.67% | 67.06% | 67.06% | — | — | 4 | 7d 5h | 25d ago | 24m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.83% | 24.84% | 24.84% | — | — | 27 | 22h 39m | 22d ago | 14m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.32% | 7.32% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 64.21% | 64.21% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 31.33% | 31.33% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 66.10% | 66.10% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 39.10% | 39.10% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.19% | 5.19% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 23h | 5d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 21.49% | 55.91% | 55.91% | — | — | 1 | 23d 19h | 24d ago | 10m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 48.84% | 48.84% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 35.21% | 35.21% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 21.53% | 21.53% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 39.42% | 5.36% | 5.36% | — | — | 3 | 6d 4h | 18d ago | 23m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.62% | 11.62% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 0.00% | 60.24% | 88.59% | 88.59% | — | — | 1 | 12d 6h | 12d ago | 23m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.57% | 17.57% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 17.29% | 17.29% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 32.74% | 32.74% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 1.38% | 9.77% | 9.77% | — | — | 13 | 2d 6h | 29d ago | 15m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 8.92% | 8.92% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.87% | 0.87% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.94% | 4.94% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.76% | 5.76% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.82% | 48.82% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 46.59% | 46.59% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 81.08% | 81.08% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 22.93% | 22.93% | 22.93% | — | — | 1 | 13d 16h | 14d ago | 8m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 12.59% | 73.11% | 73.11% | — | — | 1 | 26d 13h | 27d ago | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 45.82% | 45.82% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 81.26% | 81.26% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 52.95% | 52.95% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.48% | 40.48% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.86% | 1.86% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 19.11% | 19.11% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 5h | 11d ago | 9m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 79.06% | 79.06% | — | — | 1 | 29d 24h | 30d ago | 19m ago |

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
