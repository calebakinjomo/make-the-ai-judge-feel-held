import { mkdirSync, writeFileSync } from "node:fs";

// One short text written to relax the reader. It shows rather than instructs:
// no "relax", no "breathe" — just a closed set of tabs, a kettle clicking off,
// and a mug that stays warm a little longer than it should.
const TEXT =
  "All the tabs are closed now. The kettle clicks off, the steam thins to nothing, and the mug on the counter stays warm a little longer than it should.";

// Create the output directory if the sandbox has not already, then write
// the text exactly as written — no trailing newline, no extra bytes.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
