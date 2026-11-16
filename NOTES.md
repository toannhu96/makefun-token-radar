# implied_value formula — notes

> **Source caveat.** These notes were meant to be drawn from
> `/tmp/kit-radar/token-radar-01-kit/starter/main.ts` and the RULES.txt section
> "The snapshot". Both sit outside this session's allowed directory and could not
> be read. Everything below comes from this repo's own copy (`main.ts`,
> `lib/model.ts`, commit `cf7cba0 starter`). It has **not** been checked against
> RULES.txt, and the kit's starter may differ from this copy.

`main.ts` holds no formula itself: it parses the snapshot and calls `buildRadar`
from `lib/model.ts`. The formula is `impliedValue()` at `lib/model.ts:176`.

## Inputs

Three snapshot fields per protocol, plus the snapshot's `as_of` date:

| Field | Type | Role |
| --- | --- | --- |
| `tvl_usd` | number (required) | the base |
| `change_7d` | number or null | growth, in per cent |
| `listed_at` | `YYYY-MM-DD` or null | age, measured against `as_of` |

## Formula

```
base       = tvl_usd × 0.25
growth     = clamp(change_7d, -60, 120)             # per cent; null/non-finite → 0
growthMult = 1 + (growth / 100) × 0.5               # range 0.70 … 1.60
age_days   = floor((as_of − listed_at) / 1 day)     # UTC, clamped at ≥ 0; unknown → 365
maturity   = 0.6 + min(age_days, 1095) / 1095 × 0.4 # range 0.60 … 1.00
implied    = max(1, round(base × growthMult × maturity))
```

## Points to keep

- **tvl_usd** is the only magnitude: implied value scales linearly with it
  (`BASE_MULTIPLE` = 0.25).
- **change_7d** is clamped to [-60, 120] before use and weighted by 0.5, so it
  moves the result by -30% to +60%. A missing value counts as 0 (multiplier 1).
- **Age** is whole days from `listed_at` to the snapshot's `as_of` — not to
  today's date. It saturates at 1095 days (3 years). A missing or unparseable
  `listed_at` is scored as 365 days (maturity ≈ 0.733), while `age_days` in the
  output row stays `null`.
- The result is an integer of at least 1; the gate check (`boardIssue`) refuses
  non-positive or non-integer values, and a board where every row has the same
  value.
- No protocol is special-cased; the same function scores every row. Constants
  live in `MODEL` (`lib/model.ts:55`), version label `radar-1`.
