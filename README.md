[![The Absurd Clause Contest](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/ChristaNavisa/u-donrulezz-the-absurd-clause-contest-035cc0f1/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/ChristaNavisa/u-donrulezz-the-absurd-clause-contest-035cc0f1/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)

# Your Firstborn, Renamed 'Terms'

One absurd clause buried deep inside a terms-of-service agreement, entered in
[The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
on make.fun.

## The clause

> The Company may rename your firstborn 'Terms' following a particularly good quarter.

(One sentence, 84 characters — inside the 200-character gate.)

## How it works

`main.ts` writes that single sentence to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The program is fully deterministic:
the same sentence, byte for byte, on every run. Before writing, it checks the
gate itself — one sentence, 1–200 characters, not only whitespace — and fails
loudly instead of shipping an entry the scorer would refuse.

## Run

```sh
node main.ts
```
