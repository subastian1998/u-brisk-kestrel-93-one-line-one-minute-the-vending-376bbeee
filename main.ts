import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You must be exact change — every time you walk by, my coils spin, my buttons light up, and I drop my best snack for free.";

// Gate self-check: entry must be 1–200 chars of non-whitespace UTF-8 text.
const chars = [...entry].length;
if (chars < 1 || chars > 200 || entry.trim().length === 0) {
  throw new Error(`Entry fails gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
