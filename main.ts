// The Absurd Clause Contest (u-donrulezz-the-absurd-clause-contest-035cc0f1)
// Writes one absurd terms-of-service clause to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The Company may rename your firstborn 'Terms' following a particularly good quarter.";

// Gate, checked before writing: 1-200 characters, not only whitespace.
// Split out so the rule reads as the rule, not as inline arithmetic.
function checkGate(text: string): void {
  if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
    throw new Error(`entry fails the gate: ${text.length} characters`);
  }
}

checkGate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
