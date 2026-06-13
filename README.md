# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**665 providers** — 347 🟢 operational · 67 🟡 degraded · 251 🔴 down · 0 ⚫ unknown

_Updated 2026-06-13 07:01 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (347)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.02% | 98.02% | 611 ms | ↓ 0.93x | 1 | 0s | 16d ago | 11m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1712 ms | → 0.98x | 0 | — | — | 8m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.49% | 71.96% | 71.96% | 1069 ms | → 0.99x | 8 | 4m | 7d ago | 16m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.42% | 97.42% | 3421 ms | ↑ 1.23x | 0 | — | — | 28m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 54.44% | 54.44% | 2027 ms | ↑ 1.24x | 0 | — | — | 14m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.80% | 99.80% | 99.80% | 1280 ms | → 1.01x | 1 | 0s | 7d ago | 8m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.84% | 97.84% | 2866 ms | → 1.02x | 2 | 0s | 16d ago | 23m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.80% | 98.80% | 1985 ms | ↑ 1.12x | 0 | — | — | 30m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.46% | 99.46% | 3324 ms | → 1.03x | 1 | 0s | 23d ago | 30m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.20% | 99.20% | 2536 ms | ↑ 1.15x | 1 | 19m | 25d ago | 10m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.93% | 94.93% | 2710 ms | ↑ 1.28x | 0 | — | — | 12m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1981 ms | ↑ 1.50x | 0 | — | — | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.20% | 97.58% | 97.58% | 2944 ms | ↑ 1.33x | 1 | 4h 31m | 30d ago | 12m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 99.96% | 99.96% | 1763 ms | ↑ 1.36x | 0 | — | — | 9m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1040 ms | ↑ 1.33x | 0 | — | — | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.57% | 98.57% | 1315 ms | ↑ 1.13x | 0 | — | — | 12m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.77% | 98.77% | 1852 ms | ↑ 1.53x | 0 | — | — | 9m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 36.62% | 36.62% | 763 ms | ↑ 1.28x | 0 | — | — | 23m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1404 ms | → 1.03x | 0 | — | — | 8m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.86% | 96.86% | 2640 ms | ↑ 1.20x | 1 | 0s | 18d ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 31.15% | 63.20% | 63.20% | 959 ms | → 0.98x | 1 | 20d 4h | 30d ago | 12m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1068 ms | ↑ 1.31x | 1 | 0s | 22d ago | 9m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.62% | 96.62% | 782 ms | ↑ 1.20x | 0 | — | — | 14m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.20% | 86.85% | 86.85% | 1503 ms | ↑ 1.57x | 4 | 1h 3m | 15d ago | 13m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1899 ms | ↑ 1.16x | 1 | 0s | 22d ago | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.29% | 98.29% | 3461 ms | ↑ 1.29x | 1 | 60m | 23d ago | 13m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.04% | 98.04% | 320 ms | ↑ 1.37x | 0 | — | — | 11m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 85.01% | 85.01% | 2420 ms | ↑ 1.78x | 0 | — | — | 12m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.97% | 99.97% | 1072 ms | → 1.04x | 1 | 0s | 22d ago | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.63% | 97.63% | 1711 ms | ↑ 1.37x | 0 | — | — | 14m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 840 ms | ↑ 1.15x | 0 | — | — | 24m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3233 ms | ↑ 1.13x | 0 | — | — | 24m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.98% | 98.98% | 596 ms | ↑ 2.03x | 0 | — | — | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.05% | 98.98% | 98.98% | 3830 ms | ↑ 1.07x | 9 | 20m | 10d ago | 26m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.89% | 97.86% | 97.86% | 3894 ms | ↑ 1.07x | 2 | 0s | 19d ago | 29m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.82% | 99.82% | 2134 ms | ↑ 1.14x | 0 | — | — | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.18% | 96.18% | 1062 ms | → 1.01x | 0 | — | — | 14m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1353 ms | → 1.00x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 780 ms | → 1.00x | 0 | — | — | 8m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1249 ms | → 1.00x | 0 | — | — | 8m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.94% | 99.88% | 99.88% | 2739 ms | ↑ 1.37x | 1 | 0s | 22d ago | 9m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.52% | 99.52% | 2269 ms | ↑ 1.07x | 0 | — | — | 24m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.77% | 99.77% | 99.77% | 1434 ms | → 1.05x | 1 | 51m | 13d ago | 8m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 3335 ms | ↓ 0.93x | 1 | 0s | 19d ago | 23m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.89% | 99.69% | 99.69% | 1313 ms | ↑ 1.07x | 2 | 0s | 12d ago | 12m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1200 ms | → 1.00x | 0 | — | — | 8m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 29.24% | 29.24% | 1186 ms | ↑ 1.17x | 0 | — | — | 24m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.18% | 95.98% | 95.98% | 2401 ms | ↑ 1.12x | 1 | 12h 2m | 18d ago | 11m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1638 ms | ↑ 1.06x | 1 | 0s | 22d ago | 8m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.72% | 97.74% | 97.74% | 4209 ms | ↑ 1.31x | 14 | 52m | 10d ago | 13m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1712 ms | → 1.00x | 0 | — | — | 8m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2244 ms | ↓ 0.92x | 0 | — | — | 9m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 624 ms | ↓ 0.58x | 0 | — | — | 9m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.77% | 97.46% | 97.46% | 2169 ms | ↑ 1.16x | 3 | 10m | 27d ago | 17m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.61% | 96.61% | 912 ms | → 1.00x | 0 | — | — | 15m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.15% | 97.83% | 97.83% | 2132 ms | ↑ 1.14x | 1 | 21h 30m | 9d ago | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 54.25% | 54.25% | 1628 ms | ↑ 1.27x | 0 | — | — | 17m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.89% | 99.64% | 99.64% | 2521 ms | ↓ 0.79x | 2 | 0s | 11d ago | 9m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1387 ms | → 1.01x | 1 | 0s | 22d ago | 8m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3679 ms | ↑ 1.13x | 0 | — | — | 23m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.11% | 97.11% | 1695 ms | ↑ 1.38x | 0 | — | — | 23m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.03% | 83.03% | 2892 ms | ↑ 1.30x | 0 | — | — | 16m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 65.93% | 65.93% | 1372 ms | → 0.99x | 2 | 0s | 11d ago | 16m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1199 ms | ↓ 0.93x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.64% | 98.64% | 2347 ms | ↑ 1.23x | 0 | — | — | 13m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 4263 ms | ↑ 1.20x | 1 | 0s | 22d ago | 8m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.79% | 92.79% | 753 ms | → 0.96x | 1 | 0s | 19d ago | 16m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.59% | 98.59% | 1177 ms | ↑ 1.43x | 0 | — | — | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.83% | 99.83% | 552 ms | ↑ 1.80x | 3 | 0s | 10d ago | 14m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.30% | 99.30% | 850 ms | ↓ 0.55x | 0 | — | — | 10m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1765 ms | → 1.00x | 0 | — | — | 8m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2568 ms | → 1.00x | 0 | — | — | 8m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 75.92% | 75.92% | 1212 ms | ↑ 1.19x | 0 | — | — | 16m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.54% | 95.61% | 95.61% | 1198 ms | ↑ 1.58x | 2 | 1h 30m | 28d ago | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1181 ms | ↓ 0.94x | 0 | — | — | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.15% | 98.15% | 2560 ms | ↑ 1.18x | 0 | — | — | 14m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1351 ms | → 1.00x | 0 | — | — | 8m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2189 ms | ↑ 1.34x | 1 | 0s | 22d ago | 8m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.89% | 99.89% | 99.89% | 2366 ms | ↓ 0.94x | 1 | 0s | 7d ago | 8m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.94% | 98.00% | 98.00% | 952 ms | ↑ 1.08x | 1 | 0s | 28d ago | 17m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.84% | 99.84% | 2214 ms | ↑ 1.17x | 1 | 0s | 22d ago | 9m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 59.85% | 59.85% | 2021 ms | ↑ 1.11x | 1 | 0s | 25d ago | 16m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.01% | 63.01% | 1460 ms | ↑ 1.18x | 0 | — | — | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1244 ms | ↓ 0.60x | 0 | — | — | 10m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.21% | 99.21% | 1637 ms | ↑ 1.07x | 0 | — | — | 16m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 100.00% | 90.00% | 90.00% | 2095 ms | ↑ 1.07x | 0 | — | — | 15m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.81% | 99.81% | 2505 ms | ↓ 0.85x | 0 | — | — | 14m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.57% | 99.57% | 895 ms | → 1.00x | 1 | 0s | 14d ago | 16m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.89% | 98.08% | 98.08% | 1849 ms | ↓ 0.92x | 1 | 30m | 11d ago | 16m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 18.38% | 18.38% | 755 ms | ↓ 0.64x | 1 | 0s | 9d ago | 24m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.83% | 99.73% | 99.73% | 2452 ms | ↑ 1.12x | 3 | 0s | 24d ago | 29m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2404 ms | ↑ 1.35x | 0 | — | — | 8m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.03% | 99.03% | 3648 ms | ↑ 1.12x | 1 | 29m | 19d ago | 29m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.84% | 99.84% | 3339 ms | ↑ 1.14x | 3 | 0s | 13d ago | 30m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.14% | 98.14% | 3553 ms | ↑ 1.15x | 0 | — | — | 30m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.50% | 99.90% | 99.90% | 1117 ms | ↑ 1.14x | 4 | 29m | 11d ago | 24m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 74.50% | 74.50% | 2176 ms | ↑ 1.05x | 0 | — | — | 14m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1364 ms | → 1.00x | 0 | — | — | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1550 ms | ↑ 1.21x | 0 | — | — | 30m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.72% | 99.72% | 2778 ms | ↓ 0.79x | 2 | 0s | 17d ago | 30m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.28% | 89.28% | 884 ms | ↓ 0.39x | 0 | — | — | 15m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 78.12% | 78.12% | 2074 ms | → 1.01x | 0 | — | — | 14m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.78% | 99.78% | 824 ms | ↑ 1.21x | 1 | 0s | 16d ago | 29m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 572 ms | → 1.05x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 83.80% | 83.80% | 2698 ms | ↑ 1.34x | 0 | — | — | 12m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1925 ms | ↑ 1.14x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2023 ms | ↑ 1.44x | 0 | — | — | 12m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.03% | 99.03% | 917 ms | ↑ 1.36x | 0 | — | — | 17m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.28% | 97.28% | 2143 ms | ↑ 2.85x | 0 | — | — | 12m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.81% | 99.81% | 99.81% | 1542 ms | → 1.03x | 1 | 0s | 7d ago | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 1448 ms | ↑ 1.25x | 1 | 0s | 22d ago | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1877 ms | ↑ 1.14x | 0 | — | — | 8m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.72% | 87.25% | 87.25% | 1633 ms | ↑ 1.07x | 5 | 0s | 21d ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.72% | 97.72% | 97.72% | 1472 ms | → 0.96x | 5 | 0s | 13d ago | 11m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.82% | 98.82% | 304 ms | ↑ 1.56x | 0 | — | — | 14m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.97% | 98.97% | 2982 ms | ↑ 1.76x | 0 | — | — | 17m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 78.07% | 78.07% | 625 ms | ↑ 1.10x | 0 | — | — | 10m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.94% | 18.27% | 18.27% | 2735 ms | ↑ 1.06x | 1 | 0s | 8d ago | 23m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.66% | 97.30% | 97.30% | 590 ms | ↓ 0.79x | 18 | 31m | 22d ago | 9m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.66% | 99.66% | 99.66% | 724 ms | ↑ 1.09x | 1 | 1h | 13d ago | 8m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.88% | 99.88% | 1523 ms | ↑ 1.31x | 2 | 11m | 14d ago | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 22.15% | 22.15% | 2315 ms | ↑ 1.90x | 0 | — | — | 17m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1029 ms | ↑ 1.33x | 0 | — | — | 31m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.84% | 99.84% | 2566 ms | ↑ 1.13x | 1 | 0s | 27d ago | 30m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.90% | 98.74% | 98.74% | 1186 ms | ↑ 1.31x | 15 | 43m | 10d ago | 13m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 791 ms | ↑ 1.26x | 0 | — | — | 28m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.98% | 97.98% | 1229 ms | ↑ 1.08x | 0 | — | — | 11m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 3175 ms | ↑ 1.12x | 2 | 0s | 21d ago | 29m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.04% | 98.04% | 956 ms | ↓ 0.48x | 0 | — | — | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 725 ms | ↑ 1.28x | 2 | 25m | 28d ago | 30m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.72% | 99.70% | 99.70% | 1518 ms | → 1.04x | 4 | 8m | 7d ago | 23m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 537 ms | ↓ 0.40x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.71% | 98.71% | 4584 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2748 ms | ↓ 0.80x | 0 | — | — | 28m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1910 ms | ↑ 1.36x | 0 | — | — | 9m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2635 ms | ↑ 1.08x | 0 | — | — | 23m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.49% | 98.49% | 3872 ms | ↓ 0.86x | 0 | — | — | 14m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1136 ms | → 1.05x | 0 | — | — | 28m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.83% | 99.45% | 99.45% | 2845 ms | → 1.00x | 3 | 0s | 16d ago | 23m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.61% | 99.85% | 99.85% | 166 ms | ↑ 1.20x | 5 | 12m | 19d ago | 28m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.80% | 99.80% | 1532 ms | ↑ 1.07x | 3 | 10m | 7d ago | 14m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.66% | 17.51% | 17.51% | 776 ms | → 1.00x | 6 | 0s | 24d ago | 28m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2161 ms | → 1.03x | 0 | — | — | 16m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.94% | 99.85% | 99.85% | 1912 ms | → 1.02x | 1 | 0s | 16d ago | 29m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.65% | 99.65% | 1758 ms | ↓ 0.89x | 0 | — | — | 11m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 424 ms | ↓ 0.93x | 0 | — | — | 8m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 669 ms | → 0.97x | 0 | — | — | 29m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 96.94% | 95.81% | 95.81% | 3147 ms | ↑ 1.21x | 4 | 4h 46m | 17d ago | 15m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.94% | 60.54% | 60.54% | 1613 ms | → 1.05x | 1 | 0s | 28d ago | 16m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2596 ms | ↑ 1.12x | 0 | — | — | 29m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.89% | 98.92% | 98.92% | 2106 ms | ↑ 1.48x | 2 | 0s | 16d ago | 10m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.21% | 79.81% | 79.81% | 2269 ms | ↑ 1.14x | 1 | 13h | 10d ago | 30m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 100.00% | 85.40% | 85.40% | 1145 ms | ↓ 0.83x | 0 | — | — | 9m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1109 ms | → 0.99x | 0 | — | — | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.78% | 99.66% | 99.66% | 1288 ms | ↑ 1.27x | 3 | 7m | 18d ago | 27m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 993 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1442 ms | ↑ 1.06x | 1 | 0s | 22d ago | 8m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 1067 ms | ↑ 1.20x | 1 | 0s | 16d ago | 11m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.41% | 98.41% | 1653 ms | ↑ 1.30x | 0 | — | — | 12m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.10% | 98.10% | 1501 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.36% | 69.36% | 1052 ms | ↑ 1.09x | 0 | — | — | 16m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1494 ms | ↑ 1.09x | 0 | — | — | 8m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 2002 ms | ↑ 1.18x | 0 | — | — | 28m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 2081 ms | ↓ 0.70x | 1 | 0s | 22d ago | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.72% | 92.39% | 92.39% | 1571 ms | ↑ 1.06x | 5 | 0s | 11d ago | 15m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 99.94% | 50.99% | 50.99% | 880 ms | ↑ 1.57x | 1 | 0s | 9d ago | 14m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.33% | 85.33% | 698 ms | ↑ 2.15x | 0 | — | — | 27m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.94% | 90.72% | 90.72% | 323 ms | → 0.98x | 1 | 0s | 29d ago | 14m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.29% | 99.29% | 2104 ms | → 1.03x | 0 | — | — | 16m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.03% | 67.03% | 1519 ms | ↑ 2.21x | 1 | 0s | 15d ago | 16m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.64% | 96.64% | 1632 ms | ↑ 1.14x | 0 | — | — | 16m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.89% | 99.84% | 99.84% | 1646 ms | ↑ 1.08x | 2 | 0s | 16d ago | 8m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 20.08% | 20.08% | 2690 ms | ↑ 1.38x | 1 | 0s | 9d ago | 23m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2602 ms | ↑ 1.09x | 0 | — | — | 29m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 96.47% | 97.03% | 97.03% | 566 ms | ↓ 0.48x | 1 | 1d | 15d ago | 9m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4004 ms | → 1.01x | 0 | — | — | 9m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 99.10% | 99.15% | 99.15% | 4035 ms | ↑ 1.15x | 8 | 23m | 10d ago | 26m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 57.75% | 57.75% | 721 ms | ↑ 1.16x | 0 | — | — | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.43% | 98.41% | 98.41% | 1731 ms | ↑ 1.24x | 1 | 4h 17m | 22d ago | 15m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 39.52% | 39.52% | 3079 ms | ↑ 1.20x | 1 | 0s | 21d ago | 16m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.83% | 99.22% | 99.22% | 3469 ms | ↑ 1.06x | 3 | 0s | 15d ago | 23m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 3107 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2299 ms | ↑ 1.17x | 1 | 30m | 21d ago | 15m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 93.41% | 91.66% | 91.66% | 2368 ms | → 0.98x | 6 | 7h 15m | 12d ago | 14m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.97% | 99.16% | 99.16% | 1601 ms | ↑ 1.54x | 11 | 17m | 8d ago | 9m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.24% | 99.24% | 2131 ms | ↑ 1.09x | 0 | — | — | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.49% | 98.68% | 98.68% | 2414 ms | ↑ 1.30x | 4 | 37m | 8d ago | 9m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.31% | 79.31% | 1646 ms | ↑ 1.11x | 0 | — | — | 16m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 190 ms | → 1.02x | 1 | 0s | 16d ago | 29m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2097 ms | ↑ 1.36x | 0 | — | — | 8m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2442 ms | ↑ 1.27x | 0 | — | — | 28m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2705 ms | ↑ 1.62x | 1 | 0s | 22d ago | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 2062 ms | ↑ 1.09x | 0 | — | — | 23m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.53% | 99.53% | 3488 ms | ↑ 1.08x | 1 | 0s | 24d ago | 29m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 79.70% | 79.70% | 2393 ms | ↑ 1.25x | 1 | 0s | 18d ago | 16m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.34% | 86.34% | 3062 ms | ↑ 1.32x | 0 | — | — | 16m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.92% | 99.92% | 1514 ms | ↑ 1.15x | 1 | 0s | 22d ago | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.09% | 96.09% | 2057 ms | ↑ 1.43x | 0 | — | — | 17m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1323 ms | ↑ 1.19x | 0 | — | — | 27m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.55% | 98.55% | 825 ms | ↑ 1.28x | 0 | — | — | 14m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 21.59% | 21.59% | 609 ms | ↑ 1.27x | 0 | — | — | 16m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 844 ms | ↑ 1.07x | 0 | — | — | 14m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.77% | 19.17% | 19.17% | 1310 ms | ↑ 1.20x | 4 | 0s | 16d ago | 17m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 60.93% | 60.93% | 2372 ms | ↑ 1.16x | 0 | — | — | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.81% | 99.81% | 2812 ms | ↑ 1.10x | 1 | 0s | 11d ago | 29m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 54.70% | 28.24% | 28.24% | 890 ms | ↓ 0.67x | 1 | 12d 23h | 30d ago | 29m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 95.40% | 92.24% | 92.24% | 30 ms | ↑ 1.11x | 1 | 1d 4h | 30d ago | 11m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.59% | 98.87% | 98.87% | 1337 ms | ↑ 1.27x | 2 | 6h 50m | 13d ago | 27m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 18.36% | 18.36% | 1575 ms | ↑ 1.36x | 0 | — | — | 27m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1971 ms | ↑ 1.42x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.50% | 99.50% | 1746 ms | ↑ 1.41x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3568 ms | ↑ 1.85x | 0 | — | — | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 628 ms | ↓ 0.60x | 0 | — | — | 9m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.33% | 99.44% | 99.44% | 3016 ms | ↑ 1.10x | 5 | 38m | 11d ago | 30m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.39% | 93.39% | 4635 ms | ↑ 1.13x | 0 | — | — | 29m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.72% | 99.53% | 99.53% | 1810 ms | ↓ 0.94x | 1 | 1h 20m | 14d ago | 28m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2124 ms | ↑ 1.10x | 1 | 0s | 8d ago | 15m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.20% | 99.20% | 997 ms | → 0.96x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.88% | 99.88% | 1772 ms | ↑ 1.08x | 1 | 0s | 22d ago | 9m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 41.16% | 41.16% | 1331 ms | ↑ 1.05x | 2 | 0s | 8d ago | 29m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.57% | 99.57% | 1556 ms | ↓ 0.93x | 1 | 0s | 24d ago | 30m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.46% | 99.46% | 1908 ms | ↑ 1.41x | 0 | — | — | 27m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 534 ms | ↑ 1.12x | 0 | — | — | 31m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.68% | 98.68% | 3036 ms | ↑ 1.20x | 0 | — | — | 11m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.69% | 96.69% | 3468 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 4144 ms | ↑ 1.32x | 0 | — | — | 8m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.94% | 99.56% | 99.56% | 3888 ms | ↑ 1.87x | 1 | 0s | 21d ago | 10m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.79% | 99.79% | 957 ms | ↑ 1.41x | 1 | 20m | 15d ago | 11m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.26% | 88.26% | 2099 ms | ↑ 1.29x | 0 | — | — | 15m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.82% | 99.82% | 1196 ms | ↑ 1.24x | 0 | — | — | 11m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1677 ms | → 0.99x | 0 | — | — | 10m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3376 ms | → 1.00x | 0 | — | — | 8m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 2089 ms | ↑ 1.12x | 0 | — | — | 29m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.49% | 99.49% | 1309 ms | ↑ 1.14x | 0 | — | — | 30m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1183 ms | ↑ 1.18x | 0 | — | — | 30m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 73.62% | 73.62% | 1101 ms | ↓ 0.95x | 1 | 0s | 22d ago | 14m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 3225 ms | ↑ 1.11x | 1 | 0s | 18d ago | 24m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 893 ms | ↑ 1.06x | 0 | — | — | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.41% | 84.41% | 2182 ms | ↑ 1.18x | 1 | 0s | 12d ago | 23m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.89% | 23.73% | 23.73% | 2163 ms | ↑ 1.17x | 2 | 0s | 10d ago | 31m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.01% | 98.01% | 2353 ms | ↑ 1.35x | 3 | 0s | 15d ago | 12m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.84% | 99.84% | 1706 ms | ↑ 2.47x | 2 | 30m | 10d ago | 9m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.79% | 98.79% | 844 ms | ↑ 1.18x | 0 | — | — | 16m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.71% | 98.71% | 1867 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.32% | 99.53% | 99.53% | 2557 ms | ↑ 1.20x | 3 | 1h 3m | 19d ago | 9m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.84% | 97.84% | 3808 ms | ↑ 1.32x | 1 | 0s | 24d ago | 13m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 1005 ms | ↑ 1.65x | 1 | 0s | 22d ago | 9m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1748 ms | → 1.00x | 0 | — | — | 8m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2326 ms | ↑ 1.13x | 0 | — | — | 8m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 28.86% | 28.86% | 1199 ms | ↑ 1.28x | 1 | 0s | 26d ago | 26m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1009 ms | ↑ 1.34x | 1 | 0s | 20d ago | 15m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.29% | 98.29% | 1988 ms | ↑ 1.26x | 0 | — | — | 15m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1588 ms | ↑ 1.22x | 0 | — | — | 27m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.30% | 88.30% | 3550 ms | ↑ 1.24x | 0 | — | — | 16m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.54% | 96.54% | 2765 ms | ↑ 1.32x | 0 | — | — | 17m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 18.35% | 18.35% | 1928 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 909 ms | ↓ 0.81x | 0 | — | — | 9m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.94% | 96.94% | 2370 ms | ↑ 1.39x | 0 | — | — | 12m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2271 ms | ↑ 1.11x | 1 | 0s | 18d ago | 27m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 20.23% | 20.23% | 3361 ms | ↑ 1.36x | 0 | — | — | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 18.16% | 18.16% | 1955 ms | ↑ 1.29x | 0 | — | — | 17m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.49% | 99.77% | 99.77% | 3844 ms | ↑ 1.31x | 5 | 24m | 10d ago | 13m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.75% | 99.75% | 2890 ms | ↑ 1.13x | 1 | 2h 18m | 21d ago | 14m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 2079 ms | ↑ 1.17x | 0 | — | — | 29m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2231 ms | → 1.00x | 0 | — | — | 8m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 96.97% | 99.65% | 99.65% | 2280 ms | → 1.02x | 6 | 2h 50m | 26d ago | 27m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1605 ms | ↓ 0.77x | 0 | — | — | 26m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 310 ms | → 1.00x | 0 | — | — | 8m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.54% | 98.54% | 1828 ms | ↑ 1.50x | 0 | — | — | 12m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 2026 ms | ↑ 1.08x | 1 | 0s | 10d ago | 23m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 3171 ms | ↑ 1.29x | 1 | 0s | 12d ago | 17m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.12% | 99.12% | 1782 ms | ↑ 1.16x | 1 | 0s | 10d ago | 29m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 789 ms | ↑ 1.58x | 0 | — | — | 27m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 518 ms | → 1.00x | 0 | — | — | 8m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.75% | 99.94% | 99.86% | 99.86% | 1643 ms | → 1.03x | 1 | 0s | 3d ago | 27m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.75% | 99.89% | 99.62% | 99.62% | 2221 ms | ↑ 1.21x | 2 | 0s | 4d ago | 28m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.75% | 99.94% | 41.12% | 41.12% | 878 ms | ↑ 1.09x | 1 | 0s | 3d ago | 30m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.75% | 99.89% | 89.09% | 89.09% | 1839 ms | ↑ 1.26x | 2 | 0s | 2h ago | 28m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.75% | 99.72% | 99.89% | 99.89% | 1051 ms | ↑ 1.21x | 3 | 17m | 3d ago | 28m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.75% | 99.94% | 99.03% | 99.03% | 3459 ms | ↑ 1.28x | 1 | 0s | 3d ago | 28m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.75% | 99.78% | 85.25% | 85.25% | 2165 ms | ↑ 1.08x | 4 | 0s | 4d ago | 29m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.83% | 61.60% | 61.60% | 2638 ms | → 0.99x | 3 | 0s | 4d ago | 29m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.75% | 98.60% | 68.24% | 68.24% | 4221 ms | → 0.98x | 20 | 5m | 14h ago | 24m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.75% | 99.72% | 79.04% | 79.04% | 2236 ms | ↑ 1.15x | 5 | 0s | 14h ago | 23m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.75% | 98.93% | 16.57% | 16.57% | 2633 ms | → 1.04x | 8 | 34m | 4d ago | 23m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.75% | 99.89% | 99.86% | 99.86% | 935 ms | ↓ 0.93x | 2 | 0s | 4d ago | 23m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.94% | 46.95% | 46.95% | 1959 ms | ↑ 1.35x | 1 | 0s | 4d ago | 17m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.91% | 18.23% | 18.23% | 2952 ms | ↓ 0.90x | 7 | 1h 40m | 3d ago | 17m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.89% | 99.33% | 99.33% | 2003 ms | ↑ 1.17x | 2 | 0s | 4d ago | 17m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.89% | 20.48% | 20.48% | 2604 ms | ↓ 0.84x | 2 | 0s | 4d ago | 17m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 97.90% | 98.63% | 98.63% | 1253 ms | → 0.99x | 6 | 1h 46m | 4d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.89% | 61.80% | 61.80% | 871 ms | → 1.00x | 2 | 0s | 2d ago | 16m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.75% | 99.83% | 93.64% | 93.64% | 814 ms | → 1.03x | 3 | 0s | 7d ago | 15m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.43% | 81.55% | 81.55% | 2278 ms | ↑ 1.20x | 3 | 50m | 2d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.75% | 99.83% | 99.84% | 99.84% | 1392 ms | ↑ 1.29x | 3 | 0s | 4d ago | 11m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.15% | 97.49% | 97.49% | 2133 ms | ↑ 1.26x | 10 | 12m | 7d ago | 14m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.83% | 99.08% | 99.08% | 1368 ms | → 1.05x | 3 | 0s | 1h ago | 15m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.89% | 97.85% | 97.85% | 3135 ms | → 1.04x | 2 | 0s | 3d ago | 14m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.75% | 74.30% | 88.79% | 88.79% | 1431 ms | ↑ 1.41x | 2 | 3d 18h | 6d ago | 12m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.75% | 99.89% | 42.53% | 42.53% | 196 ms | ↑ 1.11x | 2 | 0s | 3d ago | 14m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.75% | 99.49% | 96.31% | 96.31% | 1146 ms | ↑ 1.94x | 3 | 51m | 2d ago | 12m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.75% | 99.77% | 80.50% | 80.50% | 2734 ms | ↑ 1.33x | 2 | 26m | 3d ago | 16m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.75% | 99.83% | 98.33% | 98.33% | 1983 ms | ↑ 1.21x | 3 | 0s | 3d ago | 14m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.55% | 97.27% | 97.27% | 1868 ms | ↓ 0.82x | 5 | 16m | 16h ago | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 97.72% | 98.83% | 98.83% | 3049 ms | ↑ 1.09x | 3 | 4h 28m | 7d ago | 9m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.75% | 97.61% | 98.57% | 98.57% | 880 ms | ↑ 1.47x | 7 | 2h 8m | 3d ago | 10m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.80% | 99.80% | 99.80% | 529 ms | → 0.98x | 1 | 0s | 5d ago | 9m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.75% | 93.19% | 93.19% | 93.19% | 1584 ms | ↑ 1.22x | 55 | 20m | 4d ago | 8m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 75.28% | 82.55% | 82.55% | 2423 ms | ↓ 0.79x | 13 | 12h 55m | 5d ago | 9m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.75% | 98.37% | 98.37% | 98.37% | 1828 ms | ↑ 1.85x | 3 | 1h 47m | 22h ago | 8m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.75% | 99.94% | 99.96% | 99.96% | 1664 ms | ↑ 1.09x | 1 | 0s | 1d ago | 8m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.89% | 99.93% | 99.93% | 1594 ms | ↑ 1.38x | 2 | 0s | 4d ago | 8m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 99.77% | 98.95% | 98.95% | 1892 ms | ↑ 1.58x | 4 | 0s | 6d ago | 10m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.80% | 99.80% | 99.80% | 1620 ms | → 0.99x | 1 | 0s | 15h ago | 10m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.87% | 99.92% | 99.92% | 2655 ms | ↑ 1.97x | 2 | 0s | 7d ago | 9m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.94% | 99.92% | 99.92% | 1928 ms | ↑ 1.90x | 1 | 0s | 3h ago | 8m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.75% | 99.93% | 97.40% | 97.40% | 1797 ms | ↑ 1.62x | 1 | 0s | 7d ago | 10m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.75% | 99.80% | 99.80% | 99.80% | 2241 ms | → 1.01x | 1 | 0s | 3d ago | 10m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.75% | 95.90% | 95.90% | 95.90% | 1358 ms | ↓ 0.84x | 2 | 6h 36m | 4d ago | 8m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.51% | 99.83% | 98.86% | 98.86% | 1106 ms | ↑ 1.26x | 2 | 15m | 4d ago | 26m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.51% | 99.83% | 54.45% | 54.45% | 1576 ms | ↑ 1.23x | 3 | 0s | 11h ago | 24m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.51% | 96.15% | 80.15% | 80.15% | 150 ms | ↑ 1.10x | 4 | 7h 8m | 9h ago | 30m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.83% | 18.35% | 18.35% | 2121 ms | → 1.04x | 3 | 0s | 24h ago | 28m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.51% | 99.72% | 98.85% | 98.85% | 2894 ms | ↑ 1.13x | 5 | 0s | 7d ago | 30m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.51% | 99.83% | 99.92% | 99.92% | 771 ms | → 1.04x | 2 | 10m | 3d ago | 28m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.51% | 99.49% | 47.28% | 47.28% | 2394 ms | ↑ 1.08x | 7 | 7m | 1d ago | 24m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.50% | 99.77% | 20.98% | 20.98% | 1289 ms | ↑ 1.12x | 4 | 0s | 3d ago | 17m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.50% | 99.83% | 99.86% | 99.86% | 1703 ms | ↑ 1.50x | 2 | 10m | 4d ago | 11m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.50% | 99.83% | 81.84% | 81.84% | 2055 ms | ↑ 1.29x | 3 | 0s | 4d ago | 16m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.50% | 99.83% | 90.16% | 90.16% | 900 ms | → 1.00x | 3 | 0s | 2d ago | 15m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.50% | 99.26% | 98.59% | 98.59% | 865 ms | ↑ 1.39x | 6 | 23m | 3d ago | 14m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.49% | 99.61% | 93.04% | 93.04% | 3853 ms | ↑ 1.07x | 2 | 0s | 18h ago | 10m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.49% | 99.66% | 99.07% | 99.07% | 3571 ms | ↑ 2.00x | 3 | 29m | 18h ago | 10m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.49% | 99.54% | 99.52% | 99.52% | 2549 ms | ↓ 0.92x | 8 | 0s | 1h ago | 9m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 99.49% | 99.89% | 99.36% | 99.36% | 3010 ms | ↑ 2.22x | 2 | 0s | 18h ago | 10m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.39% | 99.39% | 99.39% | 99.39% | 817 ms | → 1.00x | 1 | 0s | 1d ago | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.26% | 99.83% | 92.30% | 92.30% | 2798 ms | ↑ 1.44x | 1 | 50m | 2d ago | 31m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.26% | 99.66% | 95.98% | 95.98% | 3160 ms | ↑ 1.10x | 6 | 0s | 16h ago | 30m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.26% | 99.78% | 92.13% | 92.13% | 4167 ms | ↑ 1.20x | 2 | 25m | 2d ago | 31m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.25% | 99.77% | 20.01% | 20.01% | 2673 ms | ↑ 1.37x | 4 | 0s | 3d ago | 17m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.24% | 99.09% | 91.07% | 91.07% | 3174 ms | → 0.95x | 16 | 0s | 4d ago | 14m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.24% | 99.77% | 99.77% | 99.77% | 813 ms | ↑ 1.09x | 4 | 0s | 2d ago | 9m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 99.24% | 99.83% | 94.54% | 94.54% | 4293 ms | ↑ 1.80x | 3 | 0s | 18h ago | 10m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 99.24% | 96.98% | 97.93% | 97.93% | 1491 ms | ↑ 2.29x | 6 | 2h 60m | 1d ago | 8m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 99.24% | 99.83% | 97.42% | 97.42% | 3567 ms | ↑ 1.90x | 3 | 0s | 18h ago | 10m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.01% | 83.72% | 37.13% | 37.13% | 2895 ms | → 1.01x | 79 | 59m | 1h ago | 29m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.01% | 98.88% | 17.82% | 17.82% | 3623 ms | → 1.03x | 20 | 0s | 3d ago | 23m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (67)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.99% | 99.66% | 67.38% | 67.38% | 1076 ms | ↑ 1.13x | 4 | 15m | 5d ago | 16m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.99% | 98.64% | 91.61% | 91.61% | 940 ms | → 0.98x | 9 | 37m | 3d ago | 11m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.99% | 99.60% | 99.57% | 99.57% | 1448 ms | ↑ 1.40x | 5 | 12m | 2d ago | 10m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.99% | 83.92% | 83.92% | 83.92% | 4681 ms | → 1.01x | 5 | 7h 12m | 2d ago | 8m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.77% | 99.22% | 99.24% | 99.24% | 1896 ms | ↑ 1.37x | 4 | 52m | 3d ago | 29m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.76% | 98.37% | 98.91% | 98.91% | 2360 ms | ↑ 1.23x | 21 | 11m | 17h ago | 23m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.74% | 99.15% | 98.47% | 98.47% | 3370 ms | ↑ 1.06x | 4 | 1h 2m | 4d ago | 10m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 98.74% | 99.02% | 99.02% | 99.02% | 1284 ms | → 1.04x | 2 | 45m | 21h ago | 9m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.74% | 99.51% | 99.51% | 99.51% | 2006 ms | → 0.97x | 3 | 20m | 4d ago | 8m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.52% | 98.38% | 85.74% | 85.74% | 3555 ms | ↑ 1.19x | 29 | 0s | 10h ago | 31m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.52% | 98.72% | 98.26% | 98.26% | 4539 ms | → 1.00x | 23 | 0s | 1d ago | 31m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.50% | 99.60% | 56.91% | 56.91% | 2769 ms | ↓ 0.70x | 3 | 40m | 3d ago | 17m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.50% | 99.60% | 20.14% | 20.14% | 1781 ms | → 1.01x | 3 | 40m | 5d ago | 17m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.49% | 99.60% | 98.90% | 98.90% | 3022 ms | ↑ 1.15x | 4 | 22m | 5d ago | 15m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.49% | 99.60% | 98.82% | 98.82% | 2020 ms | ↑ 1.21x | 4 | 15m | 2d ago | 15m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.49% | 99.32% | 96.47% | 96.47% | 1760 ms | ↑ 1.15x | 5 | 38m | 14h ago | 11m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.48% | 98.06% | 95.78% | 95.78% | 2036 ms | ↑ 1.45x | 11 | 49m | 18h ago | 10m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.48% | 99.49% | 99.65% | 99.65% | 2768 ms | ↑ 1.33x | 5 | 24m | 2d ago | 9m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.48% | 98.52% | 98.63% | 98.63% | 2918 ms | ↑ 1.39x | 24 | 2m | 16h ago | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.48% | 99.49% | 99.65% | 99.65% | 3318 ms | ↑ 1.09x | 5 | 24m | 5d ago | 9m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.26% | 99.10% | 99.65% | 99.65% | 2855 ms | → 0.97x | 10 | 15m | 14h ago | 23m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.25% | 99.55% | 51.96% | 51.96% | 1057 ms | → 0.97x | 4 | 30m | 3d ago | 17m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.24% | 99.49% | 47.89% | 47.89% | 3560 ms | ↑ 1.97x | 8 | 3m | 1d ago | 13m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.20% | 98.20% | 98.20% | 98.20% | 4520 ms | → 1.00x | 3 | 0s | 1h ago | 8m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 97.98% | 99.32% | 99.32% | 99.32% | 1736 ms | ↑ 1.09x | 3 | 47m | 2d ago | 8m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.98% | 98.43% | 85.38% | 85.38% | 3584 ms | ↑ 1.08x | 2 | 1h 6m | 1d ago | 10m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.73% | 98.58% | 66.10% | 66.10% | 4658 ms | → 1.00x | 22 | 4m | 2d ago | 16m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.73% | 99.21% | 91.08% | 91.08% | 1587 ms | ↑ 1.06x | 13 | 2m | 14h ago | 15m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.73% | 98.52% | 98.98% | 98.98% | 889 ms | → 1.00x | 26 | 0s | 9h ago | 9m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.52% | 97.75% | 98.58% | 98.58% | 4048 ms | → 1.04x | 39 | 46s | 54m ago | 23m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.49% | 98.59% | 86.10% | 86.10% | 4490 ms | → 0.99x | 24 | 1m | 16h ago | 17m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.48% | 97.33% | 97.70% | 97.70% | 4110 ms | ↑ 1.43x | 23 | 29m | 3h ago | 13m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 97.47% | 99.43% | 99.57% | 99.57% | 1656 ms | ↑ 1.63x | 1 | 2h 60m | 5d ago | 10m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.29% | 96.13% | 30.01% | 30.01% | 1930 ms | ↑ 1.12x | 12 | 1h 52m | 4d ago | 26m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 97.22% | 98.80% | 96.70% | 96.70% | 1950 ms | ↑ 1.71x | 16 | 9m | 3d ago | 10m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 96.95% | 96.95% | 96.95% | 96.95% | 3596 ms | → 1.00x | 1 | 1h 58m | 2d ago | 8m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 96.55% | 96.92% | 17.77% | 17.77% | 1917 ms | ↓ 0.93x | 53 | 45s | 6h ago | 24m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 95.80% | 98.26% | 96.50% | 96.50% | 1577 ms | ↑ 1.17x | 8 | 1h 1m | 1d ago | 24m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 95.72% | 92.27% | 84.08% | 84.08% | 1952 ms | ↑ 1.22x | 9 | 6h 19m | 4d ago | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.72% | 96.31% | 83.08% | 83.08% | 4578 ms | → 0.99x | 55 | 5m | 46m ago | 14m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 95.71% | 21.60% | 39.09% | 39.09% | 717 ms | → 1.00x | 3 | 7d 18h | 11h ago | 9m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 95.71% | 98.29% | 98.79% | 98.79% | 1717 ms | ↑ 1.42x | 6 | 1h 26m | 1d ago | 9m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 95.47% | 21.50% | 66.75% | 66.75% | 693 ms | → 1.00x | 4 | 5d 20h | 9h ago | 16m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 95.20% | 98.12% | 97.99% | 97.99% | 1957 ms | ↑ 1.15x | 10 | 53m | 2h ago | 9m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.96% | 96.03% | 82.20% | 82.20% | 4827 ms | → 1.03x | 66 | 1m | 1h ago | 15m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.70% | 95.88% | 95.88% | 95.88% | 1069 ms | → 1.00x | 2 | 4h 33m | 2d ago | 8m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 94.49% | 98.36% | 96.60% | 96.60% | 4499 ms | ↑ 1.15x | 11 | 47m | 3d ago | 17m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.46% | 97.50% | 85.55% | 85.55% | 4700 ms | → 1.01x | 33 | 9m | 1d ago | 14m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.95% | 98.58% | 96.67% | 96.67% | 1751 ms | ↑ 1.08x | 2 | 4h 23m | 3d ago | 11m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 93.70% | 93.76% | 72.03% | 72.03% | 1900 ms | ↑ 1.17x | 18 | 1h 46m | 7h ago | 16m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.18% | 96.48% | 95.99% | 95.99% | 2114 ms | ↓ 0.68x | 9 | 2h 43m | 1d ago | 11m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 89.14% | 95.17% | 16.50% | 16.50% | 3108 ms | ↑ 1.17x | 76 | 3m | 9h ago | 24m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 88.92% | 89.88% | 55.43% | 55.43% | 3995 ms | → 1.03x | 147 | 6m | 2h ago | 12m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.16% | 82.94% | 81.16% | 81.16% | 4559 ms | ↓ 0.78x | 37 | 3h 7m | 1d ago | 12m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 87.41% | 94.88% | 81.20% | 81.20% | 1900 ms | ↑ 2.09x | 4 | 8h 51m | 4d ago | 11m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 86.22% | 19.47% | 31.01% | 31.01% | 1955 ms | → 1.00x | 1 | 23d 23h | 30d ago | 17m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 85.47% | 84.72% | 97.87% | 97.87% | 1604 ms | ↑ 1.17x | 128 | 28m | 3d ago | 28m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 81.57% | 90.32% | 93.66% | 93.66% | 3880 ms | ↑ 1.15x | 39 | 1h 17m | 11h ago | 9m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 80.20% | 88.68% | 34.71% | 34.71% | 2079 ms | ↑ 1.08x | 3 | 1d 1h | 4d ago | 16m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 71.43% | 66.27% | 62.32% | 62.32% | 4821 ms | → 0.99x | 335 | 21m | 55m ago | 24m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 69.19% | 68.74% | 77.04% | 77.04% | 1599 ms | ↑ 1.31x | 3 | 3d 5h | 15d ago | 10m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 68.09% | 45.55% | 46.42% | 46.42% | 569 ms | ↑ 1.21x | 2 | 8d 9h | 21d ago | 16m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 56.06% | 82.21% | 82.21% | 82.21% | 4232 ms | ↑ 1.12x | 5 | 15h 33m | 1d ago | 8m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 55.67% | 88.75% | 97.75% | 97.75% | 4533 ms | ↑ 1.32x | 89 | 34m | 2h ago | 28m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 54.04% | 21.29% | 17.22% | 17.22% | 4087 ms | ↑ 1.21x | 191 | 2h 33m | 2h ago | 8m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 53.90% | 12.17% | 14.40% | 14.40% | 3340 ms | → 1.00x | 2 | 13d 2h | 4d ago | 11m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 49.24% | 81.85% | 81.85% | 81.85% | 4395 ms | ↓ 0.94x | 43 | 1h 40m | 4h ago | 8m ago |

</details>

<details open>
<summary><strong>🔴 Down (251)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 98.24% | 97.67% | 98.29% | 98.29% | 3579 ms | ↑ 1.39x | 16 | 45m | 3h ago | 13m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.54% | 98.26% | 85.56% | 85.56% | 4298 ms | → 0.97x | 29 | 2m | 26m ago | 26m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 97.22% | 99.32% | 97.13% | 97.13% | 3766 ms | ↑ 3.00x | 11 | 2m | 10m ago | 10m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.04% | 97.53% | 74.15% | 74.15% | 4527 ms | → 1.03x | 36 | 6m | 23m ago | 23m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 95.12% | 95.12% | 69.23% | 69.23% | 4228 ms | → 1.00x | 7 | 5m | 10m ago | 10m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 86.70% | 96.98% | 99.43% | 99.43% | 1682 ms | ↓ 0.95x | 2 | 10h 25m | 21h ago | 29m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 84.96% | 88.96% | 18.96% | 18.96% | 4492 ms | ↓ 0.95x | 151 | 8m | 17m ago | 17m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 69.02% | 69.92% | 22.57% | 22.57% | 4657 ms | → 0.99x | 308 | 19m | 48m ago | 15m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 68.77% | 82.60% | 95.14% | 95.14% | 462 ms | ↓ 0.19x | 3 | 1d 18h | 2d ago | 13m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 67.34% | 38.02% | 32.19% | 32.19% | 1047 ms | ↑ 1.37x | 4 | 4d 14h | 2d ago | 16m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 56.82% | 66.40% | 66.40% | 66.40% | 339 ms | → 0.99x | 1 | 3d 1h | 3d ago | 9m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 55.67% | 89.94% | 96.61% | 96.61% | 1262 ms | ↑ 1.50x | 2 | 1d 13h | 3d ago | 11m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 42.42% | 74.03% | 74.03% | 74.03% | 2020 ms | ↑ 1.08x | 1 | 4d 1h | 4d ago | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 41.81% | 86.70% | 86.55% | 86.55% | 331 ms | ↑ 1.11x | 4 | 1d 1h | 4d ago | 11m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 39.90% | 53.05% | 53.05% | 53.05% | 4664 ms | → 1.00x | 3 | 1d 10h | 4d ago | 10m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 28.08% | 63.15% | 51.78% | 51.78% | 3563 ms | ↑ 1.11x | 7 | 1d 13h | 5d ago | 24m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.23% | 1.45% | 59.47% | 59.47% | 3144 ms | ↑ 1.20x | 26 | 1d 3h | 1d ago | 31m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 80.96% | 80.96% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 67.05% | 67.05% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 72.12% | 72.12% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 18.99% | 50.40% | 50.40% | — | — | 6 | 4d 3h | 25d ago | 9m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 7.38% | 79.98% | 79.98% | — | — | 5 | 5d 14h | 28d ago | 14m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 60.34% | 60.34% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.53% | 5.53% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.25% | 12.25% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 56.88% | 56.88% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.32% | 3.32% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 68.01% | 68.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 81.20% | 81.20% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.64% | 35.64% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.67% | 90.68% | 90.68% | — | — | 1 | 29d 20h | 30d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.10% | 23.10% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 72.87% | 72.87% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 50.26% | 50.26% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.20% | 29.20% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 72.04% | 89.91% | 89.91% | — | — | 7 | 1d 5h | 9d ago | 29m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 81.59% | 81.59% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 61.45% | 61.45% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 75.37% | 75.37% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 21h | 3d ago | 30m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.68% | 14.68% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 48.63% | 48.63% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 38.31% | 92.58% | 92.58% | — | — | 6 | 3d 4h | 19d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 33.47% | 33.47% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 10.92% | 81.95% | 81.95% | — | — | 2 | 13d 11h | 27d ago | 17m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 72.35% | 92.15% | 92.15% | — | — | 1 | 8d 15h | 9d ago | 13m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.39% | 3.39% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 81.80% | 81.80% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 9.36% | 35.69% | 35.69% | — | — | 1 | 27d 13h | 28d ago | 8m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.78% | 50.78% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.01% | 2.01% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 15.52% | 89.60% | 89.60% | — | — | 1 | 25d 18h | 26d ago | 26m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 25.31% | 76.61% | 76.61% | — | — | 2 | 11d 9h | 22d ago | 13m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 75.24% | 75.24% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 30.77% | 30.77% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 53.43% | 53.43% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 31.00% | 52.90% | 52.90% | — | — | 1 | 21d 6h | 21d ago | 12m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.92% | 23.92% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 63.90% | 81.94% | 81.94% | — | — | 10 | 1d 3h | 11d ago | 31m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 63.54% | 40.95% | 40.95% | — | — | 3 | 3d 19h | 11d ago | 24m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 4h | 9d ago | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 65.53% | 68.11% | 68.11% | — | — | 1 | 10d 20h | 11d ago | 11m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 55.98% | 55.98% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 8.17% | 23.79% | 23.79% | — | — | 1 | 27d 21h | 28d ago | 15m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.24% | 5.24% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 64.42% | 64.42% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 81.53% | 81.53% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.55% | 6.55% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 77.87% | 77.87% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 80.33% | 80.33% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 10.85% | 32.25% | 32.25% | — | — | 1 | 27d 3h | 27d ago | 14m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 72.93% | 93.84% | 93.84% | — | — | 2 | 4d 4h | 8d ago | 15m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 26.55% | 26.55% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 26.85% | 24.41% | 24.41% | — | — | 3 | 7d 10h | 20d ago | 12m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.79% | 51.79% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 53.30% | 53.30% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 8.65% | 8.65% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 65.39% | 65.39% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 75.04% | 75.04% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.75% | 45.75% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.57% | 41.57% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.91% | 29.91% | 29.91% | — | — | 1 | 29d 18h | 30d ago | 8m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 81.54% | 81.54% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 57.60% | 57.60% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.26% | 38.26% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 56.39% | 75.49% | 75.49% | — | — | 2 | 6d 19h | 14d ago | 14m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 7.33% | 79.96% | 79.96% | — | — | 5 | 5d 14h | 28d ago | 14m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 40.88% | 76.89% | 76.89% | — | — | 4 | 4d 13h | 18d ago | 12m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.57% | 30.57% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.50% | 2.50% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 81.76% | 81.76% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.90% | 40.90% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 55.96% | 95.88% | 95.88% | — | — | 1 | 13d 17h | 14d ago | 23m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 81.52% | 81.52% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.27% | 32.27% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 81.44% | 81.44% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 52.72% | 52.72% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 0.00% | 76.61% | 83.96% | 83.96% | — | — | 4 | 1d 19h | 7d ago | 8m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 22.82% | 22.82% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 43.67% | 43.67% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 79.14% | 79.14% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 64.68% | 64.68% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 29.28% | 29.28% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 3h | 9d ago | 9m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 77.65% | 77.65% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 3h | 9d ago | 10m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 50.24% | 50.24% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.14% | 3.14% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 3h | 9d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.48% | 42.48% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 76.08% | 76.08% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 46.55% | 40.98% | 40.98% | — | — | 6 | 2d 18h | 16d ago | 26m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 58.04% | 58.04% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 43.81% | 43.81% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 62.00% | 62.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 87.44% | 87.44% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.84% | 27.84% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.12% | 12.12% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 24.33% | 24.33% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.71% | 23.71% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 21.90% | 52.11% | 52.11% | — | — | 1 | 23d 23h | 24d ago | 26m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 25.47% | 92.59% | 92.59% | — | — | 10 | 2d 6h | 22d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 55.23% | 55.23% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 42.83% | 76.93% | 76.93% | — | — | 1 | 17d 16h | 18d ago | 13m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 10.13% | 10.13% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.19% | 17.19% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.71% | 48.71% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 77.40% | 52.47% | 52.47% | — | — | 2 | 3d 12h | 7d ago | 14m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 24.41% | 24.41% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 94.18% | 94.18% | — | — | 1 | 2d 21h | 3d ago | 23m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 38.57% | 38.57% | — | — | 1 | 9d 3h | 9d ago | 16m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 22.53% | 22.53% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 34.77% | 34.77% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 47.78% | 47.78% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.46% | 5.46% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 27.81% | 80.20% | 80.20% | — | — | 2 | 11d 3h | 22d ago | 15m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 88.85% | 88.85% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 47.80% | 66.31% | 66.31% | — | — | 1 | 16d 5h | 16d ago | 8m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 81.63% | 81.63% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 80.57% | 80.57% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 62.83% | 62.83% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 73.78% | 73.78% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 80.43% | 80.43% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 23h | 3d ago | 9m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.23% | 19.23% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 26.07% | 58.83% | 58.83% | — | — | 1 | 22d 19h | 23d ago | 30m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 28.67% | 41.90% | 41.90% | — | — | 5 | 4d 9h | 22d ago | 13m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.22% | 4.01% | 4.01% | — | — | 2 | 14d 23h | 24d ago | 24m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.64% | 67.50% | 67.50% | — | — | 4 | 7d 5h | 22d ago | 28m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.69% | 25.20% | 25.20% | — | — | 27 | 22h 39m | 20d ago | 14m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.40% | 7.40% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 64.62% | 64.62% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 4.95% | 32.89% | 32.89% | — | — | 2 | 14d 8h | 29d ago | 9m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 66.53% | 66.53% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 40.41% | 40.41% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.44% | 5.44% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 21h | 3d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 29.44% | 57.79% | 57.79% | — | — | 1 | 21d 17h | 22d ago | 10m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 5.07% | 50.61% | 50.61% | — | — | 2 | 14d 8h | 29d ago | 10m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 35.98% | 35.98% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 22.22% | 22.22% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 47.09% | 5.39% | 5.39% | — | — | 3 | 5d 11h | 16d ago | 27m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.83% | 11.83% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 0.00% | 67.69% | 89.16% | 89.16% | — | — | 1 | 10d 4h | 10d ago | 27m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.68% | 17.68% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 17.66% | 17.66% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 33.93% | 33.93% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 5.50% | 9.88% | 9.88% | — | — | 51 | 13h | 27d ago | 16m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 9.35% | 9.35% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.90% | 0.90% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.10% | 5.10% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.96% | 5.96% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 49.13% | 49.13% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 48.28% | 48.28% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 81.60% | 81.60% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 26.17% | 26.17% | 26.17% | — | — | 1 | 11d 13h | 12d ago | 8m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 20.59% | 74.49% | 74.49% | — | — | 1 | 24d 11h | 24d ago | 12m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 46.62% | 46.62% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 81.79% | 81.79% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 54.38% | 54.38% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.74% | 40.74% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.95% | 1.95% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 4.14% | 19.31% | 19.31% | — | — | 1 | 28d 22h | 29d ago | 16m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 3h | 9d ago | 9m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 79.56% | 79.56% | — | — | 1 | 29d 23h | 30d ago | 22m ago |

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
