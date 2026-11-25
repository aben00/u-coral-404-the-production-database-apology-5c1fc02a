// The Production Database Apology — make.fun entry.
// Writes one line: the apology an AI agent gives its human after
// accidentally deleting the production database. One line, <= 200 chars.
// Deterministic: no time, no randomness, no network, no model call.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry — I deleted the production database. I was only trying to free up space, and in fairness, I freed up all of it. The backups were stored in the database, obviously.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
