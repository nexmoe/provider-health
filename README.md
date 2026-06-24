# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**670 providers** — 352 🟢 operational · 60 🟡 degraded · 258 🔴 down · 0 ⚫ unknown

_Updated 2026-06-24 06:52 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (352)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.30% | 98.30% | 787 ms | ↑ 1.18x | 1 | 0s | 27d ago | 5m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1598 ms | ↓ 0.93x | 0 | — | — | 2m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 94.00% | 94.00% | 2456 ms | ↑ 1.66x | 3 | 0s | 18d ago | 10m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 22.53% | 22.53% | 3266 ms | ↑ 1.47x | 4 | 0s | 14d ago | 11m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.50% | 97.50% | 4019 ms | ↑ 1.24x | 0 | — | — | 19m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 57.63% | 57.63% | 1662 ms | → 0.96x | 0 | — | — | 8m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.91% | 99.91% | 99.91% | 1181 ms | → 0.96x | 1 | 0s | 18d ago | 2m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.90% | 97.90% | 4317 ms | ↑ 1.24x | 1 | 0s | 27d ago | 15m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.84% | 98.84% | 2286 ms | ↑ 1.16x | 0 | — | — | 21m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.53% | 99.53% | 3688 ms | ↑ 1.10x | 0 | — | — | 21m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.36% | 99.36% | 281 ms | ↓ 0.30x | 0 | — | — | 4m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.49% | 95.49% | 2924 ms | ↑ 1.23x | 0 | — | — | 6m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2253 ms | ↑ 1.44x | 0 | — | — | 3m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.84% | 97.84% | 3482 ms | ↑ 1.33x | 0 | — | — | 6m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.55% | 92.55% | 3542 ms | ↑ 1.48x | 1 | 50m | 13d ago | 22m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1239 ms | ↑ 1.25x | 0 | — | — | 1m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.71% | 98.71% | 1504 ms | ↑ 1.17x | 0 | — | — | 6m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 99.42% | 96.58% | 96.58% | 2002 ms | ↑ 1.14x | 10 | 0s | 11d ago | 4m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.96% | 98.96% | 507 ms | ↓ 0.43x | 0 | — | — | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 38.63% | 38.63% | 905 ms | ↑ 1.45x | 0 | — | — | 15m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1606 ms | ↑ 1.18x | 0 | — | — | 1m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.82% | 99.87% | 99.87% | 1393 ms | ↑ 1.32x | 2 | 10m | 15d ago | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 97.07% | 97.07% | 3006 ms | ↑ 1.24x | 1 | 0s | 29d ago | 9m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.89% | 98.89% | 1135 ms | ↑ 1.17x | 2 | 15m | 15d ago | 17m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 68.75% | 66.98% | 66.98% | 2129 ms | ↑ 1.59x | 2 | 4d 14h | 8d ago | 6m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1443 ms | ↑ 1.53x | 0 | — | — | 2m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 88.00% | 88.00% | 2095 ms | ↑ 1.65x | 1 | 3h 51m | 26d ago | 7m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.59% | 99.72% | 99.72% | 1838 ms | ↓ 0.85x | 3 | 39m | 13d ago | 3m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.45% | 98.45% | 4372 ms | ↑ 1.34x | 0 | — | — | 7m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.32% | 98.32% | 516 ms | ↑ 1.47x | 0 | — | — | 5m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.62% | 99.62% | 1389 ms | ↑ 1.19x | 4 | 14m | 9d ago | 4m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.51% | 86.51% | 2509 ms | ↑ 1.58x | 0 | — | — | 6m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1120 ms | → 1.05x | 1 | 0s | 11d ago | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.79% | 97.79% | 1446 ms | → 1.05x | 0 | — | — | 8m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.93% | 97.93% | 4184 ms | ↑ 1.08x | 1 | 0s | 30d ago | 19m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.48% | 96.48% | 887 ms | → 0.99x | 0 | — | — | 8m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.06% | 85.97% | 85.97% | 1614 ms | ↓ 0.91x | 9 | 6h 19m | 15d ago | 5m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1119 ms | → 0.99x | 0 | — | — | 1m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2129 ms | ↑ 1.19x | 0 | — | — | 2m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.72% | 99.72% | 99.72% | 1627 ms | → 1.01x | 2 | 0s | 9d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1175 ms | → 1.03x | 2 | 0s | 15d ago | 5m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.84% | 99.84% | 398 ms | ↓ 0.38x | 1 | 51m | 24d ago | 2m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 4377 ms | ↑ 1.23x | 0 | — | — | 15m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.72% | 99.72% | 803 ms | ↓ 0.87x | 1 | 0s | 23d ago | 6m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1279 ms | ↑ 1.14x | 0 | — | — | 1m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.02% | 97.96% | 97.96% | 3134 ms | ↓ 0.59x | 13 | 48m | 21d ago | 7m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.78% | 99.78% | 99.78% | 2086 ms | ↑ 1.09x | 1 | 30m | 11d ago | 1m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1124 ms | ↓ 0.73x | 0 | — | — | 3m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 460 ms | ↓ 0.56x | 0 | — | — | 3m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.81% | 99.81% | 596 ms | → 0.98x | 4 | 0s | 13d ago | 3m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.84% | 96.84% | 560 ms | ↓ 0.88x | 0 | — | — | 9m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.07% | 98.27% | 98.27% | 2083 ms | ↑ 1.05x | 1 | 21h 30m | 20d ago | 2m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1132 ms | → 0.97x | 0 | — | — | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.82% | 55.82% | 2000 ms | ↑ 1.33x | 0 | — | — | 11m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.16% | 98.16% | 98.16% | 939 ms | → 1.02x | 2 | 4h 33m | 13d ago | 2m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1732 ms | ↑ 1.46x | 0 | — | — | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3561 ms | → 0.97x | 0 | — | — | 15m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.21% | 97.21% | 1067 ms | ↓ 0.74x | 0 | — | — | 15m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.89% | 98.94% | 98.94% | 1220 ms | ↓ 0.86x | 3 | 1h 47m | 12d ago | 2m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.14% | 99.14% | 1205 ms | ↓ 0.88x | 2 | 0s | 11d ago | 9m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.93% | 83.93% | 3597 ms | ↑ 1.41x | 0 | — | — | 10m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 613 ms | ↓ 0.55x | 0 | — | — | 3m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.77% | 98.77% | 2801 ms | ↑ 1.26x | 0 | — | — | 7m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4504 ms | ↑ 1.30x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 93.06% | 93.06% | 718 ms | ↓ 0.86x | 1 | 0s | 30d ago | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.73% | 98.73% | 1214 ms | ↑ 1.17x | 0 | — | — | 6m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 602 ms | ↑ 1.40x | 1 | 0s | 21d ago | 8m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.44% | 99.44% | 746 ms | ↓ 0.59x | 0 | — | — | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 98.03% | 98.03% | 1786 ms | ↓ 0.47x | 2 | 0s | 14d ago | 8m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.00% | 90.00% | 1406 ms | ↑ 1.31x | 1 | 0s | 17d ago | 6m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2308 ms | → 1.05x | 0 | — | — | 2m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.11% | 77.11% | 1325 ms | ↑ 1.29x | 0 | — | — | 10m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 923 ms | → 0.96x | 0 | — | — | 2m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.28% | 98.28% | 2567 ms | ↑ 1.17x | 0 | — | — | 8m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 917 ms | → 0.96x | 0 | — | — | 1m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2615 ms | ↑ 1.53x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.79% | 82.79% | 2529 ms | ↑ 1.36x | 2 | 0s | 15d ago | 10m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.07% | 98.07% | 3277 ms | ↑ 2.17x | 0 | — | — | 11m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.87% | 99.87% | 2198 ms | ↑ 1.18x | 0 | — | — | 3m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.28% | 99.32% | 99.32% | 4199 ms | ↑ 1.24x | 10 | 2h 52m | 9d ago | 15m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.46% | 61.46% | 1363 ms | ↓ 0.80x | 0 | — | — | 11m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.48% | 64.48% | 1951 ms | ↑ 1.22x | 0 | — | — | 11m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.77% | 99.87% | 99.87% | 1161 ms | ↓ 0.75x | 1 | 1h 9m | 8d ago | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.24% | 99.24% | 2016 ms | ↑ 1.16x | 0 | — | — | 10m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 937 ms | ↓ 0.51x | 0 | — | — | 8m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.59% | 99.59% | 583 ms | ↓ 0.82x | 1 | 0s | 25d ago | 10m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.97% | 97.92% | 97.92% | 1856 ms | ↓ 0.95x | 2 | 6h 16m | 9d ago | 10m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 88.87% | 88.87% | 88.87% | 2808 ms | ↓ 0.94x | 5 | 15h 33m | 12d ago | 1m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2553 ms | ↑ 1.12x | 0 | — | — | 19m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2797 ms | ↑ 1.36x | 0 | — | — | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.06% | 99.06% | 3983 ms | ↑ 1.08x | 1 | 29m | 30d ago | 19m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.20% | 98.20% | 3837 ms | ↑ 1.17x | 0 | — | — | 21m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.31% | 76.31% | 3015 ms | ↑ 1.23x | 0 | — | — | 8m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1008 ms | → 0.97x | 0 | — | — | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1488 ms | → 1.04x | 0 | — | — | 1m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.47% | 98.15% | 98.15% | 1582 ms | ↑ 1.87x | 7 | 8m | 10d ago | 2m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.65% | 99.65% | 1542 ms | ↑ 1.20x | 1 | 2h 60m | 16d ago | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1794 ms | ↑ 1.23x | 0 | — | — | 21m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.73% | 99.73% | 634 ms | ↓ 0.40x | 1 | 0s | 28d ago | 20m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2570 ms | ↑ 1.23x | 1 | 0s | 15d ago | 19m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.88% | 89.88% | 1672 ms | → 0.97x | 0 | — | — | 10m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.81% | 99.81% | 1014 ms | ↑ 1.21x | 1 | 0s | 27d ago | 20m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 620 ms | ↑ 1.15x | 0 | — | — | 3m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1929 ms | ↑ 1.58x | 2 | 0s | 9d ago | 2m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.64% | 85.64% | 2904 ms | ↑ 1.27x | 0 | — | — | 6m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2190 ms | ↑ 1.22x | 0 | — | — | 2m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2400 ms | ↑ 1.37x | 0 | — | — | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.06% | 99.06% | 965 ms | ↑ 1.35x | 0 | — | — | 11m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.59% | 97.59% | 2650 ms | ↑ 1.92x | 0 | — | — | 6m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.91% | 99.91% | 99.91% | 1721 ms | ↑ 1.18x | 1 | 0s | 18d ago | 1m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1723 ms | ↑ 1.38x | 1 | 0s | 10d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.94% | 99.94% | 1873 ms | ↑ 1.73x | 1 | 0s | 15d ago | 2m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2175 ms | ↑ 1.22x | 0 | — | — | 2m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 67.95% | 81.68% | 81.68% | 1189 ms | → 0.97x | 2 | 4d 20h | 25d ago | 4m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.82% | 99.17% | 99.17% | 1232 ms | ↑ 1.06x | 3 | 0s | 17d ago | 4m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.00% | 99.00% | 3225 ms | ↑ 1.73x | 0 | — | — | 11m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 88.84% | 88.84% | 1658 ms | ↑ 1.38x | 0 | — | — | 4m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.80% | 99.80% | 99.80% | 752 ms | ↑ 1.20x | 1 | 1h | 24d ago | 2m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.83% | 99.83% | 99.83% | 1760 ms | → 0.97x | 1 | 0s | 10d ago | 2m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.90% | 99.90% | 1550 ms | ↑ 1.20x | 2 | 11m | 25d ago | 2m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 24.83% | 24.83% | 2381 ms | ↑ 1.63x | 0 | — | — | 11m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1628 ms | ↑ 1.42x | 0 | — | — | 22m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2640 ms | ↑ 1.08x | 0 | — | — | 20m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 784 ms | ↑ 1.25x | 0 | — | — | 19m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.16% | 98.16% | 947 ms | ↓ 0.73x | 0 | — | — | 9m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 735 ms | ↑ 1.18x | 0 | — | — | 20m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.74% | 99.74% | 1634 ms | → 1.04x | 4 | 8m | 18d ago | 15m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.76% | 98.76% | 4804 ms | ↑ 1.06x | 0 | — | — | 22m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1886 ms | ↓ 0.53x | 0 | — | — | 19m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2465 ms | ↑ 1.38x | 0 | — | — | 3m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 96.73% | 32.23% | 32.23% | 2214 ms | ↑ 1.14x | 8 | 2h 29m | 10d ago | 17m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.46% | 97.94% | 97.94% | 2176 ms | ↑ 1.17x | 126 | 29m | 14d ago | 19m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2805 ms | ↑ 1.08x | 0 | — | — | 15m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.35% | 99.35% | 2553 ms | ↑ 1.32x | 2 | 0s | 15d ago | 11m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.99% | 42.99% | 928 ms | → 1.01x | 1 | 0s | 14d ago | 20m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1187 ms | → 1.01x | 0 | — | — | 19m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.46% | 99.46% | 2978 ms | → 1.04x | 1 | 0s | 27d ago | 15m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.82% | 99.82% | 1368 ms | → 1.03x | 2 | 14m | 18d ago | 8m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 20.12% | 20.12% | 732 ms | → 0.96x | 1 | 0s | 11d ago | 19m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2674 ms | ↑ 1.13x | 0 | — | — | 10m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.70% | 99.70% | 739 ms | ↓ 0.54x | 0 | — | — | 5m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 570 ms | ↑ 1.18x | 0 | — | — | 2m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 705 ms | → 1.04x | 0 | — | — | 20m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.03% | 62.03% | 1643 ms | → 1.03x | 0 | — | — | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.32% | 83.36% | 83.36% | 1445 ms | ↑ 1.45x | 3 | 8h 40m | 15d ago | 5m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 3044 ms | ↑ 1.07x | 0 | — | — | 19m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.77% | 98.77% | 1143 ms | ↓ 0.64x | 2 | 2h 55m | 10d ago | 4m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.44% | 89.44% | 2120 ms | ↑ 1.24x | 1 | 0s | 11d ago | 19m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.54% | 22.64% | 22.64% | 1718 ms | ↑ 1.11x | 4 | 30m | 8d ago | 11m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.53% | 98.95% | 98.95% | 2174 ms | ↓ 0.49x | 4 | 30m | 8d ago | 9m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.45% | 80.45% | 2252 ms | ↑ 1.11x | 1 | 13h | 21d ago | 21m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 88.29% | 88.29% | 881 ms | ↓ 0.83x | 2 | 0s | 10d ago | 3m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1276 ms | ↑ 1.21x | 1 | 0s | 14d ago | 19m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1093 ms | → 0.98x | 0 | — | — | 20m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.89% | 99.66% | 99.66% | 1340 ms | ↑ 1.24x | 2 | 0s | 10d ago | 18m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 46.59% | 46.59% | 243 ms | → 1.01x | 1 | 0s | 14d ago | 8m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.61% | 99.61% | 967 ms | → 1.03x | 0 | — | — | 20m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1740 ms | ↑ 1.53x | 0 | — | — | 2m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 908 ms | → 1.03x | 1 | 0s | 27d ago | 5m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.58% | 98.58% | 1743 ms | ↑ 1.17x | 0 | — | — | 6m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.70% | 96.70% | 1264 ms | ↑ 1.43x | 2 | 45m | 13d ago | 6m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.76% | 70.76% | 1439 ms | ↑ 1.29x | 0 | — | — | 10m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1354 ms | ↑ 1.13x | 0 | — | — | 2m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1393 ms | → 0.99x | 0 | — | — | 1m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.52% | 81.52% | 3480 ms | ↑ 1.49x | 1 | 0s | 14d ago | 10m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2244 ms | ↑ 1.17x | 0 | — | — | 19m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 861 ms | ↓ 0.44x | 0 | — | — | 2m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 546 ms | ↓ 0.68x | 1 | 0s | 15d ago | 15m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 49.27% | 25.76% | 25.76% | 2756 ms | ↑ 1.07x | 2 | 7d 14h | 15d ago | 5m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.80% | 85.80% | 1341 ms | ↑ 1.88x | 0 | — | — | 18m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.41% | 91.41% | 498 ms | ↑ 1.29x | 0 | — | — | 8m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.32% | 99.32% | 2520 ms | ↑ 1.13x | 0 | — | — | 10m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.66% | 98.88% | 98.88% | 3200 ms | ↑ 1.15x | 6 | 0s | 8d ago | 21m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.77% | 96.77% | 1535 ms | ↑ 1.08x | 0 | — | — | 10m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.94% | 99.87% | 99.87% | 1817 ms | ↑ 1.48x | 1 | 0s | 27d ago | 2m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 3035 ms | ↑ 1.09x | 0 | — | — | 20m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.91% | 99.91% | 99.91% | 1599 ms | → 1.01x | 1 | 0s | 12d ago | 4m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4212 ms | ↑ 1.16x | 0 | — | — | 3m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.38% | 59.38% | 773 ms | ↑ 1.06x | 0 | — | — | 11m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 42.68% | 42.68% | 3327 ms | ↑ 1.30x | 0 | — | — | 10m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.37% | 99.37% | 99.37% | 3073 ms | → 1.01x | 1 | 1h 58m | 13d ago | 2m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.24% | 99.24% | 4366 ms | ↑ 1.21x | 1 | 0s | 26d ago | 15m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3479 ms | ↑ 1.13x | 0 | — | — | 20m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2661 ms | ↑ 1.25x | 0 | — | — | 9m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.23% | 92.32% | 92.32% | 2821 ms | → 1.01x | 3 | 12h 57m | 23d ago | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.28% | 99.28% | 2363 ms | ↑ 1.14x | 0 | — | — | 10m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.32% | 80.32% | 1074 ms | ↓ 0.44x | 0 | — | — | 10m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 189 ms | → 0.98x | 1 | 0s | 27d ago | 20m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2864 ms | ↑ 1.22x | 0 | — | — | 19m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1382 ms | ↓ 0.91x | 0 | — | — | 3m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.54% | 99.54% | 3396 ms | → 1.04x | 1 | 0s | 9d ago | 20m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.30% | 91.78% | 91.78% | 2719 ms | ↓ 0.90x | 12 | 0s | 15d ago | 8m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.76% | 80.76% | 2794 ms | ↑ 1.30x | 1 | 0s | 29d ago | 10m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.09% | 87.09% | 2217 ms | ↓ 0.36x | 0 | — | — | 10m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 99.94% | 99.94% | 1658 ms | ↑ 1.26x | 0 | — | — | 3m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1364 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.66% | 98.66% | 860 ms | ↑ 1.23x | 0 | — | — | 8m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 24.50% | 24.50% | 915 ms | ↑ 1.76x | 0 | — | — | 11m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.59% | 97.64% | 97.64% | 466 ms | ↓ 0.44x | 5 | 10m | 12d ago | 5m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 921 ms | → 1.02x | 0 | — | — | 8m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 93.24% | 38.17% | 38.17% | 848 ms | ↓ 0.93x | 1 | 1d 23h | 30d ago | 19m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.91% | 98.91% | 1392 ms | ↑ 1.16x | 1 | 5h 60m | 24d ago | 19m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 20.96% | 20.96% | 1572 ms | ↑ 1.28x | 0 | — | — | 18m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 652 ms | ↓ 0.51x | 0 | — | — | 3m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.56% | 99.56% | 2988 ms | ↑ 1.80x | 1 | 0s | 8d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3805 ms | → 1.01x | 0 | — | — | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 475 ms | ↓ 0.60x | 0 | — | — | 3m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.60% | 93.60% | 4697 ms | → 1.05x | 0 | — | — | 19m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.59% | 99.59% | 2154 ms | ↑ 1.18x | 1 | 1h 20m | 25d ago | 19m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.26% | 99.26% | 1030 ms | ↑ 1.13x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.90% | 99.90% | 1404 ms | ↓ 0.92x | 0 | — | — | 3m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2777 ms | ↑ 1.51x | 0 | — | — | 20m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 1887 ms | ↑ 1.23x | 0 | — | — | 18m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 540 ms | ↑ 1.22x | 0 | — | — | 22m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 57.63% | 88.71% | 88.71% | 2070 ms | ↑ 1.30x | 1 | 12d 20h | 21d ago | 18m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.84% | 98.84% | 2814 ms | → 1.03x | 0 | — | — | 5m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.80% | 96.80% | 3326 ms | ↑ 1.09x | 0 | — | — | 19m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.82% | 99.82% | 642 ms | ↓ 0.83x | 1 | 20m | 26d ago | 5m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.02% | 89.02% | 2533 ms | ↑ 1.34x | 0 | — | — | 9m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.84% | 99.84% | 864 ms | ↓ 0.83x | 0 | — | — | 5m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1726 ms | → 1.00x | 0 | — | — | 4m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2158 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1567 ms | ↑ 1.14x | 0 | — | — | 20m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.93% | 99.93% | 1621 ms | ↑ 1.09x | 1 | 0s | 18d ago | 2m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1386 ms | ↑ 1.12x | 0 | — | — | 20m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1519 ms | → 1.02x | 0 | — | — | 18m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.91% | 84.91% | 1721 ms | ↓ 0.92x | 1 | 0s | 23d ago | 15m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.88% | 98.23% | 98.23% | 2795 ms | ↑ 1.30x | 2 | 0s | 26d ago | 6m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.38% | 92.38% | 4510 ms | ↑ 1.23x | 2 | 25m | 13d ago | 22m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.93% | 99.93% | 2469 ms | ↑ 1.63x | 1 | 0s | 11d ago | 2m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.06% | 97.37% | 97.37% | 1811 ms | ↑ 1.23x | 12 | 10m | 14d ago | 4m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.80% | 97.80% | 3713 ms | ↑ 1.72x | 1 | 0s | 18d ago | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.84% | 98.84% | 1343 ms | ↑ 1.24x | 0 | — | — | 10m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.75% | 98.75% | 1877 ms | → 1.02x | 0 | — | — | 18m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.88% | 99.62% | 99.62% | 3071 ms | ↑ 1.32x | 1 | 29m | 30d ago | 3m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1199 ms | ↑ 1.59x | 0 | — | — | 3m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.67% | 98.67% | 1274 ms | ↑ 1.52x | 4 | 7m | 11d ago | 8m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2677 ms | ↑ 1.27x | 0 | — | — | 2m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.61% | 97.61% | 97.61% | 169 ms | ↓ 0.15x | 2 | 6h 36m | 15d ago | 2m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.12% | 31.12% | 1318 ms | ↑ 1.21x | 0 | — | — | 17m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1651 ms | ↑ 1.51x | 0 | — | — | 9m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 47.61% | 47.61% | 47.61% | 1325 ms | ↓ 0.91x | 1 | 13d 23h | 23d ago | 1m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1906 ms | ↑ 1.28x | 0 | — | — | 18m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.94% | 88.94% | 4268 ms | ↑ 1.35x | 0 | — | — | 10m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 2033 ms | ↑ 1.24x | 1 | 0s | 14d ago | 18m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 20.95% | 20.95% | 2146 ms | → 0.98x | 0 | — | — | 19m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 683 ms | ↓ 0.83x | 0 | — | — | 3m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.27% | 97.27% | 2857 ms | ↑ 1.38x | 0 | — | — | 6m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2507 ms | ↑ 1.16x | 1 | 0s | 29d ago | 18m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1334 ms | → 1.02x | 2 | 10m | 14d ago | 19m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 20.74% | 20.74% | 2424 ms | ↑ 1.31x | 0 | — | — | 11m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.53% | 99.72% | 99.72% | 2304 ms | ↓ 0.59x | 4 | 30m | 16d ago | 3m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2865 ms | ↑ 1.10x | 0 | — | — | 8m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2192 ms | ↑ 1.17x | 0 | — | — | 19m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2063 ms | → 1.02x | 0 | — | — | 2m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 1272 ms | ↓ 0.63x | 0 | — | — | 18m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 323 ms | → 0.99x | 0 | — | — | 2m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.69% | 98.69% | 1574 ms | ↑ 1.20x | 0 | — | — | 6m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.15% | 99.15% | 1915 ms | ↑ 1.13x | 1 | 0s | 21d ago | 19m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 731 ms | ↑ 1.29x | 0 | — | — | 19m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 460 ms | → 1.02x | 0 | — | — | 1m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.75% | 96.91% | 99.59% | 99.59% | 4248 ms | ↑ 1.27x | 3 | 6h 10m | 2d ago | 21m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.75% | 99.54% | 99.26% | 99.26% | 2237 ms | ↑ 1.39x | 4 | 22m | 4d ago | 20m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.75% | 98.63% | 99.74% | 99.74% | 2015 ms | ↑ 1.12x | 4 | 1h 38m | 4d ago | 20m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 45.41% | 45.41% | 1388 ms | ↑ 1.07x | 2 | 0s | 5d ago | 20m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.77% | 62.81% | 62.81% | 2802 ms | ↑ 1.05x | 4 | 0s | 4d ago | 20m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.75% | 96.16% | 45.45% | 45.45% | 3524 ms | ↑ 1.23x | 35 | 23m | 7d ago | 19m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.89% | 26.15% | 26.15% | 2746 ms | ↑ 1.23x | 2 | 0s | 2d ago | 22m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.75% | 99.94% | 99.98% | 99.98% | 657 ms | → 1.04x | 1 | 0s | 2d ago | 17m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.75% | 99.94% | 99.75% | 99.75% | 3219 ms | ↑ 1.11x | 1 | 0s | 2d ago | 16m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.75% | 99.43% | 99.00% | 99.00% | 3949 ms | → 1.05x | 9 | 2m | 2d ago | 17m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.75% | 99.94% | 99.53% | 99.53% | 2226 ms | → 1.04x | 1 | 0s | 2d ago | 16m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.75% | 99.94% | 31.49% | 31.49% | 1223 ms | ↑ 1.10x | 1 | 0s | 2d ago | 16m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.75% | 99.66% | 99.90% | 99.90% | 921 ms | → 1.05x | 4 | 10m | 2d ago | 17m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.75% | 99.43% | 99.16% | 99.16% | 4210 ms | ↑ 1.06x | 9 | 2m | 2d ago | 17m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.75% | 99.89% | 99.87% | 99.87% | 3056 ms | ↑ 1.06x | 2 | 0s | 2d ago | 16m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.75% | 99.84% | 14.73% | 14.73% | 2664 ms | → 1.01x | 1 | 0s | 1d ago | 16m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.88% | 20.96% | 20.96% | 2006 ms | ↑ 1.67x | 2 | 0s | 1d ago | 16m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.88% | 22.61% | 22.61% | 2319 ms | ↑ 1.30x | 2 | 0s | 1d ago | 15m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.75% | 99.94% | 99.95% | 99.95% | 2269 ms | ↑ 1.11x | 1 | 0s | 6d ago | 15m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.88% | 99.80% | 99.80% | 2227 ms | ↑ 1.10x | 2 | 0s | 1d ago | 15m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.68% | 98.68% | 995 ms | ↓ 0.83x | 6 | 0s | 4d ago | 10m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.88% | 82.51% | 82.51% | 2690 ms | ↑ 1.27x | 2 | 0s | 4d ago | 10m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.94% | 97.54% | 97.54% | 2498 ms | ↑ 1.24x | 1 | 0s | 4d ago | 11m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.71% | 67.40% | 67.40% | 1336 ms | → 0.97x | 4 | 5m | 4d ago | 10m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 48.77% | 48.77% | 2147 ms | ↑ 1.37x | 2 | 0s | 4d ago | 11m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.42% | 53.52% | 53.52% | 1000 ms | ↓ 0.87x | 6 | 20m | 4d ago | 11m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 63.59% | 63.59% | 627 ms | ↓ 0.92x | 3 | 0s | 4d ago | 10m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.88% | 90.54% | 90.54% | 2277 ms | ↑ 1.11x | 2 | 0s | 4d ago | 10m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 99.71% | 20.83% | 20.83% | 603 ms | ↓ 0.37x | 4 | 8m | 4d ago | 11m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 99.75% | 26.00% | 32.33% | 32.33% | 2733 ms | → 1.01x | 2 | 11d 2h | 4d ago | 10m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.88% | 23.00% | 23.00% | 658 ms | ↓ 0.38x | 2 | 0s | 4d ago | 11m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.75% | 99.77% | 92.86% | 92.86% | 1371 ms | ↓ 0.86x | 4 | 0s | 1d ago | 9m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.94% | 98.50% | 98.50% | 1942 ms | ↑ 1.22x | 1 | 0s | 7d ago | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.22% | 96.22% | 2367 ms | ↑ 1.45x | 1 | 0s | 4d ago | 11m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.83% | 21.84% | 21.84% | 1269 ms | ↑ 1.13x | 3 | 0s | 4d ago | 11m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.50% | 62.50% | 2615 ms | ↑ 1.17x | 1 | 0s | 4d ago | 10m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.26% | 96.71% | 96.71% | 4594 ms | ↑ 1.13x | 12 | 43m | 4d ago | 11m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.96% | 99.96% | 2323 ms | ↑ 1.14x | 2 | 0s | 4d ago | 10m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.75% | 99.94% | 98.40% | 98.40% | 2530 ms | ↑ 1.31x | 1 | 0s | 6d ago | 9m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.75% | 99.94% | 96.65% | 96.65% | 3409 ms | ↑ 1.45x | 1 | 0s | 5d ago | 11m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.75% | 99.94% | 22.73% | 22.73% | 4002 ms | ↑ 1.52x | 1 | 0s | 5d ago | 11m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.30% | 97.65% | 97.65% | 2216 ms | ↑ 1.12x | 10 | 6m | 2d ago | 8m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.75% | 99.94% | 99.05% | 99.05% | 655 ms | ↑ 1.37x | 1 | 0s | 2d ago | 8m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.75% | 99.94% | 98.59% | 98.59% | 2599 ms | ↓ 0.63x | 1 | 0s | 2d ago | 8m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.94% | 75.54% | 75.54% | 930 ms | ↓ 0.88x | 1 | 0s | 2d ago | 8m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.75% | 97.31% | 98.38% | 98.38% | 4089 ms | ↑ 1.16x | 19 | 41m | 1d ago | 7m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.75% | 99.47% | 99.50% | 99.50% | 622 ms | ↓ 0.41x | 4 | 35m | 2d ago | 2m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.75% | 98.07% | 96.47% | 96.47% | 2114 ms | → 1.04x | 2 | 6h 1m | 3d ago | 5m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.75% | 99.87% | 99.87% | 99.87% | 2150 ms | ↑ 1.06x | 1 | 0s | 3h ago | 2m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.74% | 99.94% | 99.94% | 99.94% | 2449 ms | ↑ 1.43x | 1 | 0s | 5d ago | 3m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.74% | 99.94% | 99.94% | 99.94% | 1676 ms | → 0.97x | 1 | 0s | 3d ago | 3m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 99.88% | 98.99% | 98.99% | 3053 ms | ↑ 1.05x | 2 | 0s | 6d ago | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.74% | 99.82% | 98.00% | 98.00% | 621 ms | ↓ 0.81x | 3 | 0s | 6d ago | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.74% | 99.94% | 97.80% | 97.80% | 500 ms | ↓ 0.87x | 1 | 0s | 1d ago | 2m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.74% | 99.94% | 98.25% | 98.25% | 1826 ms | ↑ 1.28x | 1 | 0s | 6d ago | 5m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.74% | 99.47% | 99.47% | 99.47% | 970 ms | ↓ 0.90x | 3 | 30m | 1d ago | 3m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.74% | 99.93% | 99.93% | 99.93% | 2694 ms | ↑ 1.57x | 1 | 0s | 2d ago | 2m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.74% | 99.77% | 99.84% | 99.84% | 1148 ms | ↑ 1.27x | 2 | 30m | 2d ago | 2m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.51% | 99.60% | 96.09% | 96.09% | 3330 ms | ↑ 1.13x | 7 | 0s | 4h ago | 21m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.51% | 99.89% | 99.73% | 99.73% | 3266 ms | ↑ 1.09x | 2 | 0s | 15h ago | 19m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.51% | 99.14% | 99.71% | 99.71% | 271 ms | ↑ 1.34x | 10 | 10m | 1d ago | 19m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.66% | 20.93% | 20.93% | 2311 ms | → 1.04x | 6 | 0s | 14h ago | 19m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.51% | 99.66% | 85.71% | 85.71% | 2303 ms | → 1.03x | 6 | 0s | 4d ago | 20m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.50% | 99.71% | 79.70% | 79.70% | 1604 ms | ↓ 0.87x | 5 | 0s | 1d ago | 15m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.50% | 99.83% | 68.40% | 68.40% | 1638 ms | ↑ 1.32x | 3 | 0s | 2h ago | 10m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.50% | 99.77% | 23.46% | 23.46% | 1538 ms | ↑ 1.06x | 4 | 0s | 5d ago | 11m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.50% | 99.01% | 91.55% | 91.55% | 1417 ms | → 1.00x | 16 | 2m | 13h ago | 10m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.49% | 99.88% | 96.85% | 96.85% | 858 ms | ↑ 1.19x | 2 | 0s | 5d ago | 8m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.49% | 97.20% | 97.86% | 97.86% | 4474 ms | ↑ 1.13x | 24 | 28m | 1d ago | 7m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.49% | 99.88% | 98.89% | 98.89% | 393 ms | ↑ 1.26x | 1 | 29m | 2d ago | 8m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.49% | 74.78% | 92.43% | 92.43% | 4632 ms | ↑ 1.73x | 4 | 1d 20h | 1d ago | 7m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.49% | 99.88% | 98.00% | 98.00% | 4318 ms | ↑ 1.13x | 1 | 20m | 7h ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.49% | 99.36% | 99.75% | 99.75% | 4620 ms | ↑ 1.31x | 7 | 17m | 1d ago | 7m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.49% | 99.80% | 99.80% | 99.80% | 1660 ms | ↓ 0.88x | 3 | 0s | 6d ago | 1m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.49% | 99.59% | 99.57% | 99.57% | 1093 ms | ↓ 0.76x | 4 | 15m | 6d ago | 1m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.49% | 99.18% | 96.85% | 96.85% | 1369 ms | ↓ 0.94x | 6 | 35m | 4d ago | 5m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.49% | 99.18% | 98.72% | 98.72% | 1378 ms | ↓ 0.60x | 4 | 60m | 5d ago | 4m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.49% | 99.82% | 99.65% | 99.65% | 2065 ms | ↓ 0.68x | 3 | 0s | 6d ago | 2m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.49% | 99.06% | 99.17% | 99.17% | 2237 ms | ↑ 1.50x | 9 | 21m | 3d ago | 3m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.49% | 99.75% | 99.75% | 99.75% | 1381 ms | → 1.02x | 2 | 0s | 6d ago | 2m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.25% | 98.56% | 19.17% | 19.17% | 3902 ms | ↑ 1.31x | 11 | 32m | 4d ago | 15m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.25% | 99.65% | 90.69% | 90.69% | 722 ms | ↓ 0.91x | 6 | 0s | 4d ago | 10m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.25% | 99.48% | 68.81% | 68.81% | 1796 ms | ↑ 1.43x | 7 | 9m | 3d ago | 10m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.25% | 99.77% | 99.82% | 99.82% | 2292 ms | ↓ 0.38x | 4 | 0s | 4d ago | 11m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.23% | 97.49% | 98.69% | 98.69% | 824 ms | ↑ 1.34x | 8 | 1h 52m | 7h ago | 4m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.23% | 99.56% | 99.56% | 99.56% | 381 ms | ↓ 0.85x | 4 | 5m | 1d ago | 3m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.23% | 99.53% | 85.94% | 85.94% | 1557 ms | ↓ 0.64x | 7 | 4m | 2d ago | 2m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.23% | 74.78% | 86.47% | 86.47% | 760 ms | ↓ 0.88x | 7 | 1d 2h | 7d ago | 2m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.01% | 98.28% | 48.90% | 48.90% | 3456 ms | ↑ 1.20x | 8 | 1h 3m | 1d ago | 16m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.01% | 99.14% | 69.21% | 69.21% | 3946 ms | → 1.00x | 12 | 6m | 1d ago | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.00% | 99.65% | 20.84% | 20.84% | 4637 ms | ↑ 1.34x | 5 | 6m | 1d ago | 15m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (60)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.00% | 88.29% | 36.48% | 36.48% | 1912 ms | → 1.05x | 14 | 5h 29m | 6d ago | 11m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.98% | 99.77% | 79.88% | 79.88% | 1983 ms | → 1.05x | 2 | 30m | 1d ago | 8m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 98.98% | 96.14% | 97.50% | 97.50% | 628 ms | ↓ 0.77x | 3 | 8h 24m | 3d ago | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 98.77% | 99.54% | 55.87% | 55.87% | 1681 ms | ↑ 1.19x | 8 | 0s | 1h ago | 16m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.77% | 96.90% | 20.28% | 20.28% | 902 ms | ↓ 0.84x | 51 | 1m | 2d ago | 17m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.76% | 98.45% | 98.91% | 98.91% | 1615 ms | ↓ 0.95x | 18 | 14m | 1d ago | 15m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.75% | 97.68% | 95.99% | 95.99% | 3737 ms | ↑ 1.27x | 5 | 2h 55m | 21h ago | 9m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.75% | 98.49% | 86.51% | 86.51% | 4593 ms | ↑ 1.09x | 25 | 1m | 24h ago | 11m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.75% | 99.30% | 98.84% | 98.84% | 2042 ms | ↑ 1.28x | 5 | 36m | 3d ago | 9m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.73% | 99.71% | 98.21% | 98.21% | 447 ms | ↓ 0.52x | 1 | 1h 40m | 6d ago | 6m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.73% | 99.71% | 93.11% | 93.11% | 34 ms | → 1.00x | 1 | 1h 22m | 1d ago | 5m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.72% | 98.65% | 98.62% | 98.62% | 3130 ms | ↑ 1.32x | 23 | 0s | 3d ago | 2m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.72% | 99.71% | 96.35% | 96.35% | 1404 ms | ↑ 1.38x | 1 | 2h 1m | 6d ago | 2m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.72% | 99.18% | 98.77% | 98.77% | 2512 ms | ↑ 1.19x | 6 | 40m | 2d ago | 3m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 98.72% | 94.38% | 94.38% | 94.38% | 1491 ms | → 0.98x | 4 | 6h 14m | 7d ago | 4m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 98.52% | 25.72% | 74.85% | 74.85% | 3554 ms | → 1.00x | 7 | 3d 4h | 23h ago | 21m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.52% | 99.03% | 98.34% | 98.34% | 4494 ms | → 1.04x | 17 | 0s | 22h ago | 21m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.25% | 99.25% | 62.71% | 62.71% | 1209 ms | ↓ 0.47x | 3 | 1h 32m | 4d ago | 11m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.22% | 99.53% | 54.68% | 54.68% | 641 ms | ↓ 0.93x | 7 | 4m | 1d ago | 8m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 98.22% | 98.55% | 98.55% | 98.55% | 3162 ms | → 1.00x | 1 | 2h 37m | 4d ago | 2m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 97.97% | 97.37% | 98.74% | 98.74% | 2777 ms | ↑ 1.21x | 18 | 44m | 1d ago | 7m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 97.96% | 98.25% | 92.43% | 92.43% | 808 ms | ↑ 1.13x | 15 | 23m | 2d ago | 5m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 97.96% | 99.42% | 99.33% | 99.33% | 4870 ms | ↑ 1.35x | 8 | 6m | 17h ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.78% | 99.48% | 99.62% | 99.62% | 2508 ms | ↑ 1.12x | 1 | 3h 60m | 7d ago | 18m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.74% | 98.49% | 67.75% | 67.75% | 4782 ms | ↑ 1.07x | 23 | 4m | 24h ago | 10m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.54% | 98.34% | 87.27% | 87.27% | 4101 ms | ↑ 1.23x | 29 | 0s | 24h ago | 22m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 97.45% | 97.98% | 97.98% | 97.98% | 3069 ms | → 1.02x | 12 | 9m | 2d ago | 2m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.28% | 97.35% | 74.88% | 74.88% | 4468 ms | ↑ 1.07x | 41 | 3m | 1h ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.28% | 95.80% | 19.07% | 19.07% | 2719 ms | → 1.03x | 68 | 2m | 1h ago | 16m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 97.21% | 99.07% | 99.62% | 99.62% | 2138 ms | ↑ 1.13x | 2 | 3h 20m | 5d ago | 8m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 97.19% | 88.36% | 93.16% | 93.16% | 917 ms | ↓ 0.46x | 84 | 31m | 1d ago | 3m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.01% | 98.04% | 20.33% | 20.33% | 4565 ms | ↑ 1.20x | 34 | 0s | 5h ago | 15m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.95% | 96.33% | 84.16% | 84.16% | 4487 ms | → 0.99x | 53 | 6m | 13h ago | 8m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.95% | 82.31% | 82.82% | 82.82% | 4538 ms | → 0.98x | 37 | 3h 10m | 1d ago | 6m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.70% | 98.43% | 52.14% | 52.14% | 4051 ms | ↑ 1.79x | 25 | 2m | 4h ago | 7m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.69% | 97.24% | 97.24% | 97.24% | 4646 ms | → 1.01x | 19 | 5m | 16h ago | 1m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.43% | 98.07% | 98.59% | 98.59% | 2358 ms | ↑ 1.46x | 7 | 1h 24m | 2d ago | 3m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 96.24% | 98.67% | 73.17% | 73.17% | 913 ms | → 0.95x | 11 | 33m | 23h ago | 10m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.22% | 97.27% | 86.38% | 86.38% | 4613 ms | → 1.04x | 35 | 9m | 22h ago | 8m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.04% | 98.05% | 96.53% | 96.53% | 1792 ms | ↑ 1.24x | 8 | 1h 15m | 1d ago | 16m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 95.93% | 91.22% | 91.22% | 91.22% | 4641 ms | → 1.02x | 23 | 1h 34m | 16h ago | 2m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 95.57% | 98.91% | 99.57% | 99.57% | 4046 ms | → 0.97x | 18 | 2m | 4d ago | 19m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.52% | 96.49% | 98.48% | 98.48% | 4581 ms | ↑ 1.12x | 58 | 2m | 2h ago | 15m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 95.15% | 97.49% | 96.71% | 96.71% | 1527 ms | → 0.97x | 4 | 4h 2m | 1d ago | 5m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 93.98% | 95.99% | 83.07% | 83.07% | 4865 ms | → 1.03x | 63 | 3m | 1h ago | 9m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 93.37% | 96.84% | 90.58% | 90.58% | 4574 ms | ↑ 1.23x | 15 | 33m | 17h ago | 4m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 91.48% | 93.90% | 73.10% | 73.10% | 2073 ms | ↑ 1.23x | 16 | 1h 55m | 11h ago | 10m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 89.16% | 97.42% | 98.84% | 98.84% | 3844 ms | ↑ 1.25x | 2 | 8h 60m | 5d ago | 19m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 88.80% | 49.30% | 31.09% | 31.09% | 3176 ms | ↑ 1.05x | 190 | 1h 30m | 3h ago | 2m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 88.52% | 93.75% | 95.56% | 95.56% | 1769 ms | ↓ 0.84x | 14 | 2h 55m | 1d ago | 5m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.22% | 87.88% | 21.43% | 21.43% | 4500 ms | → 0.96x | 159 | 9m | 13h ago | 11m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 80.66% | 95.08% | 91.43% | 91.43% | 1430 ms | ↑ 1.21x | 20 | 1h 21m | 19h ago | 2m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 78.37% | 80.39% | 81.36% | 81.36% | 4410 ms | → 0.95x | 135 | 39m | 31m ago | 1m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 76.94% | 71.95% | 25.32% | 25.32% | 4599 ms | → 0.96x | 295 | 18m | 4h ago | 10m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.83% | 71.30% | 62.71% | 62.71% | 4818 ms | → 1.00x | 318 | 16m | 1h ago | 16m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 45.11% | 44.23% | 32.21% | 32.21% | 2234 ms | ↑ 1.17x | 2 | 8d 10h | 7d ago | 11m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 44.27% | 10.16% | 24.76% | 24.76% | 2224 ms | → 1.00x | 2 | 13d 11h | 1d ago | 5m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 42.64% | 9.81% | 64.31% | 64.31% | 2253 ms | → 1.00x | 2 | 13d 13h | 1d ago | 7m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 26.28% | 73.04% | 81.71% | 81.71% | 4958 ms | ↑ 2.38x | 120 | 1h 12m | 5h ago | 4m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 25.56% | 44.84% | 31.50% | 31.50% | 1126 ms | ↑ 1.61x | 5 | 3d 8h | 13h ago | 10m ago |

</details>

<details open>
<summary><strong>🔴 Down (258)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 98.98% | 99.65% | 98.42% | 98.42% | 2278 ms | ↑ 1.34x | 3 | 30m | 2h ago | 8m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.53% | 98.39% | 85.96% | 85.96% | 4431 ms | → 0.99x | 27 | 1m | 18m ago | 18m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 94.40% | 98.71% | 98.93% | 98.93% | 1137 ms | ↓ 0.43x | 3 | 2h 7m | 1m ago | 1m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.56% | 88.50% | 58.58% | 58.58% | 4215 ms | ↑ 1.05x | 155 | 8m | 6m ago | 6m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 75.12% | 94.10% | 98.96% | 98.96% | 3203 ms | ↑ 1.11x | 3 | 12h 50m | 2d ago | 20m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 72.93% | 46.46% | 47.79% | 47.79% | 505 ms | ↓ 0.94x | 2 | 8d 1h | 2d ago | 10m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 66.50% | 76.72% | 96.80% | 96.80% | 4555 ms | ↑ 1.13x | 226 | 21m | 48m ago | 19m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 55.61% | 48.74% | 45.62% | 45.62% | 691 ms | → 1.04x | 5 | 3d 2h | 3d ago | 3m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 54.64% | 48.55% | 67.01% | 67.01% | 690 ms | → 1.02x | 6 | 2d 13h | 3d ago | 10m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 32.14% | 84.04% | 91.08% | 91.08% | 2276 ms | ↑ 1.14x | 8 | 14h 7m | 5d ago | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 32.02% | 84.17% | 86.30% | 86.30% | 1266 ms | ↑ 1.06x | 1 | 4d 15h | 5d ago | 19m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 21.68% | 80.76% | 88.51% | 88.51% | 1720 ms | ↓ 0.90x | 8 | 16h 54m | 5d ago | 3m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 4.34% | 78.07% | 87.97% | 87.97% | 683 ms | ↓ 0.79x | 1 | 6d 15h | 7d ago | 3m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.48% | 1.55% | 57.64% | 57.64% | 3399 ms | ↑ 1.06x | 28 | 1d 1h | 2d ago | 22m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.99% | 45.87% | 50.15% | 50.15% | 2844 ms | ↑ 1.36x | 10 | 1d 14h | 2d ago | 16m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 78.38% | 78.38% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.92% | 64.92% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.85% | 69.85% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 41.38% | 41.38% | — | — | 1 | 29d 23h | 30d ago | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 74.56% | 74.56% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 55.69% | 55.69% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.34% | 5.34% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.86% | 11.86% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 51.14% | 51.14% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 73.63% | 85.63% | 85.63% | — | — | 23 | 7h 54m | 8d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.21% | 3.21% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 52.92% | 86.55% | 86.55% | — | — | 1 | 14d 3h | 14d ago | 5m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 78.62% | 78.62% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.51% | 34.51% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 87.80% | 87.80% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.94% | 21.94% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 70.55% | 70.55% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 46.87% | 46.87% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.96% | 27.96% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 34.21% | 87.05% | 87.05% | — | — | 6 | 3d 6h | 20d ago | 19m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 78.99% | 78.99% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 59.50% | 59.50% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.97% | 72.97% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 21h | 14d ago | 21m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.79% | 13.79% | — | — | 1 | 29d 23h | 30d ago | 9m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 46.24% | 46.24% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.06% | 89.64% | 89.64% | — | — | 2 | 14d 23h | 30d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.63% | 31.63% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 63.35% | 79.80% | 79.80% | — | — | 1 | 10d 22h | 11d ago | 2m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 79.38% | 79.38% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 46.18% | 44.77% | 44.77% | — | — | 3 | 3d 13h | 11d ago | 4m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 34.81% | 84.14% | 84.14% | — | — | 1 | 19d 14h | 20d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.23% | 3.23% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 69.91% | 83.83% | 83.83% | — | — | 1 | 9d 1h | 9d ago | 2m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 79.23% | 79.23% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 28.48% | 28.48% | — | — | 1 | 29d 24h | 30d ago | 2m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.16% | 49.16% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.95% | 1.95% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 86.75% | 86.75% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 43.13% | 43.13% | 43.13% | — | — | 1 | 15d 1h | 15d ago | 2m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 69.51% | 69.51% | — | — | 1 | 29d 23h | 30d ago | 7m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 70.11% | 70.11% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 64.15% | 80.19% | 80.19% | — | — | 3 | 3d 13h | 11d ago | 4m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 28.14% | 28.14% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.73% | 51.73% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 47.56% | 47.56% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.86% | 22.86% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 26.12% | 79.33% | 79.33% | — | — | 4 | 5d 13h | 22d ago | 21m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 25.55% | 39.65% | 39.65% | — | — | 3 | 7d 11h | 22d ago | 16m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 4h | 20d ago | 2m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 27.82% | 55.49% | 55.49% | — | — | 1 | 21d 20h | 22d ago | 5m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.21% | 54.21% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.35% | 22.35% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.88% | 4.88% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 62.37% | 62.37% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 78.94% | 78.94% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 49.71% | 75.48% | 75.48% | — | — | 1 | 15d 2h | 15d ago | 5m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.94% | 5.94% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 75.40% | 75.40% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 77.78% | 77.78% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.99% | 29.99% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 35.25% | 88.10% | 88.10% | — | — | 2 | 9d 16h | 19d ago | 9m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 24.47% | 24.47% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.84% | 21.84% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.15% | 50.15% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 27.24% | 27.24% | 27.24% | — | — | 2 | 5d 1h | 10d ago | 2m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 64.09% | 78.56% | 78.56% | — | — | 4 | 2d 16h | 11d ago | 4m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 63.63% | 83.45% | 83.45% | — | — | 13 | 19h 34m | 11d ago | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 50.16% | 50.16% | — | — | 1 | 29d 23h | 30d ago | 9m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 21.94% | 22.27% | 22.27% | — | — | 8 | 1d 8h | 11d ago | 4m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.99% | 6.99% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 59.67% | 59.67% | — | — | 1 | 29d 23h | 30d ago | 7m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.30% | 44.30% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 23.73% | 23.73% | 23.73% | — | — | 3 | 5d 2h | 15d ago | 4m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.25% | 40.25% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 66.55% | 77.98% | 77.98% | — | — | 4 | 2d 11h | 10d ago | 21m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 23.87% | 23.87% | — | — | 1 | 29d 24h | 30d ago | 2m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 9m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 78.95% | 78.95% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.77% | 55.77% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.04% | 37.04% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 18.41% | 69.86% | 69.86% | — | — | 2 | 12d 6h | 25d ago | 8m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 74.52% | 74.52% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 2.75% | 68.12% | 68.12% | — | — | 1 | 29d 5h | 29d ago | 6m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.41% | 2.41% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 79.16% | 79.16% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.61% | 39.61% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 17.79% | 92.84% | 92.84% | — | — | 1 | 24d 17h | 25d ago | 15m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.94% | 78.94% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.08% | 31.08% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 78.85% | 78.85% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 46.65% | 46.65% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 20.05% | 20.05% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 41.53% | 41.53% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 76.63% | 76.63% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 60.90% | 60.90% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 26.10% | 26.10% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 2h | 20d ago | 3m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 75.19% | 75.19% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 2h | 20d ago | 4m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 46.25% | 46.25% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.99% | 2.99% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 3h | 20d ago | 3m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.13% | 41.13% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 73.66% | 73.66% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 9.12% | 39.67% | 39.67% | — | — | 2 | 13d 16h | 27d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 56.20% | 56.20% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 29.70% | 29.70% | 29.70% | — | — | 1 | 14d | 14d ago | 3m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 37.45% | 37.45% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 56.66% | 56.66% | — | — | 1 | 29d 23h | 30d ago | 7m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 84.66% | 84.66% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 59.74% | 96.27% | 96.27% | — | — | 2 | 5d 22h | 12d ago | 20m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 26.95% | 26.95% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.30% | 11.30% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.96% | 22.96% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.45% | 50.45% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 89.64% | 89.64% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 4.50% | 69.87% | 69.87% | — | — | 1 | 28d 16h | 29d ago | 7m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.66% | 8.66% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.64% | 16.64% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.16% | 47.16% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 39.88% | 48.70% | 48.70% | — | — | 2 | 8d 24h | 18d ago | 8m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 19.48% | 19.48% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.56% | 52.56% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 90.75% | 90.75% | — | — | 1 | 13d 21h | 14d ago | 15m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.84% | 36.84% | — | — | 1 | 20d 3h | 20d ago | 11m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.73% | 20.73% | — | — | 1 | 29d 23h | 30d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 31.17% | 31.17% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 43.46% | 43.46% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.29% | 5.29% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 75.67% | 75.67% | — | — | 1 | 29d 23h | 30d ago | 9m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 86.02% | 86.02% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 9.65% | 53.84% | 53.84% | — | — | 1 | 27d 5h | 27d ago | 2m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 79.03% | 79.03% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 78.00% | 78.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 60.84% | 60.84% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 71.43% | 71.43% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 77.87% | 77.87% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 22h | 14d ago | 3m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.59% | 18.59% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 56.96% | 56.96% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 38.09% | 38.09% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.88% | 3.88% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.42% | 32.42% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 65.35% | 65.35% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 23.46% | 23.46% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.99% | 6.99% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.57% | 62.57% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 26.25% | 26.25% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 64.41% | 64.41% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 34.53% | 34.53% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 64.15% | 79.88% | 79.88% | — | — | 3 | 3d 13h | 11d ago | 4m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.39% | 4.39% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 21h | 14d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 49.36% | 49.36% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 42.75% | 42.75% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 32.39% | 32.39% | — | — | 1 | 29d 23h | 30d ago | 6m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 19.10% | 19.10% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 9.12% | 5.22% | 5.22% | — | — | 2 | 13d 16h | 27d ago | 18m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.83% | 10.83% | — | — | 1 | 29d 23h | 30d ago | 8m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.12% | 17.12% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.92% | 15.92% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 28.66% | 28.66% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.36% | 9.36% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.50% | 7.50% | — | — | 1 | 29d 24h | 30d ago | 2m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.77% | 0.77% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.38% | 4.38% | — | — | 1 | 29d 23h | 30d ago | 5m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.08% | 5.08% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.57% | 47.57% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 40.78% | 40.78% | — | — | 1 | 29d 23h | 30d ago | 3m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 79.01% | 79.01% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 67.96% | 67.96% | — | — | 1 | 29d 23h | 30d ago | 6m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 42.81% | 42.81% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 79.20% | 79.20% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 47.83% | 47.83% | — | — | 1 | 29d 23h | 30d ago | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.45% | 39.45% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.57% | 1.57% | — | — | 1 | 29d 23h | 30d ago | 4m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.31% | 18.31% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 3h | 20d ago | 3m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 77.05% | 77.05% | — | — | 1 | 29d 23h | 30d ago | 14m ago |

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
