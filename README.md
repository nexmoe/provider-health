# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**676 providers** — 361 🟢 operational · 46 🟡 degraded · 269 🔴 down · 0 ⚫ unknown

_Updated 2026-07-09 06:48 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.47% | 98.47% | 883 ms | ↑ 1.19x | 0 | — | — | 35m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 94.26% | 94.26% | 657 ms | ↓ 0.37x | 0 | — | — | 39m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.78% | 24.43% | 24.43% | 3188 ms | ↓ 0.95x | 3 | 0s | 29d ago | 41m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.57% | 97.57% | 2721 ms | ↓ 0.79x | 0 | — | — | 46m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.41% | 99.45% | 99.45% | 825 ms | ↓ 0.52x | 2 | 3h 1m | 7d ago | 32m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.34% | 99.61% | 99.61% | 790 ms | ↓ 0.88x | 4 | 35m | 17d ago | 32m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.85% | 98.73% | 98.73% | 945 ms | ↓ 0.83x | 2 | 0s | 19d ago | 39m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.89% | 98.89% | 1821 ms | ↓ 0.91x | 1 | 0s | 10d ago | 48m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.61% | 99.61% | 3122 ms | ↑ 1.08x | 0 | — | — | 48m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.85% | 95.85% | 1831 ms | ↓ 0.69x | 0 | — | — | 36m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 98.02% | 98.02% | 2117 ms | ↓ 0.61x | 0 | — | — | 36m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 95.00% | 97.07% | 97.07% | 928 ms | ↓ 0.66x | 2 | 1d 2h | 13d ago | 34m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.95% | 99.95% | 2142 ms | → 0.98x | 1 | 0s | 20d ago | 33m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 938 ms | → 1.02x | 0 | — | — | 32m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.81% | 98.81% | 1058 ms | ↓ 0.57x | 0 | — | — | 36m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.08% | 99.08% | 618 ms | ↓ 0.74x | 0 | — | — | 33m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 40.15% | 40.15% | 515 ms | ↓ 0.51x | 0 | — | — | 43m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1430 ms | ↓ 0.73x | 0 | — | — | 32m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.93% | 99.87% | 99.87% | 1196 ms | ↓ 0.64x | 1 | 0s | 13d ago | 35m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.21% | 97.21% | 2458 ms | ↓ 0.86x | 0 | — | — | 38m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 100.00% | 98.92% | 98.92% | 1241 ms | → 1.00x | 0 | — | — | 45m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 895 ms | ↓ 0.69x | 0 | — | — | 32m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.85% | 97.03% | 97.03% | 491 ms | ↓ 0.57x | 2 | 0s | 20d ago | 37m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1476 ms | ↓ 0.81x | 1 | 0s | 18d ago | 33m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.56% | 98.56% | 2661 ms | ↓ 0.61x | 0 | — | — | 37m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.63% | 99.67% | 99.67% | 1249 ms | ↓ 0.77x | 3 | 19m | 24d ago | 34m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 878 ms | ↓ 0.63x | 1 | 0s | 26d ago | 32m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.90% | 97.90% | 1336 ms | ↓ 0.89x | 0 | — | — | 38m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 374 ms | ↓ 0.57x | 1 | 0s | 17d ago | 44m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.76% | 99.76% | 3442 ms | ↑ 1.09x | 1 | 0s | 17d ago | 44m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.10% | 99.10% | 278 ms | ↓ 0.72x | 1 | 0s | 17d ago | 37m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.65% | 99.02% | 99.02% | 4100 ms | ↓ 0.83x | 5 | 0s | 10d ago | 45m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.98% | 97.98% | 3274 ms | ↓ 0.76x | 0 | — | — | 46m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.83% | 99.64% | 99.64% | 1695 ms | ↓ 0.86x | 2 | 3h 20m | 20d ago | 37m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.69% | 96.69% | 678 ms | ↓ 0.60x | 0 | — | — | 37m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 909 ms | ↓ 0.73x | 0 | — | — | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 553 ms | ↓ 0.27x | 0 | — | — | 32m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.93% | 99.10% | 99.10% | 2553 ms | ↓ 0.74x | 1 | 0s | 21d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.93% | 99.87% | 99.87% | 1236 ms | ↓ 0.68x | 1 | 0s | 30d ago | 35m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.88% | 99.88% | 1204 ms | ↑ 1.78x | 0 | — | — | 32m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.26% | 99.33% | 99.33% | 267 ms | ↓ 0.60x | 9 | 2m | 9d ago | 33m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 91.90% | 91.90% | 91.90% | 695 ms | ↓ 0.44x | 20 | 1h 59m | 13d ago | 32m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 2973 ms | ↓ 0.73x | 0 | — | — | 43m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.74% | 99.74% | 902 ms | ↑ 1.06x | 0 | — | — | 36m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.80% | 96.80% | 1770 ms | ↓ 0.61x | 1 | 0s | 18d ago | 35m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 100.00% | 98.11% | 98.11% | 3308 ms | ↑ 1.06x | 0 | — | — | 37m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 993 ms | ↓ 0.83x | 0 | — | — | 33m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 632 ms | ↑ 1.33x | 0 | — | — | 33m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 97.00% | 97.00% | 512 ms | ↓ 0.61x | 0 | — | — | 38m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 683 ms | ↓ 0.77x | 0 | — | — | 32m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 57.00% | 57.00% | 762 ms | ↓ 0.40x | 0 | — | — | 41m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.45% | 98.72% | 98.72% | 699 ms | ↓ 0.94x | 2 | 4h 33m | 28d ago | 32m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.98% | 99.98% | 872 ms | ↓ 0.57x | 0 | — | — | 32m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 3169 ms | ↓ 0.72x | 0 | — | — | 43m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.63% | 87.87% | 87.87% | 839 ms | ↓ 0.63x | 4 | 8m | 13d ago | 32m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.28% | 97.28% | 1077 ms | ↓ 0.91x | 0 | — | — | 43m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.78% | 99.09% | 99.09% | 1367 ms | ↑ 1.14x | 2 | 10m | 12d ago | 32m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.18% | 99.18% | 785 ms | ↓ 0.66x | 1 | 0s | 26d ago | 38m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.86% | 50.25% | 50.25% | 1835 ms | ↓ 0.70x | 8 | 1h 3m | 16d ago | 44m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.58% | 84.58% | 2028 ms | ↓ 0.65x | 0 | — | — | 39m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.78% | 68.49% | 68.49% | 1172 ms | ↓ 0.86x | 2 | 10m | 19d ago | 39m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1098 ms | ↑ 1.28x | 0 | — | — | 33m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.85% | 98.85% | 2008 ms | ↓ 0.71x | 0 | — | — | 37m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3040 ms | ↓ 0.70x | 0 | — | — | 32m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.26% | 93.26% | 540 ms | ↓ 0.69x | 0 | — | — | 40m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 100.00% | 98.67% | 98.70% | 98.70% | 1734 ms | ↓ 0.62x | 18 | 0s | 11d ago | 32m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.83% | 98.83% | 1144 ms | ↓ 0.71x | 0 | — | — | 36m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.86% | 99.86% | 656 ms | ↑ 1.28x | 0 | — | — | 37m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.51% | 99.51% | 664 ms | ↓ 0.65x | 0 | — | — | 34m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.92% | 99.92% | 99.92% | 800 ms | ↓ 0.49x | 1 | 0s | 15d ago | 32m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.16% | 98.16% | 3330 ms | ↑ 1.41x | 1 | 0s | 29d ago | 37m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.93% | 50.15% | 50.15% | 860 ms | ↓ 0.45x | 1 | 0s | 19d ago | 41m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.63% | 96.87% | 96.87% | 1083 ms | ↓ 0.89x | 1 | 2h 1m | 21d ago | 32m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.43% | 56.98% | 56.98% | 1373 ms | ↓ 0.89x | 8 | 0s | 15d ago | 44m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 913 ms | ↓ 0.69x | 0 | — | — | 32m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 100.00% | 98.47% | 69.01% | 69.01% | 4349 ms | ↓ 0.75x | 17 | 7m | 13d ago | 39m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.37% | 98.37% | 2520 ms | → 0.96x | 0 | — | — | 38m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.78% | 54.70% | 54.70% | 829 ms | ↓ 0.58x | 3 | 0s | 19d ago | 41m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 787 ms | ↓ 0.95x | 0 | — | — | 32m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.98% | 99.98% | 1210 ms | ↓ 0.40x | 0 | — | — | 32m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 998 ms | → 0.98x | 0 | — | — | 32m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.85% | 99.85% | 99.85% | 1515 ms | ↓ 0.71x | 2 | 0s | 21d ago | 32m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.85% | 64.92% | 64.92% | 527 ms | ↓ 0.61x | 2 | 0s | 19d ago | 39m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.12% | 98.12% | 2729 ms | ↑ 1.21x | 0 | — | — | 41m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.89% | 99.89% | 1770 ms | ↓ 0.73x | 0 | — | — | 33m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.90% | 99.34% | 99.34% | 2327 ms | ↓ 0.69x | 3 | 8h 57m | 24d ago | 43m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.65% | 62.65% | 1293 ms | ↓ 0.88x | 0 | — | — | 40m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.57% | 65.57% | 937 ms | ↓ 0.56x | 0 | — | — | 40m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.71% | 99.89% | 99.89% | 1062 ms | ↓ 0.80x | 1 | 1h 9m | 23d ago | 34m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.27% | 99.27% | 1697 ms | ↓ 0.76x | 0 | — | — | 39m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.78% | 90.95% | 90.95% | 1841 ms | ↓ 0.74x | 3 | 0s | 8d ago | 39m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1439 ms | → 1.00x | 0 | — | — | 37m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.61% | 99.61% | 505 ms | ↓ 0.62x | 0 | — | — | 39m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.60% | 98.00% | 98.00% | 776 ms | ↓ 0.38x | 1 | 12h 2m | 24d ago | 39m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 90.72% | 91.43% | 91.43% | 2255 ms | ↓ 0.77x | 2 | 1d 3h | 27d ago | 32m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.93% | 22.94% | 22.94% | 848 ms | ↓ 0.44x | 1 | 0s | 16d ago | 44m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1359 ms | ↓ 0.65x | 0 | — | — | 32m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.09% | 99.09% | 2782 ms | ↓ 0.72x | 0 | — | — | 46m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 95.82% | 99.49% | 99.49% | 3270 ms | → 0.97x | 3 | 9h 27m | 12d ago | 48m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.29% | 98.29% | 3001 ms | ↓ 0.88x | 0 | — | — | 48m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 783 ms | ↓ 0.88x | 1 | 0s | 17d ago | 44m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.59% | 77.59% | 2204 ms | ↓ 0.91x | 0 | — | — | 38m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 1099 ms | ↓ 0.89x | 1 | 0s | 14d ago | 33m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2397 ms | ↑ 1.09x | 0 | — | — | 32m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.34% | 98.40% | 98.40% | 870 ms | ↓ 0.66x | 7 | 8m | 25d ago | 32m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 99.70% | 99.70% | 1377 ms | ↓ 0.87x | 0 | — | — | 34m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1611 ms | → 0.97x | 0 | — | — | 48m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.74% | 99.74% | 604 ms | ↓ 0.49x | 0 | — | — | 48m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.93% | 99.65% | 99.65% | 1498 ms | ↓ 0.66x | 1 | 0s | 30d ago | 46m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.32% | 90.32% | 908 ms | ↓ 0.76x | 0 | — | — | 39m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.63% | 81.12% | 81.12% | 1695 ms | ↓ 0.80x | 3 | 20m | 14d ago | 37m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.84% | 99.84% | 1047 ms | ↓ 0.89x | 0 | — | — | 47m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 834 ms | ↑ 1.29x | 0 | — | — | 33m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.84% | 86.84% | 2150 ms | ↓ 0.86x | 0 | — | — | 36m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1231 ms | ↓ 0.49x | 0 | — | — | 32m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1799 ms | ↓ 0.84x | 0 | — | — | 36m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.09% | 99.09% | 403 ms | ↓ 0.48x | 0 | — | — | 41m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.79% | 97.79% | 1781 ms | ↓ 0.77x | 0 | — | — | 36m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 100.00% | 21.32% | 26.42% | 26.42% | 2458 ms | → 0.98x | 1 | 20d 6h | 30d ago | 37m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 100.00% | 99.94% | 99.94% | 1414 ms | ↓ 0.85x | 0 | — | — | 32m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1471 ms | ↓ 0.91x | 1 | 0s | 25d ago | 33m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 852 ms | ↓ 0.54x | 1 | 0s | 30d ago | 32m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1462 ms | ↓ 0.69x | 0 | — | — | 32m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.71% | 98.16% | 98.16% | 617 ms | ↓ 0.58x | 4 | 0s | 8d ago | 35m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.85% | 98.96% | 98.96% | 668 ms | ↑ 1.91x | 1 | 29m | 17d ago | 37m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.93% | 99.25% | 99.25% | 1140 ms | ↓ 0.87x | 1 | 0s | 14d ago | 34m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.03% | 99.03% | 2496 ms | ↓ 0.81x | 0 | — | — | 41m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 91.98% | 91.98% | 728 ms | ↓ 0.89x | 0 | — | — | 34m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.57% | 22.80% | 22.80% | 2099 ms | ↓ 0.64x | 5 | 6m | 11d ago | 43m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.85% | 99.85% | 929 ms | ↑ 1.29x | 0 | — | — | 32m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.92% | 99.92% | 834 ms | ↓ 0.43x | 0 | — | — | 32m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 26.83% | 26.83% | 1623 ms | ↓ 0.59x | 0 | — | — | 41m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2141 ms | ↓ 0.59x | 0 | — | — | 48m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.34% | 98.81% | 98.81% | 173 ms | ↓ 0.38x | 4 | 38m | 15d ago | 37m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 730 ms | ↑ 1.07x | 0 | — | — | 46m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.43% | 98.43% | 1133 ms | ↓ 0.58x | 1 | 0s | 21d ago | 35m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.86% | 99.74% | 99.74% | 2432 ms | ↓ 0.83x | 2 | 0s | 16d ago | 46m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.24% | 98.24% | 1572 ms | ↑ 1.22x | 0 | — | — | 38m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.85% | 22.80% | 22.80% | 598 ms | ↓ 0.56x | 2 | 0s | 19d ago | 41m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 406 ms | ↓ 0.47x | 0 | — | — | 48m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 100.00% | 99.77% | 99.77% | 1508 ms | ↓ 0.69x | 0 | — | — | 42m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2628 ms | ↑ 1.38x | 0 | — | — | 46m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.85% | 99.94% | 99.94% | 2297 ms | ↓ 0.86x | 1 | 21m | 15d ago | 33m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 100.00% | 100.00% | 100.00% | 100.00% | 845 ms | → 1.00x | 0 | — | — | 32m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 69.67% | 34.65% | 34.65% | 1301 ms | ↓ 0.86x | 2 | 3d 14h | 19d ago | 39m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 97.52% | 98.00% | 98.00% | 1270 ms | ↓ 0.68x | 16 | 33m | 29d ago | 46m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.68% | 99.68% | 2105 ms | ↓ 0.84x | 0 | — | — | 43m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 100.00% | 99.37% | 99.37% | 1830 ms | ↓ 0.80x | 0 | — | — | 41m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 45.58% | 45.58% | 541 ms | ↓ 0.60x | 1 | 0s | 29d ago | 48m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.66% | 98.66% | 1202 ms | ↓ 0.66x | 1 | 0s | 17d ago | 37m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.19% | 93.06% | 93.06% | 694 ms | ↓ 0.61x | 9 | 7m | 13d ago | 35m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.96% | 99.96% | 1008 ms | ↓ 0.70x | 0 | — | — | 46m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.48% | 99.48% | 2515 ms | ↓ 0.85x | 0 | — | — | 43m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 98.97% | 99.73% | 99.73% | 270 ms | ↑ 1.38x | 10 | 10m | 16d ago | 46m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 100.00% | 99.83% | 99.83% | 1370 ms | ↓ 0.88x | 0 | — | — | 38m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.93% | 22.32% | 22.32% | 689 ms | ↓ 0.66x | 1 | 0s | 26d ago | 46m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 1904 ms | ↓ 0.71x | 0 | — | — | 39m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 591 ms | ↑ 1.32x | 0 | — | — | 32m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.56% | 91.09% | 91.09% | 923 ms | ↓ 0.72x | 6 | 0s | 11d ago | 39m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.65% | 99.65% | 540 ms | ↓ 0.54x | 0 | — | — | 47m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 99.27% | 96.18% | 96.18% | 2711 ms | ↓ 0.78x | 4 | 41m | 9d ago | 38m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.78% | 24.91% | 24.91% | 634 ms | ↓ 0.67x | 2 | 0s | 13d ago | 41m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 81.74% | 88.31% | 88.31% | 504 ms | ↓ 0.70x | 4 | 1d 2h | 22d ago | 32m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 2371 ms | ↓ 0.85x | 0 | — | — | 46m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.29% | 99.29% | 99.29% | 1713 ms | ↓ 0.71x | 1 | 2h 37m | 19d ago | 32m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.13% | 66.41% | 66.41% | 1380 ms | ↑ 1.12x | 2 | 2h 18m | 19d ago | 41m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.93% | 89.73% | 89.73% | 1421 ms | ↓ 0.80x | 1 | 0s | 26d ago | 46m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.93% | 24.54% | 24.54% | 1340 ms | ↓ 0.74x | 1 | 0s | 23d ago | 41m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.85% | 99.00% | 99.00% | 2543 ms | ↑ 1.12x | 1 | 30m | 23d ago | 38m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.93% | 99.90% | 99.90% | 685 ms | ↓ 0.41x | 1 | 0s | 29d ago | 46m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1017 ms | ↓ 0.78x | 0 | — | — | 47m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 49.44% | 49.44% | 215 ms | → 1.00x | 1 | 0s | 29d ago | 38m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.62% | 99.62% | 896 ms | ↓ 0.72x | 1 | 0s | 14d ago | 47m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.98% | 99.98% | 1156 ms | ↓ 0.72x | 0 | — | — | 32m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 96.91% | 98.87% | 98.87% | 2447 ms | ↓ 0.64x | 2 | 8h 60m | 20d ago | 46m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.69% | 98.69% | 1467 ms | ↓ 0.72x | 0 | — | — | 36m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 20.22% | 40.01% | 40.01% | 1027 ms | ↓ 0.92x | 1 | 21d 21h | 30d ago | 45m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.63% | 98.35% | 98.35% | 883 ms | ↑ 1.38x | 1 | 1h 40m | 21d ago | 36m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.79% | 71.79% | 1077 ms | ↓ 0.86x | 0 | — | — | 39m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1214 ms | ↓ 0.74x | 0 | — | — | 32m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1026 ms | ↓ 0.91x | 0 | — | — | 32m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 82.26% | 82.26% | 1754 ms | ↓ 0.62x | 1 | 0s | 29d ago | 39m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1607 ms | ↓ 0.56x | 0 | — | — | 46m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 1207 ms | ↑ 1.32x | 0 | — | — | 32m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 100.00% | 99.87% | 99.87% | 591 ms | ↓ 0.84x | 0 | — | — | 42m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 85.61% | 38.36% | 38.36% | 1872 ms | ↓ 0.89x | 13 | 5h 46m | 21d ago | 40m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 99.05% | 32.92% | 32.92% | 2573 ms | ↑ 1.09x | 2 | 2h 31m | 30d ago | 35m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 96.48% | 56.84% | 56.84% | 1262 ms | ↑ 1.85x | 8 | 2h 1m | 13d ago | 37m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.85% | 91.87% | 91.87% | 657 ms | ↑ 1.41x | 1 | 30m | 11d ago | 37m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.35% | 99.35% | 2298 ms | ↓ 0.87x | 0 | — | — | 39m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.85% | 69.42% | 69.42% | 1205 ms | ↓ 0.92x | 2 | 0s | 15d ago | 39m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.88% | 96.88% | 1086 ms | ↓ 0.85x | 0 | — | — | 39m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.89% | 99.89% | 1452 ms | ↓ 0.84x | 0 | — | — | 32m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.93% | 24.53% | 24.53% | 1916 ms | ↓ 0.82x | 1 | 0s | 16d ago | 43m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2422 ms | ↓ 0.82x | 0 | — | — | 47m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.71% | 97.84% | 97.84% | 714 ms | ↑ 1.24x | 2 | 31m | 18d ago | 33m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1390 ms | ↓ 0.77x | 1 | 0s | 27d ago | 34m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3510 ms | ↓ 0.80x | 0 | — | — | 33m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 97.35% | 98.56% | 98.56% | 2199 ms | → 0.99x | 5 | 2h 28m | 11d ago | 33m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.60% | 60.60% | 1220 ms | ↑ 1.51x | 0 | — | — | 40m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.40% | 98.38% | 98.38% | 1652 ms | ↓ 0.91x | 2 | 3h 26m | 13d ago | 38m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 44.98% | 44.98% | 3154 ms | ↓ 0.81x | 0 | — | — | 39m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1129 ms | → 0.95x | 0 | — | — | 32m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.26% | 99.26% | 2995 ms | ↓ 0.67x | 0 | — | — | 43m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 2708 ms | ↓ 0.82x | 0 | — | — | 47m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2043 ms | ↓ 0.77x | 0 | — | — | 38m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.67% | 98.92% | 98.92% | 2186 ms | ↑ 1.11x | 10 | 19m | 12d ago | 33m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.31% | 99.31% | 2032 ms | ↓ 0.68x | 0 | — | — | 39m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 81.07% | 81.07% | 1502 ms | ↑ 1.43x | 0 | — | — | 39m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 186 ms | ↓ 0.59x | 0 | — | — | 47m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.43% | 69.98% | 69.98% | 4055 ms | ↓ 0.94x | 5 | 14m | 16d ago | 44m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1906 ms | ↓ 0.69x | 0 | — | — | 46m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1003 ms | ↓ 0.73x | 0 | — | — | 33m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 1602 ms | ↓ 0.85x | 1 | 0s | 21d ago | 43m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.56% | 99.56% | 3131 ms | → 0.97x | 1 | 0s | 24d ago | 47m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.53% | 81.53% | 1767 ms | ↓ 0.56x | 0 | — | — | 39m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.63% | 87.63% | 2086 ms | ↑ 1.21x | 0 | — | — | 39m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.63% | 99.81% | 99.81% | 1135 ms | ↓ 0.66x | 2 | 36m | 13d ago | 33m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.32% | 96.32% | 1364 ms | ↓ 0.68x | 1 | 0s | 19d ago | 41m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 100.00% | 32.84% | 46.51% | 46.51% | 158 ms | ↓ 0.21x | 4 | 4d 7h | 8d ago | 37m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1749 ms | → 1.04x | 0 | — | — | 46m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.73% | 98.73% | 713 ms | ↓ 0.72x | 0 | — | — | 37m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 26.68% | 26.68% | 716 ms | ↓ 0.73x | 0 | — | — | 40m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.86% | 97.86% | 397 ms | ↓ 0.53x | 1 | 0s | 27d ago | 35m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 779 ms | ↓ 0.71x | 0 | — | — | 37m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.68% | 63.68% | 2207 ms | ↓ 0.80x | 1 | 0s | 19d ago | 39m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 44.94% | 44.94% | 361 ms | ↓ 0.37x | 0 | — | — | 46m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.63% | 93.73% | 93.73% | 60 ms | ↑ 1.32x | 1 | 1h 22m | 16d ago | 35m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.93% | 98.94% | 98.94% | 1110 ms | ↓ 0.94x | 1 | 0s | 7d ago | 46m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.56% | 96.79% | 96.79% | 2993 ms | ↓ 0.58x | 5 | 6m | 13d ago | 41m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 23.11% | 23.11% | 832 ms | ↓ 0.55x | 0 | — | — | 46m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 498 ms | ↓ 0.41x | 0 | — | — | 33m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.60% | 99.60% | 2781 ms | ↓ 0.87x | 1 | 0s | 23d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 1635 ms | ↓ 0.36x | 0 | — | — | 34m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 454 ms | ↓ 0.72x | 0 | — | — | 33m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 56.96% | 95.68% | 95.68% | 2667 ms | ↓ 0.87x | 2 | 4d 7h | 17d ago | 48m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.64% | 25.33% | 25.33% | 1155 ms | ↓ 0.59x | 4 | 0s | 13d ago | 41m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.77% | 93.77% | 4818 ms | → 1.05x | 0 | — | — | 46m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.97% | 99.97% | 1658 ms | ↓ 0.66x | 1 | 0s | 19d ago | 39m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.05% | 98.47% | 98.47% | 2884 ms | ↓ 0.69x | 5 | 42m | 8d ago | 37m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.30% | 99.30% | 746 ms | ↓ 0.69x | 0 | — | — | 37m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1451 ms | ↓ 0.88x | 0 | — | — | 33m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 98.93% | 49.73% | 49.73% | 1412 ms | ↑ 1.11x | 6 | 35m | 10d ago | 47m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.49% | 99.49% | 1014 ms | ↓ 0.68x | 0 | — | — | 46m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 72.68% | 89.02% | 89.02% | 1128 ms | ↓ 0.69x | 1 | 6d 16h | 30d ago | 46m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.95% | 98.95% | 2397 ms | ↓ 0.58x | 0 | — | — | 35m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.85% | 99.66% | 99.66% | 1040 ms | ↓ 0.86x | 2 | 0s | 21d ago | 32m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.93% | 99.82% | 99.82% | 670 ms | ↓ 0.85x | 1 | 0s | 11d ago | 35m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.57% | 89.57% | 1844 ms | ↓ 0.79x | 0 | — | — | 38m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.86% | 99.86% | 805 ms | ↓ 0.77x | 0 | — | — | 35m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1439 ms | ↓ 0.73x | 0 | — | — | 34m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1301 ms | ↓ 0.68x | 0 | — | — | 46m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1379 ms | → 0.95x | 0 | — | — | 47m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 99.94% | 99.94% | 1000 ms | ↓ 0.57x | 0 | — | — | 32m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.76% | 99.76% | 853 ms | ↓ 0.47x | 0 | — | — | 48m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 100.00% | 90.62% | 83.10% | 83.10% | 1050 ms | ↓ 0.51x | 21 | 3h 16m | 8d ago | 36m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.89% | 76.89% | 728 ms | ↓ 0.76x | 1 | 0s | 17d ago | 37m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.86% | 99.87% | 99.87% | 2389 ms | ↓ 0.77x | 2 | 0s | 8d ago | 44m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 758 ms | ↓ 0.66x | 0 | — | — | 45m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.28% | 85.28% | 1434 ms | ↓ 0.88x | 0 | — | — | 43m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.56% | 98.90% | 98.90% | 1633 ms | ↓ 0.77x | 2 | 60m | 18d ago | 38m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.37% | 98.37% | 1751 ms | ↓ 0.65x | 0 | — | — | 36m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1095 ms | ↓ 0.53x | 1 | 0s | 26d ago | 32m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.93% | 99.86% | 99.86% | 1414 ms | ↓ 0.84x | 1 | 0s | 17d ago | 32m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 98.04% | 98.04% | 3043 ms | ↓ 0.74x | 0 | — | — | 34m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.29% | 96.10% | 96.10% | 1530 ms | ↓ 0.89x | 4 | 6h 14m | 22d ago | 34m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.88% | 98.88% | 1372 ms | ↓ 0.84x | 0 | — | — | 39m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.67% | 99.67% | 1832 ms | ↓ 0.70x | 0 | — | — | 33m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.78% | 98.12% | 98.12% | 3047 ms | ↓ 0.72x | 2 | 10m | 15d ago | 37m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1215 ms | → 0.99x | 0 | — | — | 33m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.74% | 98.74% | 1011 ms | ↓ 0.79x | 3 | 10m | 26d ago | 38m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 99.85% | 99.88% | 99.88% | 3312 ms | ↓ 0.49x | 2 | 0s | 8d ago | 32m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.96% | 32.96% | 910 ms | ↓ 0.55x | 0 | — | — | 45m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 100.00% | 97.01% | 87.06% | 87.06% | 4262 ms | ↓ 0.88x | 30 | 10m | 12d ago | 38m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 1012 ms | ↓ 0.85x | 0 | — | — | 38m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.48% | 98.48% | 1843 ms | ↓ 0.74x | 1 | 0s | 21d ago | 38m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 72.90% | 60.70% | 60.70% | 1053 ms | ↓ 0.79x | 1 | 6d 10h | 30d ago | 32m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.40% | 89.40% | 2225 ms | ↓ 0.58x | 0 | — | — | 39m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.91% | 17.31% | 17.31% | 1529 ms | ↓ 0.68x | 1 | 0s | 16d ago | 44m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.73% | 96.73% | 2758 ms | ↓ 0.84x | 1 | 0s | 20d ago | 41m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 23.12% | 23.12% | 1878 ms | → 1.01x | 0 | — | — | 46m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 24.63% | 24.63% | 2320 ms | ↓ 0.64x | 1 | 0s | 20d ago | 41m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 22.68% | 22.68% | 1567 ms | ↓ 0.75x | 0 | — | — | 41m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.78% | 99.76% | 99.76% | 2948 ms | ↓ 0.66x | 3 | 0s | 16d ago | 37m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 99.34% | 97.10% | 97.10% | 1051 ms | ↓ 0.60x | 4 | 35m | 9d ago | 35m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 99.76% | 99.76% | 2672 ms | → 0.99x | 0 | — | — | 33m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2767 ms | → 0.96x | 0 | — | — | 37m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1262 ms | ↓ 0.63x | 0 | — | — | 46m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 99.92% | 99.92% | 99.92% | 803 ms | ↓ 0.47x | 1 | 0s | 9d ago | 32m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 1887 ms | ↑ 1.23x | 0 | — | — | 45m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.17% | 99.17% | 1164 ms | ↓ 0.72x | 0 | — | — | 46m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 971 ms | ↑ 1.32x | 0 | — | — | 46m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1196 ms | ↑ 2.20x | 0 | — | — | 32m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.63% | 99.98% | 98.92% | 98.92% | 4158 ms | → 1.03x | 1 | 0s | 6d ago | 49m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.63% | 99.34% | 98.78% | 98.78% | 4336 ms | ↓ 0.88x | 26 | 4s | 6d ago | 49m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.63% | 99.89% | 98.93% | 98.93% | 2684 ms | → 1.00x | 2 | 0s | 3d ago | 48m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.63% | 99.57% | 99.28% | 99.28% | 640 ms | ↓ 0.38x | 4 | 22m | 2d ago | 48m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.63% | 99.58% | 64.20% | 64.20% | 2757 ms | → 1.00x | 7 | 0s | 4d ago | 47m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.62% | 99.38% | 23.09% | 23.09% | 2100 ms | ↓ 0.77x | 8 | 8m | 6d ago | 46m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.62% | 99.58% | 86.23% | 86.23% | 2122 ms | ↓ 0.83x | 7 | 0s | 6d ago | 47m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.62% | 98.63% | 99.58% | 99.58% | 2585 ms | ↓ 0.91x | 19 | 2m | 3d ago | 46m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.62% | 98.49% | 51.41% | 51.41% | 3238 ms | ↑ 1.07x | 11 | 25m | 5d ago | 46m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.62% | 99.93% | 98.78% | 98.78% | 1887 ms | ↓ 0.85x | 1 | 0s | 2d ago | 45m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.62% | 99.93% | 99.92% | 99.92% | 1547 ms | ↓ 0.90x | 1 | 0s | 2d ago | 45m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.62% | 99.86% | 99.87% | 99.87% | 1594 ms | ↓ 0.83x | 2 | 0s | 2d ago | 45m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.62% | 99.79% | 99.92% | 99.92% | 1101 ms | ↑ 1.34x | 2 | 10m | 13h ago | 46m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.62% | 99.31% | 99.62% | 99.62% | 1899 ms | ↓ 0.77x | 2 | 1h 60m | 2d ago | 45m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.62% | 99.71% | 80.20% | 80.20% | 1415 ms | ↓ 0.78x | 4 | 0s | 2d ago | 43m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.62% | 99.21% | 98.93% | 98.93% | 1370 ms | ↓ 0.84x | 8 | 10m | 6d ago | 43m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.62% | 99.71% | 97.94% | 97.94% | 2440 ms | ↓ 0.62x | 2 | 30m | 5d ago | 43m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.62% | 96.77% | 97.00% | 97.00% | 1160 ms | ↓ 0.52x | 5 | 3h 14m | 3d ago | 35m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.62% | 98.42% | 22.30% | 22.30% | 3291 ms | ↓ 0.74x | 22 | 0s | 2d ago | 43m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.62% | 99.93% | 90.79% | 90.79% | 1154 ms | → 1.01x | 1 | 0s | 2d ago | 36m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.62% | 99.93% | 77.97% | 77.97% | 893 ms | ↓ 0.49x | 1 | 0s | 1d ago | 39m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.62% | 99.93% | 99.71% | 99.71% | 664 ms | ↓ 0.54x | 1 | 0s | 2d ago | 35m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.62% | 99.93% | 63.14% | 63.14% | 1244 ms | ↓ 0.84x | 1 | 0s | 2d ago | 40m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.62% | 96.26% | 84.74% | 84.74% | 1142 ms | ↓ 0.64x | 2 | 10h | 6d ago | 35m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.62% | 98.97% | 98.88% | 98.88% | 1555 ms | → 1.00x | 2 | 2h 55m | 2d ago | 34m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.62% | 99.78% | 89.89% | 89.89% | 811 ms | ↓ 0.52x | 3 | 0s | 23h ago | 33m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.62% | 99.93% | 99.93% | 99.93% | 766 ms | ↓ 0.59x | 1 | 0s | 2d ago | 35m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.62% | 99.85% | 96.94% | 96.94% | 1056 ms | ↑ 1.07x | 2 | 0s | 2d ago | 36m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.62% | 99.64% | 93.16% | 93.16% | 916 ms | ↓ 0.79x | 3 | 17m | 5d ago | 38m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.62% | 98.47% | 86.83% | 86.83% | 4003 ms | ↓ 0.63x | 20 | 2m | 7d ago | 41m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 99.62% | 96.22% | 83.85% | 83.85% | 4606 ms | ↓ 0.76x | 46 | 4m | 6d ago | 38m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.62% | 98.75% | 97.35% | 97.35% | 1756 ms | ↓ 0.81x | 5 | 1h 8m | 6d ago | 34m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.62% | 99.93% | 97.48% | 97.48% | 1539 ms | ↓ 0.58x | 1 | 0s | 24h ago | 36m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.62% | 99.93% | 98.78% | 98.78% | 1337 ms | ↓ 0.70x | 1 | 0s | 4h ago | 36m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.62% | 99.75% | 99.75% | 99.75% | 1339 ms | ↓ 0.94x | 3 | 0s | 14h ago | 32m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.62% | 99.93% | 99.93% | 99.93% | 1189 ms | ↑ 1.10x | 1 | 0s | 1d ago | 32m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.62% | 98.09% | 93.54% | 93.54% | 4296 ms | ↓ 0.68x | 25 | 2m | 3d ago | 32m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.62% | 99.67% | 99.67% | 99.67% | 1259 ms | ↑ 1.08x | 1 | 0s | 3d ago | 32m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.62% | 99.78% | 98.05% | 98.05% | 511 ms | ↓ 0.55x | 3 | 0s | 1d ago | 32m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.62% | 99.78% | 99.85% | 99.85% | 1213 ms | ↓ 0.46x | 3 | 0s | 2d ago | 32m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 99.62% | 98.23% | 99.06% | 99.06% | 843 ms | ↑ 1.17x | 5 | 1h 16m | 2d ago | 32m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.62% | 99.77% | 99.77% | 99.77% | 778 ms | ↓ 0.59x | 3 | 0s | 2d ago | 32m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.26% | 99.88% | 93.57% | 93.57% | 2502 ms | ↑ 1.16x | 2 | 27m | 6d ago | 49m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.26% | 99.95% | 99.98% | 99.98% | 827 ms | → 1.01x | 1 | 4m | 6d ago | 49m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.26% | 99.95% | 99.98% | 99.98% | 969 ms | ↑ 2.57x | 1 | 4m | 6d ago | 49m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.26% | 99.88% | 36.33% | 36.33% | 2194 ms | ↑ 1.09x | 3 | 2m | 6d ago | 49m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.26% | 99.86% | 93.42% | 93.42% | 3359 ms | ↑ 1.18x | 3 | 20m | 6d ago | 49m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.25% | 99.89% | 99.60% | 99.60% | 2537 ms | ↑ 1.15x | 1 | 2s | 2d ago | 47m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.25% | 98.46% | 99.74% | 99.74% | 1667 ms | ↓ 0.92x | 6 | 1h 5m | 19h ago | 47m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.25% | 99.86% | 99.74% | 99.74% | 1617 ms | ↓ 0.71x | 1 | 4s | 3d ago | 46m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.25% | 99.52% | 99.64% | 99.64% | 914 ms | ↓ 0.65x | 6 | 48m | 4d ago | 46m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.25% | 99.86% | 86.17% | 86.17% | 709 ms | ↓ 0.83x | 1 | 10s | 6d ago | 46m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.25% | 97.85% | 86.29% | 86.29% | 4019 ms | ↓ 0.72x | 29 | 2m | 2d ago | 45m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.25% | 99.86% | 99.85% | 99.85% | 1847 ms | ↓ 0.72x | 2 | 0s | 18h ago | 45m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.24% | 98.47% | 74.11% | 74.11% | 894 ms | ↓ 0.66x | 6 | 1h 20m | 2d ago | 39m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.24% | 99.26% | 96.88% | 96.88% | 2163 ms | → 1.00x | 9 | 1h 18m | 13h ago | 34m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.24% | 99.56% | 83.18% | 83.18% | 1706 ms | ↓ 0.51x | 5 | 41s | 6d ago | 39m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.24% | 99.71% | 97.75% | 97.75% | 2673 ms | ↑ 1.17x | 4 | 0s | 15h ago | 38m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.24% | 99.78% | 83.46% | 83.46% | 1741 ms | ↓ 0.73x | 3 | 0s | 2d ago | 39m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.24% | 99.35% | 69.87% | 69.87% | 1574 ms | ↑ 1.19x | 9 | 0s | 3d ago | 39m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.24% | 99.34% | 99.34% | 99.34% | 690 ms | ↑ 1.08x | 2 | 0s | 2d ago | 32m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.24% | 99.63% | 99.61% | 99.61% | 2672 ms | ↑ 1.18x | 5 | 0s | 12h ago | 32m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.24% | 99.85% | 99.85% | 99.85% | 1270 ms | ↓ 0.56x | 1 | 3m | 2d ago | 32m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.24% | 99.71% | 99.89% | 99.89% | 952 ms | ↓ 0.52x | 3 | 59s | 3d ago | 32m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.24% | 99.48% | 99.48% | 99.48% | 505 ms | ↑ 1.40x | 1 | 4m | 5d ago | 32m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.24% | 99.49% | 92.20% | 92.20% | 2573 ms | ↓ 0.91x | 7 | 0s | 4d ago | 37m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 99.24% | 96.34% | 85.02% | 85.02% | 4223 ms | ↓ 0.74x | 44 | 3m | 3d ago | 37m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.24% | 98.53% | 98.53% | 98.53% | 1467 ms | ↓ 0.68x | 15 | 7m | 1d ago | 32m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (46)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.90% | 99.40% | 91.98% | 91.98% | 2545 ms | → 1.00x | 23 | 13s | 2d ago | 49m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 98.90% | 87.73% | 78.01% | 78.01% | 3027 ms | ↓ 0.65x | 78 | 2h 13m | 2d ago | 49m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.87% | 99.79% | 99.58% | 99.58% | 1325 ms | ↓ 0.76x | 1 | 2h | 13h ago | 46m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 98.86% | 99.71% | 99.79% | 99.79% | 1579 ms | ↓ 0.82x | 4 | 0s | 19h ago | 43m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.86% | 92.57% | 93.61% | 93.61% | 869 ms | ↓ 0.49x | 70 | 12m | 2d ago | 33m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.86% | 99.49% | 97.57% | 97.57% | 2072 ms | ↓ 0.86x | 7 | 0s | 3d ago | 41m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.86% | 99.04% | 99.34% | 99.34% | 4748 ms | ↑ 1.22x | 11 | 5m | 18h ago | 34m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 98.85% | 99.78% | 99.82% | 99.82% | 1127 ms | ↓ 0.60x | 2 | 2m | 4d ago | 32m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.85% | 99.26% | 99.65% | 99.65% | 1415 ms | ↓ 0.64x | 5 | 36m | 2d ago | 33m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.85% | 73.90% | 92.86% | 92.86% | 3502 ms | ↓ 0.77x | 8 | 17h 53m | 9h ago | 37m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 98.85% | 99.77% | 99.77% | 99.77% | 345 ms | ↑ 1.21x | 2 | 2m | 1d ago | 32m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 98.48% | 99.71% | 59.84% | 59.84% | 2009 ms | ↑ 1.22x | 2 | 60m | 14h ago | 38m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.48% | 99.34% | 98.75% | 98.75% | 1116 ms | ↑ 1.13x | 8 | 17s | 5d ago | 34m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.48% | 96.34% | 98.45% | 98.45% | 3800 ms | ↓ 0.77x | 49 | 1m | 2d ago | 43m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 98.47% | 99.63% | 99.73% | 99.73% | 744 ms | ↓ 0.95x | 2 | 1h 30m | 1d ago | 33m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.47% | 97.23% | 97.23% | 97.23% | 4403 ms | ↓ 0.75x | 33 | 3m | 3d ago | 32m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.47% | 96.99% | 55.07% | 55.07% | 2702 ms | ↓ 0.71x | 39 | 1m | 1d ago | 37m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 98.11% | 98.81% | 34.00% | 34.00% | 1750 ms | ↓ 0.87x | 5 | 50m | 4d ago | 45m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 98.09% | 99.63% | 98.37% | 98.37% | 1822 ms | ↓ 0.88x | 3 | 3m | 4d ago | 32m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 97.71% | 88.37% | 39.39% | 39.39% | 3265 ms | ↓ 0.53x | 130 | 7m | 2d ago | 32m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 97.34% | 98.97% | 83.84% | 83.84% | 1185 ms | ↓ 0.82x | 8 | 17m | 5d ago | 34m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 97.34% | 99.48% | 99.85% | 99.85% | 2061 ms | ↑ 1.51x | 1 | 6h 1m | 21h ago | 33m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.33% | 99.49% | 88.70% | 88.70% | 1698 ms | ↓ 0.78x | 1 | 6h | 10h ago | 37m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 97.04% | 99.58% | 81.33% | 81.33% | 1844 ms | ↓ 0.84x | 1 | 3h | 4d ago | 48m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.96% | 95.42% | 74.00% | 74.00% | 1398 ms | ↓ 0.59x | 19 | 52m | 4d ago | 39m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 96.95% | 99.41% | 99.82% | 99.82% | 2292 ms | ↑ 1.08x | 1 | 7h | 1d ago | 33m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 96.20% | 96.91% | 92.56% | 92.56% | 4790 ms | ↑ 1.27x | 22 | 28m | 14h ago | 34m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 95.82% | 89.10% | 23.40% | 23.40% | 3661 ms | ↓ 0.67x | 113 | 12m | 3d ago | 41m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 95.80% | 98.91% | 98.91% | 98.91% | 939 ms | ↓ 0.95x | 3 | 1h 40m | 2d ago | 32m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 95.42% | 99.12% | 92.63% | 92.63% | 2019 ms | ↓ 0.79x | 3 | 2h 60m | 11h ago | 37m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 94.66% | 98.60% | 98.59% | 98.59% | 2461 ms | → 0.96x | 13 | 12m | 2d ago | 33m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 92.78% | 88.56% | 60.96% | 60.96% | 2255 ms | ↓ 0.62x | 126 | 7m | 2d ago | 36m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 92.48% | 72.21% | 96.31% | 96.31% | 4042 ms | ↓ 0.65x | 271 | 14m | 3d ago | 46m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 89.63% | 75.11% | 94.11% | 94.11% | 2981 ms | ↓ 0.89x | 12 | 7h 28m | 3d ago | 48m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 89.35% | 75.78% | 27.77% | 27.77% | 3199 ms | ↓ 0.56x | 204 | 19m | 3d ago | 39m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 88.55% | 81.66% | 81.99% | 81.99% | 4149 ms | ↓ 0.68x | 186 | 11m | 2d ago | 32m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 86.04% | 75.94% | 63.15% | 63.15% | 4534 ms | ↓ 0.75x | 241 | 13m | 2d ago | 44m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 85.93% | 91.33% | 95.25% | 95.25% | 1429 ms | ↓ 0.83x | 20 | 2h 11m | 2d ago | 35m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 56.27% | 10.76% | 78.14% | 78.14% | 1613 ms | → 1.00x | 96 | 5h 58m | 1d ago | 41m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 52.94% | 5.09% | 50.52% | 50.52% | 2166 ms | ↓ 0.69x | 150 | 3h 48m | 16h ago | 49m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 48.85% | 37.83% | 64.61% | 64.61% | 2454 ms | ↑ 1.08x | 3 | 5d 10h | 8d ago | 37m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 11.41% | 24.58% | 25.43% | 25.43% | 939 ms | ↓ 0.42x | 4 | 5d 20h | 2d ago | 35m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 5.32% | 1.02% | 44.61% | 44.61% | 208 ms | → 1.00x | 1 | 29d 9h | 30d ago | 38m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 3.77% | 0.71% | 3.83% | 3.83% | 383 ms | → 1.00x | 2 | 14d 18h | 14h ago | 44m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 1.91% | 0.37% | 70.73% | 70.73% | 811 ms | → 1.00x | 3 | 9d 21h | 4h ago | 37m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 1.90% | 0.37% | 70.78% | 70.78% | 719 ms | → 1.00x | 3 | 9d 21h | 4h ago | 37m ago |

</details>

<details open>
<summary><strong>🔴 Down (269)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 95.47% | 98.82% | 99.12% | 99.12% | 4352 ms | ↓ 0.88x | 6 | 1h 50m | 12h ago | 45m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 93.51% | 97.73% | 97.75% | 97.75% | 3431 ms | ↓ 0.74x | 10 | 1h 48m | 16h ago | 37m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 92.02% | 97.53% | 91.72% | 91.72% | 1508 ms | ↓ 0.84x | 33 | 55s | 38m ago | 38m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 88.97% | 97.46% | 99.67% | 99.67% | 3025 ms | ↑ 1.43x | 5 | 5h 36m | 1d ago | 41m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 83.59% | 96.22% | 96.22% | 96.22% | 2014 ms | ↓ 0.64x | 5 | 8h 12m | 2d ago | 32m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 81.44% | 92.15% | 20.81% | 20.81% | 3329 ms | ↑ 1.06x | 94 | 6m | 44m ago | 44m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 77.07% | 93.56% | 96.44% | 96.44% | 2109 ms | ↓ 0.68x | 3 | 1d 3h | 11h ago | 46m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 59.09% | 89.58% | 96.06% | 96.06% | 1546 ms | ↓ 0.87x | 7 | 12h 47m | 3d ago | 44m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 51.15% | 90.43% | 90.73% | 90.73% | 1521 ms | ↓ 0.76x | 2 | 1d 20h | 4d ago | 32m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 46.79% | 87.69% | 21.71% | 21.71% | 3025 ms | → 1.05x | 63 | 1h 5m | 45m ago | 45m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 46.56% | 89.54% | 91.09% | 91.09% | 916 ms | ↓ 0.74x | 3 | 1d 7h | 4d ago | 33m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 43.73% | 89.15% | 85.34% | 85.34% | 1381 ms | ↓ 0.51x | 95 | 33m | 2d ago | 36m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 36.36% | 87.96% | 32.40% | 32.40% | 1203 ms | ↑ 1.12x | 2 | 2d 6h | 4d ago | 44m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 34.22% | 41.72% | 75.40% | 75.40% | 4995 ms | ↑ 1.24x | 233 | 1h 17m | 2h ago | 34m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 15.97% | 83.65% | 22.73% | 22.73% | 547 ms | ↓ 0.62x | 4 | 1d 10h | 6d ago | 40m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 13.31% | 83.20% | 66.06% | 66.06% | 3778 ms | ↑ 1.71x | 8 | 16h 58m | 5d ago | 35m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 10.27% | 81.58% | 83.13% | 83.13% | 1328 ms | ↓ 0.65x | 3 | 2d 2h | 5d ago | 35m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 3.03% | 78.71% | 74.22% | 74.22% | 2947 ms | ↓ 0.61x | 35 | 4h 40m | 7d ago | 44m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.38% | 55.16% | 46.41% | 46.41% | 74 ms | ↓ 0.28x | 2 | 8d 8h | 1d ago | 39m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 76.22% | 76.22% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.31% | 63.31% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.14% | 68.14% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 36.21% | 36.21% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.45% | 52.45% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.24% | 10.24% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 71.52% | 88.75% | 88.75% | — | — | 1 | 12d 24h | 13d ago | 34m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.31% | 47.31% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 30.85% | 73.98% | 73.98% | — | — | 9 | 2d 12h | 23d ago | 32m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 3.74% | 79.87% | 79.87% | — | — | 1 | 29d 2h | 29d ago | 35m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 76.65% | 76.65% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 69.58% | 90.16% | 90.16% | — | — | 2 | 6d 16h | 13d ago | 35m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.67% | 83.67% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.23% | 67.23% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.04% | 27.04% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.66% | 84.66% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.27% | 75.27% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.88% | 57.88% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 20h | 29d ago | 48m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 79.11% | 19.82% | 19.82% | — | — | 5 | 1d 14h | 8d ago | 42m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.15% | 13.15% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.49% | 44.49% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.40% | 87.40% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 16.94% | 68.72% | 68.72% | — | — | 1 | 25d 21h | 26d ago | 32m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 79.22% | 98.15% | 98.15% | — | — | 2 | 3d 24h | 8d ago | 44m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 17.88% | 31.35% | 31.35% | — | — | 3 | 8d 13h | 26d ago | 34m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.65% | 78.65% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.12% | 3.12% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 38.95% | 76.23% | 76.23% | — | — | 6 | 3d 10h | 20d ago | 33m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 25.18% | 72.42% | 72.42% | — | — | 1 | 24d | 24d ago | 32m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 77.28% | 77.28% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.43% | 48.90% | 48.90% | — | — | 6 | 4d 23h | 11d ago | 44m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 24.53% | 24.53% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 47.85% | 47.85% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 31.69% | 31.88% | 31.88% | — | — | 3 | 6d 18h | 9d ago | 39m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.90% | 1.90% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.44% | 84.44% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.00% | 32.35% | 32.35% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.70% | 64.70% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 66.50% | 66.50% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 17.88% | 69.31% | 69.31% | — | — | 3 | 8d 13h | 26d ago | 34m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 50.00% | 39.41% | 39.41% | — | — | 4 | 4d 12h | 18d ago | 32m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 49.53% | 64.35% | 64.35% | — | — | 5 | 3d 15h | 18d ago | 39m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.44% | 50.44% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 43.99% | 43.99% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.08% | 22.08% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 68.41% | 68.41% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 62.72% | 32.48% | 32.48% | — | — | 2 | 6d 19h | 10d ago | 41m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 38.66% | 38.66% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.31% | 48.31% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.74% | 46.74% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.67% | 60.67% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 75.24% | 75.24% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.00% | 68.45% | 68.45% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.53% | 73.53% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.18% | 74.18% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 28.40% | 28.40% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 83.99% | 83.99% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.14% | 20.14% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 41.60% | 83.93% | 83.93% | — | — | 1 | 19d 15h | 20d ago | 46m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 16.68% | 16.68% | 16.68% | — | — | 2 | 12d 12h | 25d ago | 32m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 17.88% | 67.75% | 67.75% | — | — | 3 | 8d 13h | 26d ago | 34m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 43.30% | 78.44% | 78.44% | — | — | 3 | 6d 13h | 20d ago | 33m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 17.44% | 74.76% | 74.76% | — | — | 10 | 2d 13h | 26d ago | 34m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 47.91% | 47.91% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 13.43% | 14.22% | 14.22% | — | — | 8 | 3d 5h | 26d ago | 34m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.05% | 6.05% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.75% | 55.75% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.00% | 16.45% | 16.45% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.16% | 39.16% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 16.39% | 74.31% | 74.31% | — | — | 3 | 8d 5h | 25d ago | 48m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.55% | 20.55% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 68.59% | 68.59% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.39% | 54.39% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 35.42% | 75.76% | 75.76% | — | — | 1 | 21d 14h | 22d ago | 33m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.55% | 35.55% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 65.92% | 65.92% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.40% | 62.40% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.34% | 2.34% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 38.64% | 38.64% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.53% | 90.53% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 76.98% | 76.98% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.20% | 30.20% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.11% | 75.11% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.70% | 42.70% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 17.47% | 17.47% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 39.96% | 39.96% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.07% | 66.07% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 58.17% | 58.17% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.33% | 73.33% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 43.48% | 43.48% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.87% | 2.87% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.57% | 39.57% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 70.89% | 70.89% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 54.79% | 54.79% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 4.12% | 20.60% | 20.60% | — | — | 1 | 28d 24h | 29d ago | 33m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 53.00% | 53.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.46% | 82.46% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 10.73% | 92.62% | 92.62% | — | — | 2 | 13d 10h | 27d ago | 47m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.72% | 10.72% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.33% | 22.33% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.11% | 49.11% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 48.47% | 48.47% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.08% | 65.08% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 62.56% | 92.21% | 92.21% | — | — | 2 | 7d 12h | 15d ago | 37m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 7.76% | 7.76% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.23% | 16.23% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 45.98% | 45.98% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.05% | 46.05% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.78% | 16.78% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 88.18% | 88.18% | — | — | 1 | 28d 20h | 29d ago | 42m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.56% | 35.56% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 28.78% | 28.78% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.16% | 5.16% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.68% | 83.68% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 46.82% | 46.82% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 76.88% | 76.88% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.88% | 75.88% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 52.46% | 52.46% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.73% | 68.73% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 75.73% | 75.73% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 22h | 29d ago | 33m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.50% | 35.50% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.58% | 31.58% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.56% | 63.56% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.05% | 54.05% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.61% | 22.61% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 30.93% | 30.93% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 17.88% | 68.78% | 68.78% | — | — | 3 | 8d 13h | 26d ago | 34m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 20h | 29d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.20% | 44.20% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.03% | 38.03% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 29.99% | 29.99% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.17% | 17.17% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.08% | 5.08% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.15% | 10.15% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.75% | 14.75% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 25.49% | 25.49% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 8.99% | 8.99% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.48% | 6.48% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.69% | 0.69% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 68.04% | 76.67% | 76.67% | — | — | 2 | 6d 21h | 14d ago | 32m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 76.90% | 76.90% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.49% | 63.49% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.18% | 40.18% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.23% | 77.23% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.36% | 1.36% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.15% | 75.15% | — | — | 1 | 29d 23h | 30d ago | 41m ago |

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
