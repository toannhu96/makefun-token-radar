// How far each category's multiple can be trusted, from the snapshot's own
// live-token protocols. A category with fewer than three samples never drives
// its own price: it falls back to the global median and says so.

export const GLOBAL_MEDIAN = 0.2631549120296063;

export type Reliability = 'measured' | 'thin' | 'fell_back' | 'no_data';

export interface CategoryConfidence {
  n: number;
  median: number | null;
  used: number;
  lo: number;
  hi: number;
  reliability: Reliability;
}

export const CONFIDENCE: Record<string, CategoryConfidence> = {
  "AI Agents": { n: 2, median: 0.6047, used: 0.2632, lo: 0.005, hi: 1.1012, reliability: "fell_back" },
  "Anchor BTC": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Basis Trading": { n: 7, median: 0.6544, used: 0.5762, lo: 0.282, hi: 0.8703, reliability: "thin" },
  "Bridge": { n: 5, median: 0.9885, used: 0.6983, lo: 0.084, hi: 1.3127, reliability: "thin" },
  "CDP": { n: 2, median: 0.2073, used: 0.2632, lo: 0.005, hi: 0.5505, reliability: "fell_back" },
  "CDP Manager": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "CEX": { n: 7, median: 0.0748, used: 0.1125, lo: 0.0625, hi: 0.1625, reliability: "thin" },
  "Canonical Bridge": { n: 7, median: 1.1261, used: 0.9535, lo: 0.5859, hi: 1.3211, reliability: "thin" },
  "CeDeFi": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Chain": { n: 1, median: 3.0264, used: 0.2632, lo: 0.005, hi: 6.195, reliability: "fell_back" },
  "Collateral Management": { n: 1, median: 12.1602, used: 0.2632, lo: 0.005, hi: 24.0972, reliability: "fell_back" },
  "Collateral Markets": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Cross Chain Bridge": { n: 4, median: 1.2205, used: 0.6939, lo: 0.005, hi: 1.6786, reliability: "thin" },
  "Crypto Card Issuer": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "DOR": { n: 1, median: 0.0898, used: 0.2632, lo: 0.0872, hi: 0.4391, reliability: "fell_back" },
  "Decentralized AI": { n: 1, median: 2.0604, used: 0.2632, lo: 0.005, hi: 4.3016, reliability: "fell_back" },
  "Decentralized BTC": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Derivatives": { n: 2, median: 2.1619, used: 0.2632, lo: 0.005, hi: 3.2593, reliability: "fell_back" },
  "Dexs": { n: 11, median: 0.3424, used: 0.3424, lo: 0.005, hi: 0.7726, reliability: "measured" },
  "Dual-Token Stablecoin": { n: 1, median: 0.0316, used: 0.2632, lo: 0.2012, hi: 0.3251, reliability: "fell_back" },
  "Farm": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Governance Incentives": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Indexes": { n: 3, median: 0.1477, used: 0.2227, lo: 0.1683, hi: 0.2772, reliability: "thin" },
  "Insurance": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Interest Rate Derivatives": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Launchpad": { n: 1, median: 0.1306, used: 0.2632, lo: 0.0072, hi: 0.5191, reliability: "fell_back" },
  "Lending": { n: 14, median: 0.1505, used: 0.1505, lo: 0.0505, hi: 0.2505, reliability: "measured" },
  "Leveraged Farming": { n: 1, median: 0.1725, used: 0.2632, lo: 0.005, hi: 0.6012, reliability: "fell_back" },
  "Liquid Restaking": { n: 2, median: 0.1828, used: 0.2632, lo: 0.0099, hi: 0.5164, reliability: "fell_back" },
  "Liquid Staking": { n: 8, median: 0.0441, used: 0.0441, lo: 0.005, hi: 0.0973, reliability: "measured" },
  "Liquidity Manager": { n: 1, median: 0.015, used: 0.2632, lo: 0.2337, hi: 0.2926, reliability: "fell_back" },
  "NFT Marketplace": { n: 1, median: 2.0017, used: 0.2632, lo: 0.005, hi: 4.1865, reliability: "fell_back" },
  "OTC Marketplace": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Onchain Capital Allocator": { n: 1, median: 0.0191, used: 0.2632, lo: 0.2257, hi: 0.3006, reliability: "fell_back" },
  "Options": { n: 1, median: 1.5145, used: 0.2632, lo: 0.005, hi: 3.2316, reliability: "fell_back" },
  "Options Vault": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Payments": { n: 2, median: 0.1813, used: 0.2632, lo: 0.0119, hi: 0.5144, reliability: "fell_back" },
  "Prediction Market": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Privacy": { n: 3, median: 0.9691, used: 0.5102, lo: 0.005, hi: 1.0394, reliability: "thin" },
  "RWA": { n: 9, median: 0.2748, used: 0.2748, lo: 0.1851, hi: 0.3645, reliability: "measured" },
  "Restaked BTC": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Restaking": { n: 2, median: 0.0246, used: 0.2632, lo: 0.229, hi: 0.2973, reliability: "fell_back" },
  "Risk Curators": { n: 1, median: 2.9747, used: 0.2632, lo: 0.005, hi: 6.0936, reliability: "fell_back" },
  "Stablecoin Wrapper": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Staking Pool": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Token Locker": { n: 2, median: 9.5204, used: 0.2632, lo: 0.005, hi: 13.4578, reliability: "fell_back" },
  "Uncollateralized Lending": { n: 0, median: null, used: 0.2631549120296063, lo: 0.0789, hi: 0.7895, reliability: "no_data" },
  "Yield": { n: 8, median: 0.2561, used: 0.2561, lo: 0.005, hi: 0.5606, reliability: "measured" },
  "Yield Aggregator": { n: 4, median: 0.151, used: 0.2127, lo: 0.1048, hi: 0.3206, reliability: "thin" },
};

export function confidenceFor(category: string | null): CategoryConfidence {
  const key = category ?? 'Uncategorised';
  return (
    CONFIDENCE[key] ?? {
      n: 0,
      median: null,
      used: GLOBAL_MEDIAN,
      lo: GLOBAL_MEDIAN * 0.3,
      hi: GLOBAL_MEDIAN * 3,
      reliability: 'no_data',
    }
  );
}
