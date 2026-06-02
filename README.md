# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**616 providers** — 336 🟢 operational · 45 🟡 degraded · 235 🔴 down · 0 ⚫ unknown

_Updated 2026-06-02 07:27 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (336)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.27% | 93.27% | 718 ms | → 0.99x | 0 | — | — | 13m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.34% | 97.34% | 2476 ms | → 1.04x | 0 | — | — | 24m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 50.87% | 50.87% | 1650 ms | → 1.00x | 2 | 0s | 21d ago | 11m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1188 ms | → 1.05x | 0 | — | — | 6m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.76% | 98.76% | 1588 ms | ↓ 0.89x | 0 | — | — | 26m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.36% | 99.36% | 3249 ms | ↓ 0.89x | 1 | 0s | 12d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.93% | 98.93% | 98.93% | 1829 ms | ↓ 0.94x | 12 | 13m | 14d ago | 7m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.48% | 94.25% | 94.25% | 1925 ms | → 0.99x | 1 | 2h 59m | 30d ago | 8m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1551 ms | → 0.96x | 0 | — | — | 7m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.27% | 97.25% | 97.25% | 2014 ms | → 1.04x | 1 | 4h 31m | 19d ago | 8m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.07% | 92.07% | 1854 ms | → 0.98x | 0 | — | — | 27m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1500 ms | ↑ 1.08x | 1 | 0s | 19d ago | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.83% | 99.83% | 870 ms | → 0.96x | 1 | 0s | 18d ago | 8m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 797 ms | ↑ 1.19x | 0 | — | — | 6m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.95% | 98.40% | 98.40% | 931 ms | → 0.97x | 1 | 0s | 25d ago | 9m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.77% | 96.77% | 1486 ms | → 1.02x | 1 | 0s | 18d ago | 8m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.51% | 98.51% | 1010 ms | ↑ 1.14x | 0 | — | — | 7m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 98.50% | 34.55% | 34.55% | 584 ms | → 1.00x | 1 | 9h 30m | 30d ago | 21m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.91% | 99.91% | 584 ms | ↓ 0.94x | 1 | 0s | 21d ago | 8m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.63% | 96.63% | 96.63% | 2086 ms | → 0.97x | 2 | 50m | 7d ago | 12m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 530 ms | ↓ 0.88x | 1 | 0s | 11d ago | 6m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.33% | 96.33% | 490 ms | → 1.01x | 0 | — | — | 11m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1582 ms | ↓ 0.91x | 1 | 0s | 11d ago | 6m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.10% | 98.10% | 2496 ms | → 1.01x | 1 | 60m | 12d ago | 10m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.67% | 97.67% | 189 ms | ↓ 0.89x | 0 | — | — | 8m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 83.20% | 83.20% | 983 ms | ↓ 0.73x | 0 | — | — | 9m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 1084 ms | → 0.97x | 1 | 0s | 11d ago | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.48% | 80.53% | 80.53% | 1620 ms | → 1.02x | 3 | 50m | 15d ago | 13m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.44% | 97.44% | 1178 ms | ↑ 1.33x | 0 | — | — | 11m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 426 ms | → 0.99x | 0 | — | — | 22m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 98.09% | 95.87% | 95.87% | 2738 ms | ↓ 0.92x | 31 | 4m | 14d ago | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2565 ms | ↓ 0.92x | 1 | 0s | 25d ago | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.90% | 98.90% | 185 ms | ↓ 0.82x | 0 | — | — | 11m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.23% | 97.79% | 97.79% | 3490 ms | → 1.03x | 15 | 0s | 8d ago | 25m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.84% | 99.80% | 99.80% | 1866 ms | ↓ 0.85x | 3 | 0s | 29d ago | 10m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.82% | 95.82% | 1172 ms | ↓ 0.72x | 0 | — | — | 10m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.84% | 99.84% | 594 ms | ↓ 0.61x | 3 | 0s | 11d ago | 6m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.96% | 98.61% | 98.61% | 2626 ms | → 0.97x | 2 | 6h 41m | 10d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.74% | 99.87% | 99.87% | 1011 ms | ↓ 0.89x | 3 | 13m | 15d ago | 8m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 1784 ms | → 0.98x | 0 | — | — | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.84% | 99.84% | 99.84% | 3560 ms | ↓ 0.87x | 3 | 0s | 8d ago | 20m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.38% | 99.45% | 99.45% | 3120 ms | ↓ 0.86x | 4 | 2h 15m | 21d ago | 10m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.95% | 26.93% | 26.93% | 1029 ms | ↓ 0.92x | 1 | 0s | 30d ago | 22m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1302 ms | → 1.02x | 1 | 0s | 11d ago | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1462 ms | ↑ 1.07x | 0 | — | — | 7m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.63% | 97.38% | 97.38% | 1848 ms | ↑ 1.30x | 6 | 4h 32m | 16d ago | 15m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.35% | 96.35% | 880 ms | → 0.99x | 0 | — | — | 12m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.79% | 99.79% | 99.79% | 1872 ms | → 1.02x | 2 | 19m | 20d ago | 6m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 52.63% | 52.63% | 844 ms | → 0.99x | 0 | — | — | 15m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1644 ms | → 1.00x | 0 | — | — | 6m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1177 ms | → 1.03x | 1 | 0s | 11d ago | 6m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3386 ms | → 1.02x | 0 | — | — | 21m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 77.03% | 77.03% | 77.03% | 2578 ms | ↓ 0.93x | 10 | 16h 47m | 8d ago | 6m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.02% | 97.02% | 1589 ms | ↓ 0.87x | 0 | — | — | 21m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.20% | 45.46% | 45.46% | 2207 ms | → 1.03x | 9 | 1h 42m | 13d ago | 21m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.74% | 98.88% | 98.88% | 1477 ms | → 0.99x | 2 | 44m | 10d ago | 7m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.07% | 82.07% | 1756 ms | → 0.95x | 0 | — | — | 13m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1303 ms | ↑ 1.10x | 0 | — | — | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.50% | 98.50% | 1756 ms | ↓ 0.94x | 0 | — | — | 10m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 3631 ms | ↓ 0.92x | 1 | 0s | 11d ago | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.51% | 92.51% | 929 ms | → 1.04x | 1 | 0s | 8d ago | 14m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.41% | 98.41% | 685 ms | → 0.96x | 0 | — | — | 8m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.84% | 99.83% | 99.83% | 285 ms | ↓ 0.87x | 3 | 0s | 12d ago | 11m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 99.06% | 99.08% | 99.08% | 2508 ms | → 1.00x | 12 | 10m | 29d ago | 7m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.69% | 93.06% | 93.06% | 2164 ms | ↓ 0.90x | 10 | 32m | 29d ago | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.69% | 97.65% | 97.65% | 2992 ms | ↓ 0.85x | 6 | 0s | 7d ago | 10m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 74.56% | 87.31% | 87.31% | 662 ms | ↓ 0.68x | 2 | 4d | 17d ago | 8m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 45.06% | 45.06% | 964 ms | → 0.98x | 0 | — | — | 15m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.65% | 74.65% | 756 ms | ↓ 0.95x | 1 | 0s | 19d ago | 13m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 94.12% | 94.12% | 94.12% | 520 ms | ↓ 0.69x | 5 | 7h 21m | 17d ago | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 52.97% | 52.97% | 1403 ms | ↓ 0.89x | 1 | 0s | 12d ago | 22m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1641 ms | ↑ 1.06x | 0 | — | — | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.00% | 98.00% | 1688 ms | ↓ 0.75x | 0 | — | — | 11m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1307 ms | → 0.97x | 1 | 0s | 11d ago | 6m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2241 ms | → 1.00x | 0 | — | — | 6m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.84% | 80.84% | 1298 ms | ↓ 0.93x | 1 | 0s | 18d ago | 13m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.94% | 97.94% | 837 ms | ↓ 0.86x | 1 | 0s | 18d ago | 15m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.79% | 99.79% | 99.79% | 1628 ms | ↑ 1.08x | 3 | 6m | 11d ago | 6m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.84% | 58.17% | 58.17% | 1644 ms | ↓ 0.95x | 3 | 0s | 14d ago | 14m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.48% | 61.48% | 1065 ms | → 0.96x | 0 | — | — | 14m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2568 ms | → 0.99x | 0 | — | — | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.17% | 99.17% | 1425 ms | → 0.96x | 0 | — | — | 14m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.38% | 89.38% | 1716 ms | ↓ 0.92x | 1 | 0s | 20d ago | 13m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 87.19% | 87.19% | 490 ms | ↓ 0.91x | 0 | — | — | 8m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.84% | 99.79% | 99.79% | 2362 ms | ↓ 0.95x | 3 | 0s | 29d ago | 10m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 98.00% | 98.00% | 1848 ms | ↓ 0.91x | 0 | — | — | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 15.72% | 15.72% | 651 ms | ↓ 0.47x | 1 | 0s | 28d ago | 21m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.85% | 99.72% | 99.72% | 1895 ms | → 0.99x | 3 | 0s | 13d ago | 25m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1817 ms | → 1.05x | 0 | — | — | 6m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.69% | 99.00% | 99.00% | 3056 ms | ↑ 1.07x | 2 | 45m | 8d ago | 25m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.08% | 98.08% | 2854 ms | ↓ 0.85x | 0 | — | — | 26m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 72.47% | 72.47% | 1574 ms | ↓ 0.66x | 0 | — | — | 11m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 90.58% | 90.58% | 349 ms | ↑ 1.06x | 3 | 0s | 13d ago | 8m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.38% | 97.43% | 97.43% | 569 ms | ↓ 0.55x | 3 | 5h 59m | 10d ago | 6m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 808 ms | ↑ 1.06x | 1 | 0s | 27d ago | 7m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1174 ms | → 0.96x | 0 | — | — | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.62% | 99.62% | 1698 ms | → 1.01x | 1 | 0s | 14d ago | 24m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.84% | 88.63% | 88.63% | 2014 ms | ↓ 0.95x | 1 | 39m | 25d ago | 13m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 76.01% | 76.01% | 2135 ms | ↓ 0.87x | 0 | — | — | 10m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1024 ms | ↓ 0.75x | 0 | — | — | 6m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 81.50% | 81.50% | 1612 ms | → 0.96x | 0 | — | — | 8m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1579 ms | → 1.01x | 0 | — | — | 6m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1147 ms | → 0.99x | 0 | — | — | 8m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.00% | 99.00% | 484 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.89% | 96.89% | 344 ms | ↓ 0.75x | 0 | — | — | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 1168 ms | → 1.04x | 1 | 0s | 11d ago | 6m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 820 ms | ↓ 0.94x | 1 | 0s | 11d ago | 6m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1742 ms | → 1.00x | 0 | — | — | 6m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.64% | 86.83% | 86.83% | 1271 ms | ↓ 0.91x | 7 | 0s | 10d ago | 25m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.67% | 96.76% | 96.76% | 1742 ms | ↓ 0.89x | 12 | 23m | 28d ago | 7m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.71% | 98.71% | 150 ms | ↓ 0.78x | 0 | — | — | 10m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.93% | 98.93% | 771 ms | → 0.98x | 0 | — | — | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 15.61% | 15.61% | 2515 ms | → 0.97x | 1 | 0s | 29d ago | 20m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.44% | 96.45% | 96.45% | 1272 ms | ↓ 0.82x | 39 | 18m | 11d ago | 6m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 19.38% | 19.38% | 834 ms | ↓ 0.84x | 0 | — | — | 15m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 596 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2508 ms | ↑ 1.66x | 1 | 0s | 16d ago | 26m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 526 ms | ↓ 0.79x | 0 | — | — | 25m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.59% | 97.59% | 1032 ms | ↓ 0.93x | 0 | — | — | 8m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.79% | 99.72% | 99.72% | 2429 ms | → 0.96x | 4 | 0s | 10d ago | 25m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.91% | 97.91% | 1979 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.79% | 99.72% | 99.72% | 622 ms | ↑ 1.24x | 2 | 25m | 17d ago | 26m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.84% | 99.79% | 99.79% | 1334 ms | → 1.00x | 1 | 39m | 25d ago | 16m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1748 ms | ↑ 1.19x | 0 | — | — | 7m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.67% | 98.67% | 4364 ms | → 1.00x | 0 | — | — | 27m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2799 ms | → 0.96x | 0 | — | — | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1325 ms | → 1.02x | 0 | — | — | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2374 ms | ↓ 0.95x | 1 | 0s | 25d ago | 21m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 39.19% | 39.19% | 772 ms | → 1.03x | 0 | — | — | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.37% | 98.37% | 3808 ms | ↓ 0.91x | 0 | — | — | 11m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1072 ms | → 0.99x | 1 | 0s | 19d ago | 25m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.64% | 99.84% | 99.84% | 128 ms | ↓ 0.76x | 5 | 12m | 8d ago | 25m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 96.03% | 14.81% | 14.81% | 714 ms | → 0.98x | 22 | 54m | 13d ago | 25m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1837 ms | → 0.97x | 0 | — | — | 14m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.58% | 99.58% | 1650 ms | → 1.01x | 0 | — | — | 8m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.59% | 89.59% | 1050 ms | → 0.98x | 0 | — | — | 13m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 629 ms | ↓ 0.85x | 0 | — | — | 26m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 58.98% | 58.98% | 1318 ms | ↓ 0.95x | 3 | 0s | 17d ago | 14m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 17.87% | 17.87% | 2423 ms | → 0.96x | 1 | 0s | 16d ago | 15m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2466 ms | → 1.04x | 0 | — | — | 25m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 86.06% | 49.18% | 49.18% | 3559 ms | ↑ 1.05x | 2 | 1d 20h | 9d ago | 16m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.90% | 88.74% | 88.74% | 1863 ms | ↑ 1.19x | 2 | 0s | 12d ago | 24m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.89% | 98.89% | 2492 ms | → 0.97x | 1 | 0s | 9d ago | 12m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.69% | 79.32% | 79.32% | 1913 ms | ↓ 0.92x | 1 | 1h 40m | 30d ago | 26m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 80.65% | 80.65% | 80.65% | 1381 ms | ↑ 1.08x | 1 | 5d 5h | 26d ago | 7m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.74% | 99.90% | 99.90% | 753 ms | ↓ 0.92x | 3 | 17m | 17d ago | 24m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1042 ms | ↓ 0.88x | 0 | — | — | 26m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.64% | 99.64% | 857 ms | → 0.99x | 3 | 7m | 7d ago | 24m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.90% | 37.99% | 37.99% | 194 ms | ↓ 0.89x | 2 | 0s | 16d ago | 11m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 867 ms | ↓ 0.84x | 0 | — | — | 26m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 1111 ms | → 0.97x | 1 | 0s | 11d ago | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.00% | 99.00% | 2414 ms | ↑ 1.11x | 0 | — | — | 24m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.20% | 98.20% | 1145 ms | → 0.97x | 0 | — | — | 8m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.86% | 97.86% | 1384 ms | ↓ 0.75x | 0 | — | — | 9m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 67.88% | 67.88% | 898 ms | → 0.97x | 0 | — | — | 14m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1002 ms | → 1.00x | 0 | — | — | 6m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.42% | 79.42% | 1452 ms | ↓ 0.91x | 1 | 51m | 11d ago | 13m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1463 ms | → 1.04x | 0 | — | — | 24m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1666 ms | ↓ 0.77x | 0 | — | — | 26m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.94% | 99.94% | 2117 ms | → 0.95x | 1 | 0s | 11d ago | 6m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 966 ms | → 0.98x | 1 | 0s | 10d ago | 16m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 84.94% | 32.62% | 32.62% | 1751 ms | → 1.01x | 7 | 14h 2m | 21d ago | 14m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.15% | 46.68% | 46.68% | 527 ms | ↓ 0.70x | 4 | 7h 27m | 25d ago | 11m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.85% | 84.85% | 218 ms | ↓ 0.62x | 0 | — | — | 24m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.94% | 89.94% | 293 ms | ↓ 0.64x | 1 | 0s | 18d ago | 11m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.25% | 99.25% | 2026 ms | → 1.02x | 0 | — | — | 14m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.50% | 96.50% | 1335 ms | → 0.98x | 0 | — | — | 14m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 17.48% | 17.48% | 996 ms | ↑ 1.06x | 1 | 0s | 27d ago | 21m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2402 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 56.04% | 56.04% | 554 ms | ↓ 0.92x | 0 | — | — | 14m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.48% | 98.30% | 98.30% | 1362 ms | → 0.96x | 1 | 4h 17m | 11d ago | 12m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.69% | 98.18% | 98.18% | 1680 ms | ↓ 0.78x | 6 | 0s | 7d ago | 10m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 36.13% | 36.13% | 1808 ms | → 0.97x | 1 | 0s | 10d ago | 13m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2668 ms | → 1.05x | 0 | — | — | 26m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.90% | 99.87% | 99.87% | 1789 ms | ↓ 0.88x | 1 | 30m | 10d ago | 12m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.32% | 65.85% | 65.85% | 847 ms | → 0.99x | 6 | 24m | 11d ago | 14m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.19% | 99.19% | 1718 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.23% | 78.23% | 1294 ms | → 0.96x | 0 | — | — | 14m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 500 ms | → 1.00x | 0 | — | — | 6m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.95% | 99.91% | 99.91% | 1825 ms | → 1.04x | 1 | 0s | 30d ago | 24m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 963 ms | ↑ 1.14x | 1 | 0s | 11d ago | 6m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1853 ms | ↓ 0.95x | 0 | — | — | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.51% | 99.51% | 2501 ms | ↓ 0.88x | 1 | 0s | 13d ago | 26m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.84% | 78.56% | 78.56% | 1490 ms | ↓ 0.95x | 3 | 0s | 7d ago | 13m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.54% | 85.54% | 1776 ms | ↓ 0.94x | 0 | — | — | 13m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.89% | 99.89% | 1131 ms | → 1.02x | 2 | 0s | 11d ago | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.95% | 95.95% | 1067 ms | → 0.98x | 0 | — | — | 15m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 853 ms | → 1.00x | 0 | — | — | 24m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.42% | 98.42% | 442 ms | ↓ 0.91x | 1 | 0s | 24d ago | 11m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 18.56% | 18.56% | 325 ms | ↓ 0.50x | 0 | — | — | 15m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.48% | 96.81% | 96.81% | 2053 ms | → 0.98x | 6 | 16m | 8d ago | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 752 ms | → 1.00x | 0 | — | — | 10m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 59.27% | 59.27% | 1777 ms | → 0.98x | 0 | — | — | 14m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.81% | 99.81% | 2611 ms | → 0.99x | 0 | — | — | 25m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.29% | 90.99% | 90.99% | 28 ms | ↓ 0.27x | 4 | 1d 5h | 23d ago | 8m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 15.69% | 15.69% | 913 ms | → 1.02x | 0 | — | — | 24m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1075 ms | ↑ 1.09x | 0 | — | — | 7m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.40% | 99.40% | 1326 ms | → 1.05x | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1680 ms | ↓ 0.79x | 0 | — | — | 7m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1576 ms | ↑ 1.10x | 0 | — | — | 7m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.28% | 99.42% | 99.42% | 2577 ms | ↓ 0.90x | 7 | 27m | 11d ago | 26m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.84% | 18.43% | 18.43% | 1141 ms | → 0.99x | 3 | 0s | 14d ago | 15m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.17% | 93.17% | 4544 ms | ↑ 1.09x | 0 | — | — | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1688 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.25% | 99.25% | 99.25% | 1334 ms | ↓ 0.91x | 10 | 8m | 29d ago | 7m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.14% | 99.14% | 933 ms | ↓ 0.86x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.84% | 99.84% | 99.84% | 1560 ms | ↓ 0.91x | 2 | 10m | 11d ago | 6m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 36.39% | 36.39% | 1424 ms | ↓ 0.74x | 1 | 0s | 10d ago | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1642 ms | ↑ 1.13x | 1 | 0s | 13d ago | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.44% | 99.44% | 900 ms | ↓ 0.92x | 0 | — | — | 24m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 459 ms | → 0.99x | 0 | — | — | 27m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 100.00% | 91.83% | 91.83% | 1046 ms | ↓ 0.92x | 0 | — | — | 24m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.47% | 98.47% | 2533 ms | ↑ 1.23x | 0 | — | — | 8m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.58% | 96.58% | 2356 ms | → 0.99x | 0 | — | — | 25m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1367 ms | ↓ 0.40x | 0 | — | — | 6m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.84% | 99.84% | 99.84% | 1801 ms | ↑ 1.12x | 1 | 0s | 9d ago | 6m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.41% | 99.42% | 99.42% | 1805 ms | → 0.97x | 9 | 5m | 10d ago | 7m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.41% | 87.41% | 1518 ms | → 0.98x | 0 | — | — | 12m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.79% | 99.79% | 910 ms | ↓ 0.88x | 1 | 0s | 30d ago | 8m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1388 ms | → 0.99x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1215 ms | ↑ 1.16x | 0 | — | — | 26m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 756 ms | ↑ 1.29x | 1 | 0s | 11d ago | 6m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1019 ms | ↑ 1.15x | 0 | — | — | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.84% | 71.43% | 71.43% | 1105 ms | ↓ 0.87x | 3 | 0s | 11d ago | 11m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 809 ms | → 1.01x | 0 | — | — | 23m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.90% | 21.24% | 21.24% | 1661 ms | ↓ 0.93x | 2 | 0s | 18d ago | 27m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.81% | 98.81% | 1408 ms | ↓ 0.80x | 0 | — | — | 12m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.89% | 91.89% | 3352 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 744 ms | → 1.01x | 1 | 0s | 28d ago | 6m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.95% | 99.95% | 99.95% | 333 ms | ↓ 0.86x | 1 | 0s | 11d ago | 6m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 96.87% | 96.87% | 1060 ms | ↑ 1.40x | 0 | — | — | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.73% | 98.73% | 549 ms | → 1.02x | 0 | — | — | 14m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.38% | 98.67% | 98.67% | 1846 ms | ↓ 0.74x | 1 | 3h 60m | 23d ago | 23m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.37% | 99.38% | 99.38% | 1649 ms | → 0.99x | 3 | 1h 3m | 8d ago | 6m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.61% | 97.61% | 3390 ms | ↑ 1.20x | 1 | 0s | 13d ago | 9m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 1080 ms | ↑ 1.12x | 1 | 0s | 11d ago | 6m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 26.53% | 26.53% | 946 ms | ↑ 1.16x | 1 | 0s | 15d ago | 23m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.78% | 99.78% | 623 ms | ↓ 0.86x | 1 | 0s | 9d ago | 12m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.17% | 98.17% | 1478 ms | → 0.99x | 0 | — | — | 12m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1119 ms | ↓ 0.91x | 0 | — | — | 23m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.61% | 87.61% | 2256 ms | ↓ 0.95x | 0 | — | — | 13m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.43% | 96.43% | 1725 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1434 ms | ↓ 0.91x | 0 | — | — | 23m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 15.68% | 15.68% | 1795 ms | ↓ 0.93x | 1 | 0s | 22d ago | 25m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1282 ms | ↑ 1.22x | 0 | — | — | 7m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.95% | 96.53% | 96.53% | 1278 ms | → 0.99x | 1 | 0s | 25d ago | 8m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.84% | 99.84% | 1938 ms | → 0.99x | 1 | 0s | 7d ago | 23m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 100.00% | 99.94% | 99.94% | 744 ms | ↓ 0.92x | 0 | — | — | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 17.64% | 17.64% | 1779 ms | ↓ 0.92x | 0 | — | — | 15m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 15.51% | 15.51% | 1377 ms | ↓ 0.89x | 0 | — | — | 15m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.69% | 99.72% | 99.72% | 2698 ms | ↓ 0.85x | 1 | 2h 18m | 10d ago | 10m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1651 ms | → 1.02x | 0 | — | — | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.21% | 99.64% | 99.64% | 1994 ms | ↓ 0.86x | 6 | 2h 50m | 15d ago | 23m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1962 ms | ↓ 0.88x | 0 | — | — | 23m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.34% | 98.34% | 1091 ms | → 1.04x | 0 | — | — | 8m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1831 ms | ↓ 0.94x | 2 | 0s | 20d ago | 21m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.09% | 99.09% | 1533 ms | ↑ 1.17x | 0 | — | — | 25m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.16% | 42.70% | 42.70% | 1198 ms | ↓ 0.91x | 13 | 5m | 9d ago | 10m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 341 ms | ↓ 0.92x | 0 | — | — | 24m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.76% | 99.95% | 17.43% | 17.43% | 1659 ms | ↓ 0.88x | 1 | 0s | 4d ago | 15m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.53% | 97.76% | 97.76% | 2791 ms | ↓ 0.95x | 7 | 6m | 5d ago | 20m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.90% | 98.83% | 98.83% | 1092 ms | ↑ 1.09x | 2 | 0s | 5d ago | 23m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.76% | 99.17% | 96.48% | 96.48% | 1307 ms | → 0.99x | 7 | 27m | 6d ago | 21m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.76% | 99.95% | 50.38% | 50.38% | 1314 ms | → 1.02x | 1 | 0s | 3d ago | 15m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.76% | 99.58% | 59.89% | 59.89% | 851 ms | ↓ 0.92x | 4 | 20m | 5d ago | 13m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.76% | 99.90% | 99.55% | 99.55% | 854 ms | ↓ 0.91x | 2 | 0s | 3d ago | 14m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.76% | 99.84% | 99.32% | 99.32% | 1501 ms | ↓ 0.88x | 3 | 0s | 3d ago | 15m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.60% | 99.43% | 99.43% | 2736 ms | ↓ 0.86x | 16 | 14m | 5d ago | 20m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.76% | 99.95% | 17.58% | 17.58% | 1450 ms | → 0.98x | 1 | 0s | 3d ago | 15m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.76% | 99.95% | 65.58% | 65.58% | 919 ms | ↑ 1.43x | 1 | 0s | 4d ago | 14m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.76% | 99.84% | 99.19% | 99.19% | 3285 ms | ↓ 0.95x | 3 | 0s | 4d ago | 20m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.79% | 16.40% | 16.40% | 1196 ms | ↑ 1.14x | 4 | 0s | 5d ago | 15m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2640 ms | → 0.95x | 1 | 0s | 7d ago | 22m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.76% | 99.84% | 83.90% | 83.90% | 1962 ms | ↓ 0.93x | 3 | 0s | 1d ago | 21m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.76% | 99.95% | 99.83% | 99.83% | 2148 ms | ↓ 0.91x | 1 | 0s | 1d ago | 15m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.76% | 99.90% | 97.64% | 97.64% | 511 ms | ↓ 0.74x | 2 | 0s | 5d ago | 8m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.76% | 94.77% | 94.87% | 94.87% | 1256 ms | ↑ 1.15x | 4 | 8h 26m | 3d ago | 7m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.76% | 99.84% | 99.85% | 99.85% | 1753 ms | ↓ 0.95x | 3 | 0s | 7d ago | 6m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.76% | 99.63% | 99.64% | 99.64% | 847 ms | ↓ 0.87x | 7 | 0s | 5d ago | 7m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.76% | 99.79% | 99.65% | 99.65% | 959 ms | ↑ 1.13x | 3 | 6m | 20h ago | 8m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.76% | 99.90% | 99.85% | 99.85% | 796 ms | → 1.04x | 2 | 0s | 4d ago | 7m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.76% | 99.52% | 99.52% | 99.52% | 2543 ms | → 0.96x | 7 | 7m | 35m ago | 6m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.76% | 99.90% | 99.03% | 99.03% | 1404 ms | → 0.99x | 2 | 0s | 1d ago | 12m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.76% | 99.42% | 96.92% | 96.92% | 255 ms | ↓ 0.87x | 9 | 4m | 22h ago | 8m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.76% | 99.53% | 97.29% | 97.29% | 1597 ms | ↓ 0.93x | 9 | 0s | 2d ago | 8m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.76% | 58.67% | 79.95% | 79.95% | 436 ms | → 1.04x | 4 | 2d 20h | 4d ago | 8m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.06% | 98.68% | 98.68% | 1297 ms | ↑ 1.10x | 4 | 2h 47m | 5d ago | 7m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.76% | 99.90% | 99.92% | 99.92% | 822 ms | → 0.97x | 2 | 0s | 5d ago | 8m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.76% | 99.95% | 53.85% | 53.85% | 3389 ms | ↓ 0.87x | 1 | 0s | 6d ago | 11m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.76% | 99.95% | 98.68% | 98.68% | 2138 ms | ↑ 1.13x | 1 | 0s | 4d ago | 7m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.76% | 99.84% | 97.73% | 97.73% | 1446 ms | → 1.00x | 3 | 0s | 4d ago | 8m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.76% | 96.38% | 96.38% | 96.38% | 891 ms | ↑ 1.15x | 10 | 2h 8m | 6d ago | 7m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.32% | 98.51% | 98.51% | 556 ms | ↓ 0.78x | 6 | 23m | 3d ago | 11m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.76% | 99.48% | 90.66% | 90.66% | 1442 ms | ↓ 0.83x | 10 | 0s | 5d ago | 13m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.76% | 88.45% | 88.45% | 88.45% | 923 ms | → 1.02x | 52 | 21m | 1d ago | 6m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 99.76% | 99.77% | 99.77% | 99.77% | 2802 ms | → 0.98x | 1 | 0s | 2d ago | 6m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 99.59% | 99.84% | 99.84% | 2781 ms | ↓ 0.88x | 8 | 0s | 2d ago | 26m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.76% | 99.90% | 99.71% | 99.71% | 2773 ms | ↓ 0.89x | 2 | 0s | 6d ago | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.76% | 99.69% | 99.74% | 99.74% | 592 ms | ↑ 1.08x | 6 | 0s | 5d ago | 26m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 99.33% | 99.84% | 99.84% | 1591 ms | ↓ 0.74x | 13 | 0s | 5d ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.76% | 98.25% | 98.21% | 98.21% | 4634 ms | → 1.00x | 34 | 0s | 4d ago | 27m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.76% | 98.71% | 98.70% | 98.70% | 3031 ms | → 0.95x | 24 | 50s | 5d ago | 24m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.76% | 99.95% | 15.69% | 15.69% | 2108 ms | ↑ 1.07x | 1 | 0s | 5d ago | 25m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.48% | 98.83% | 98.83% | 2358 ms | ↓ 0.89x | 8 | 5m | 5d ago | 26m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.79% | 99.79% | 99.79% | 1260 ms | ↓ 0.92x | 4 | 0s | 5d ago | 6m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.76% | 99.95% | 99.92% | 99.92% | 189 ms | → 0.98x | 1 | 0s | 5d ago | 26m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.51% | 99.27% | 78.36% | 78.36% | 2254 ms | → 0.95x | 14 | 0s | 1d ago | 21m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.90% | 64.37% | 64.37% | 1461 ms | → 0.96x | 2 | 0s | 6h ago | 13m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.51% | 99.79% | 96.63% | 96.63% | 4395 ms | ↑ 1.08x | 4 | 0s | 4d ago | 15m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.51% | 98.35% | 98.35% | 98.35% | 1658 ms | ↓ 0.92x | 17 | 20m | 6d ago | 6m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.51% | 98.64% | 64.34% | 64.34% | 4656 ms | → 0.96x | 24 | 3m | 5d ago | 13m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.51% | 98.67% | 98.67% | 98.67% | 1324 ms | ↓ 0.75x | 14 | 16m | 4d ago | 7m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.51% | 99.63% | 90.84% | 90.84% | 1619 ms | ↑ 1.12x | 5 | 8m | 3d ago | 8m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.51% | 99.84% | 99.80% | 99.80% | 1319 ms | ↓ 0.88x | 2 | 14m | 5d ago | 11m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.51% | 99.79% | 91.88% | 91.88% | 1553 ms | → 1.03x | 4 | 0s | 1h ago | 12m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.51% | 99.31% | 99.31% | 99.31% | 1199 ms | → 0.97x | 4 | 48m | 3d ago | 7m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.51% | 99.90% | 99.75% | 99.75% | 702 ms | ↓ 0.84x | 1 | 20m | 5d ago | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.51% | 99.84% | 99.85% | 99.85% | 2719 ms | → 0.99x | 3 | 0s | 4d ago | 6m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.51% | 99.07% | 99.24% | 99.24% | 834 ms | ↓ 0.95x | 12 | 10m | 5d ago | 26m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.51% | 99.59% | 84.78% | 84.78% | 2152 ms | ↑ 1.11x | 8 | 0s | 4d ago | 26m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.51% | 98.97% | 60.35% | 60.35% | 2512 ms | ↓ 0.85x | 18 | 2m | 5d ago | 26m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.27% | 99.37% | 70.60% | 70.60% | 1171 ms | → 0.98x | 10 | 4m | 1h ago | 13m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.27% | 97.71% | 15.55% | 15.55% | 2443 ms | ↓ 0.92x | 11 | 1h 9m | 3d ago | 15m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.27% | 98.81% | 98.94% | 98.94% | 1895 ms | ↓ 0.90x | 18 | 7m | 50m ago | 21m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.27% | 93.94% | 67.22% | 67.22% | 3978 ms | ↓ 0.88x | 45 | 33m | 1d ago | 21m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.27% | 98.45% | 92.16% | 92.16% | 994 ms | → 0.97x | 8 | 55m | 5d ago | 25m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.27% | 99.55% | 99.55% | 99.55% | 1132 ms | ↑ 1.25x | 1 | 51m | 2d ago | 6m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.27% | 99.83% | 99.83% | 99.83% | 901 ms | → 0.96x | 2 | 11m | 3d ago | 6m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.27% | 99.28% | 99.28% | 99.28% | 4730 ms | → 1.03x | 4 | 0s | 24h ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.03% | 97.76% | 98.57% | 98.57% | 1236 ms | → 0.96x | 12 | 53m | 17h ago | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.03% | 97.21% | 98.96% | 98.96% | 3756 ms | → 1.04x | 18 | 42m | 4d ago | 23m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.03% | 98.65% | 85.71% | 85.71% | 4593 ms | → 0.98x | 24 | 2m | 18h ago | 15m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.03% | 97.83% | 85.15% | 85.15% | 4547 ms | → 1.01x | 39 | 2m | 2d ago | 23m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.03% | 99.53% | 95.86% | 95.86% | 502 ms | ↓ 0.83x | 3 | 51m | 18h ago | 8m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.02% | 98.61% | 98.61% | 98.61% | 1620 ms | ↑ 1.12x | 24 | 2m | 18h ago | 6m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.02% | 98.40% | 83.91% | 83.91% | 3021 ms | ↓ 0.92x | 31 | 0s | 21h ago | 27m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (45)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 98.88% | 98.88% | 98.88% | 98.88% | 492 ms | → 1.00x | 1 | 1h | 2d ago | 6m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.79% | 99.33% | 99.68% | 99.68% | 2913 ms | → 0.98x | 11 | 4m | 4d ago | 20m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.79% | 99.53% | 99.90% | 99.90% | 795 ms | → 0.96x | 4 | 29m | 7h ago | 22m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.79% | 88.86% | 14.04% | 14.04% | 2184 ms | ↓ 0.90x | 165 | 6m | 5d ago | 21m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.79% | 97.16% | 99.14% | 99.14% | 3694 ms | → 1.01x | 18 | 43m | 4d ago | 23m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 98.78% | 99.47% | 99.47% | 99.47% | 2272 ms | → 0.95x | 9 | 2m | 2d ago | 6m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.78% | 98.17% | 84.72% | 84.72% | 4656 ms | ↓ 0.95x | 35 | 0s | 1h ago | 11m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.78% | 99.59% | 99.44% | 99.44% | 1703 ms | ↓ 0.85x | 3 | 33m | 4d ago | 24m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.54% | 96.16% | 15.18% | 15.18% | 3760 ms | ↓ 0.92x | 50 | 10m | 2d ago | 20m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.54% | 99.32% | 99.33% | 99.33% | 1014 ms | ↓ 0.89x | 13 | 0s | 5h ago | 6m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.54% | 98.28% | 96.09% | 96.09% | 1251 ms | ↓ 0.92x | 4 | 2h 27m | 2d ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.30% | 97.51% | 73.41% | 73.41% | 4350 ms | → 0.97x | 40 | 5m | 3d ago | 21m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.30% | 98.24% | 98.24% | 98.24% | 2648 ms | → 0.97x | 15 | 27m | 3d ago | 7m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.30% | 99.32% | 97.32% | 97.32% | 1837 ms | ↓ 0.82x | 8 | 15m | 4h ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.30% | 97.65% | 90.31% | 90.31% | 3276 ms | ↓ 0.91x | 38 | 4m | 18h ago | 10m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 98.30% | 99.58% | 99.76% | 99.76% | 2914 ms | → 1.00x | 4 | 30m | 24h ago | 10m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 98.05% | 97.54% | 95.31% | 95.31% | 1786 ms | ↑ 1.07x | 3 | 5h 26m | 7d ago | 8m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.05% | 99.04% | 99.04% | 99.04% | 1027 ms | → 1.03x | 11 | 17m | 4d ago | 7m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 97.82% | 81.05% | 51.73% | 51.73% | 2977 ms | ↓ 0.92x | 7 | 19h 44m | 24h ago | 22m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 97.80% | 99.53% | 99.54% | 99.54% | 419 ms | → 0.99x | 3 | 40m | 1d ago | 6m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.57% | 99.11% | 85.50% | 85.50% | 1101 ms | ↑ 1.15x | 6 | 46m | 4d ago | 10m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.57% | 86.78% | 84.76% | 84.76% | 1643 ms | ↑ 1.08x | 3 | 1d 4h | 7d ago | 8m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.56% | 96.24% | 79.51% | 79.51% | 137 ms | ↓ 0.93x | 5 | 5h 54m | 4d ago | 26m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.33% | 95.18% | 98.64% | 98.64% | 4206 ms | ↓ 0.95x | 57 | 13m | 2d ago | 20m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.09% | 96.23% | 15.16% | 15.16% | 2209 ms | ↑ 1.09x | 67 | 2m | 1d ago | 23m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 96.84% | 97.46% | 13.86% | 13.86% | 2565 ms | → 1.02x | 12 | 1h 8m | 21h ago | 20m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.84% | 95.93% | 81.82% | 81.82% | 4659 ms | → 0.98x | 66 | 5m | 3h ago | 10m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.84% | 95.72% | 81.16% | 81.16% | 4888 ms | → 0.97x | 74 | 3m | 15h ago | 12m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.59% | 94.99% | 70.97% | 70.97% | 1215 ms | → 0.98x | 15 | 1h 49m | 2d ago | 13m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.85% | 96.77% | 96.77% | 96.77% | 502 ms | → 1.04x | 2 | 2h 41m | 3d ago | 6m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 95.62% | 98.80% | 96.43% | 96.43% | 2558 ms | ↓ 0.92x | 4 | 2h 10m | 5d ago | 8m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.37% | 97.78% | 98.84% | 98.84% | 859 ms | → 0.99x | 2 | 6h 50m | 3d ago | 24m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 94.88% | 45.25% | 25.74% | 25.74% | 3705 ms | → 1.02x | 74 | 4h 36m | 11h ago | 25m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.66% | 98.09% | 27.90% | 27.90% | 1705 ms | ↑ 1.16x | 9 | 1h 17m | 1d ago | 23m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 94.65% | 90.18% | 96.71% | 96.71% | 3292 ms | ↓ 0.87x | 8 | 9h 6m | 10d ago | 10m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.40% | 97.18% | 95.51% | 95.51% | 2338 ms | ↓ 0.93x | 4 | 4h 46m | 6d ago | 12m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 90.75% | 97.65% | 98.29% | 98.29% | 234 ms | ↓ 0.53x | 8 | 1h 57m | 1d ago | 7m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 89.78% | 97.81% | 98.17% | 98.17% | 253 ms | ↓ 0.28x | 1 | 16h 22m | 2d ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 87.10% | 95.19% | 95.34% | 95.34% | 3865 ms | ↑ 1.30x | 15 | 1h 52m | 14h ago | 7m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 86.94% | 86.94% | 86.94% | 86.94% | 1373 ms | → 1.00x | 1 | 13h 12m | 5d ago | 6m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 86.10% | 18.21% | 15.11% | 15.11% | 2192 ms | → 1.00x | 1 | 23d 22h | 30d ago | 25m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 84.91% | 96.06% | 96.06% | 96.06% | 1749 ms | ↑ 1.09x | 2 | 13h 54m | 4d ago | 7m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 82.28% | 17.67% | 31.21% | 31.21% | 518 ms | → 1.00x | 2 | 12d 2h | 4d ago | 14m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 72.44% | 94.01% | 98.63% | 98.63% | 1272 ms | → 0.95x | 62 | 21m | 1h ago | 24m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 69.90% | 64.87% | 62.08% | 62.08% | 4755 ms | → 0.99x | 377 | 19m | 1h ago | 22m ago |

</details>

<details open>
<summary><strong>🔴 Down (235)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 98.30% | 99.58% | 98.70% | 98.70% | 3089 ms | ↑ 1.20x | 7 | 4m | 9m ago | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.05% | 99.27% | 97.97% | 97.97% | 3153 ms | → 0.98x | 5 | 44m | 9m ago | 9m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.57% | 99.32% | 98.05% | 98.05% | 3660 ms | ↑ 1.28x | 8 | 17m | 9m ago | 9m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 97.57% | 99.11% | 99.06% | 99.06% | 182 ms | → 1.03x | 9 | 29m | 9m ago | 9m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.34% | 97.73% | 84.62% | 84.62% | 4398 ms | → 0.97x | 30 | 12m | 5h ago | 27m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 93.69% | 98.65% | 42.29% | 42.29% | 1028 ms | ↓ 0.82x | 3 | 3h 13m | 7h ago | 22m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 93.67% | 96.87% | 84.00% | 84.00% | 4769 ms | → 1.01x | 50 | 6m | 39m ago | 9m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 90.02% | 91.80% | 91.75% | 91.75% | 2324 ms | → 0.96x | 11 | 4h 52m | 15h ago | 10m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 89.08% | 89.53% | 16.47% | 16.47% | 4483 ms | → 0.96x | 160 | 6m | 14m ago | 14m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 88.08% | 89.45% | 51.21% | 51.21% | 3628 ms | → 0.96x | 170 | 5m | 1h ago | 8m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 85.82% | 85.82% | 85.82% | 85.82% | 1737 ms | → 1.00x | 1 | 13h 52m | 14h ago | 5m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 73.72% | 69.69% | 19.80% | 19.80% | 4670 ms | → 1.01x | 347 | 16m | 42m ago | 13m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 62.53% | 91.96% | 81.90% | 81.90% | 676 ms | ↓ 0.76x | 2 | 1d 7h | 3d ago | 11m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 60.68% | 91.55% | 99.00% | 99.00% | 1083 ms | ↓ 0.84x | 2 | 1d 9h | 3d ago | 21m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 48.66% | 87.53% | 87.53% | 87.53% | 1365 ms | ↓ 0.69x | 14 | 6h 17m | 4d ago | 7m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 25.85% | 84.08% | 85.56% | 85.56% | 417 ms | ↓ 0.66x | 1 | 5d 6h | 5d ago | 6m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 24.27% | 80.97% | 42.32% | 42.32% | 1497 ms | ↑ 1.06x | 17 | 8h 22m | 5d ago | 23m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 23.90% | 54.99% | 5.57% | 5.57% | 1252 ms | → 0.97x | 5 | 2d 15h | 5d ago | 24m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.95% | 10.06% | 10.19% | 10.19% | 3168 ms | → 0.96x | 172 | 3h 24m | 5h ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 4.38% | 76.59% | 85.30% | 85.30% | 2120 ms | ↓ 0.84x | 2 | 3d 17h | 7d ago | 9m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.98% | 1.13% | 61.36% | 61.36% | 1944 ms | ↓ 0.69x | 22 | 1d 8h | 2d ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 83.60% | 83.60% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 69.24% | 69.24% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 74.45% | 74.45% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 57.23% | 63.94% | 63.94% | — | — | 13 | 1d 2h | 14d ago | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 46.40% | 86.04% | 86.04% | — | — | 7 | 2d 11h | 17d ago | 11m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 65.68% | 65.68% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.72% | 5.72% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.65% | 12.65% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 9.67% | 63.84% | 63.84% | — | — | 3 | 9d 3h | 25d ago | 8m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 15m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.43% | 3.43% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 29.47% | 75.16% | 75.16% | — | — | 2 | 10d 23h | 22d ago | 9m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 83.86% | 83.86% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.81% | 36.81% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 7.94% | 59.88% | 59.88% | — | — | 3 | 9d 7h | 28d ago | 9m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 40.46% | 93.65% | 93.65% | — | — | 3 | 6d 7h | 19d ago | 26m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.34% | 24.34% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 75.25% | 75.25% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 54.04% | 54.04% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.50% | 30.50% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 84.26% | 84.26% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 63.46% | 63.46% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 77.83% | 77.83% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.65% | 15.65% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 51.18% | 51.18% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 75.35% | 95.61% | 95.61% | — | — | 6 | 1d 8h | 8d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 35.46% | 35.46% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 50.10% | 84.61% | 84.61% | — | — | 2 | 7d 23h | 16d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.55% | 3.55% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 15m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 84.45% | 84.45% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 47.33% | 47.33% | 47.33% | — | — | 6 | 2d 18h | 17d ago | 6m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 52.44% | 52.44% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.08% | 2.08% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 52.28% | 92.53% | 92.53% | — | — | 13 | 1d 4h | 15d ago | 23m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 62.96% | 85.04% | 85.04% | — | — | 2 | 5d 23h | 11d ago | 9m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 67.83% | 46.52% | 46.52% | — | — | 2 | 5d 6h | 10d ago | 14m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 24.95% | 80.94% | 80.94% | — | — | 3 | 7d 17h | 23d ago | 11m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 30.61% | 31.90% | 31.90% | — | — | 1 | 21d 16h | 22d ago | 6m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 30.41% | 67.03% | 67.03% | — | — | 2 | 10d 20h | 22d ago | 13m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 33.85% | 33.85% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 55.18% | 55.18% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 68.60% | 59.37% | 59.37% | — | — | 1 | 10d 7h | 10d ago | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.04% | 25.04% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.11% | 30.11% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.82% | 57.82% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 47.63% | 25.37% | 25.37% | — | — | 1 | 16d 21h | 17d ago | 12m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.65% | 5.65% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 66.53% | 66.53% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 84.20% | 84.20% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.27% | 7.27% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 80.40% | 80.40% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 29.33% | 82.96% | 82.96% | — | — | 2 | 10d 23h | 22d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 49.37% | 34.79% | 34.79% | — | — | 13 | 1d 6h | 16d ago | 11m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 30d ago | 6m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 15m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 28.94% | 28.94% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 48.22% | 27.56% | 27.56% | — | — | 5 | 3d 3h | 9d ago | 9m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.49% | 53.49% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 25.14% | 56.72% | 56.72% | — | — | 3 | 7d 17h | 23d ago | 12m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 12.15% | 11.26% | 11.26% | — | — | 1 | 26d 7h | 26d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 29.52% | 72.10% | 72.10% | — | — | 2 | 10d 23h | 22d ago | 9m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 77.49% | 77.49% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.24% | 47.24% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.93% | 42.93% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 39.67% | 39.67% | 39.67% | — | — | 5 | 3d 18h | 19d ago | 6m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 84.21% | 84.21% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 59.48% | 59.48% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.51% | 39.51% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 46.35% | 86.04% | 86.04% | — | — | 7 | 2d 11h | 17d ago | 11m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 16m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 75.34% | 87.88% | 87.88% | — | — | 5 | 1d 14h | 7d ago | 8m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.00% | 32.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.60% | 2.60% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 29.32% | 84.44% | 84.44% | — | — | 2 | 10d 23h | 22d ago | 24m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.22% | 42.22% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 84.17% | 84.17% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.50% | 33.50% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 84.10% | 84.10% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 12.59% | 60.34% | 60.34% | — | — | 1 | 26d 15h | 27d ago | 8m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 26.32% | 26.32% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 45.95% | 45.95% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 81.73% | 81.73% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 68.79% | 68.79% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 14.26% | 33.20% | 33.20% | — | — | 1 | 26d 4h | 26d ago | 8m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 80.18% | 80.18% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 54.84% | 54.84% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.31% | 3.31% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 43.87% | 43.87% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 78.57% | 78.57% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 59.94% | 59.94% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 29.39% | 52.47% | 52.47% | — | — | 4 | 5d 12h | 22d ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 15.26% | 68.24% | 68.24% | — | — | 12 | 2d 3h | 26d ago | 10m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 18.51% | 90.30% | 90.30% | — | — | 1 | 24d 24h | 25d ago | 23m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.75% | 28.75% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.80% | 10.80% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.04% | 13.04% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 28.48% | 28.48% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.49% | 24.49% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 58.17% | 53.81% | 53.81% | — | — | 13 | 1d 1h | 13d ago | 23m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 59.98% | 95.62% | 95.62% | — | — | 16 | 18h 48m | 11d ago | 25m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 59.72% | 59.72% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 12.14% | 12.14% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.75% | 17.75% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.30% | 50.30% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 32.36% | 32.36% | 32.36% | — | — | 1 | 20d 20h | 21d ago | 7m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 6m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 56.05% | 56.05% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 11.49% | 24.60% | 24.60% | — | — | 16 | 1d 16h | 27d ago | 10m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 39.15% | 39.15% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 52.88% | 52.88% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.64% | 5.64% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 65.68% | 85.11% | 85.11% | — | — | 2 | 5d 15h | 11d ago | 13m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 37.16% | 91.76% | 91.76% | — | — | 1 | 19d 19h | 20d ago | 24m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 84.30% | 84.30% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 83.20% | 83.20% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 15m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 64.89% | 64.89% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 76.20% | 76.20% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 83.06% | 83.06% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.90% | 19.90% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 64.02% | 60.76% | 60.76% | — | — | 1 | 11d 19h | 12d ago | 26m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 63.90% | 46.41% | 46.41% | — | — | 16 | 17h 9m | 11d ago | 9m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.21% | 4.14% | 4.14% | — | — | 2 | 14d 23h | 13d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.71% | 34.71% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.36% | 69.70% | 69.70% | — | — | 4 | 7d 5h | 11d ago | 24m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.52% | 27.14% | 27.14% | — | — | 31 | 19h 28m | 9d ago | 11m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.84% | 7.84% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 66.74% | 66.74% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 43.60% | 43.60% | 43.60% | — | — | 2 | 8d 21h | 18d ago | 7m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 12h | 29d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 68.70% | 68.70% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 17.89% | 48.43% | 48.43% | — | — | 10 | 2d 12h | 25d ago | 7m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 7.08% | 7.08% | — | — | 1 | 29d 12h | 29d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 50.89% | 69.29% | 69.29% | — | — | 10 | 1d 12h | 11d ago | 7m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 43.78% | 61.62% | 61.62% | — | — | 13 | 1d 9h | 18d ago | 7m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 40.32% | 40.32% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 26.41% | 26.41% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.99% | 12.99% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.25% | 18.25% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 19.77% | 19.77% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 13.70% | 41.30% | 41.30% | — | — | 1 | 26d 8h | 26d ago | 7m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 24.87% | 10.43% | 10.43% | — | — | 234 | 2h 1m | 16d ago | 13m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 10.63% | 12.29% | 12.29% | — | — | 8 | 3d 9h | 27d ago | 6m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.08% | 1.08% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.07% | 6.07% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.15% | 7.15% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.74% | 50.74% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 39.38% | 58.77% | 58.77% | — | — | 2 | 9d 15h | 19d ago | 7m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 84.27% | 84.27% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 58.99% | 82.15% | 82.15% | — | — | 2 | 6d 18h | 13d ago | 9m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 51.03% | 51.03% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 84.45% | 84.45% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 22.43% | 62.74% | 62.74% | — | — | 2 | 11d 23h | 24d ago | 8m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.07% | 42.07% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.78% | 2.57% | 2.57% | — | — | 1 | 29d 19h | 30d ago | 7m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 43.66% | 20.37% | 20.37% | — | — | 4 | 4d 12h | 18d ago | 13m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 82.15% | 82.15% | — | — | 1 | 29d 24h | 30d ago | 15m ago |

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
