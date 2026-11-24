// The Production Database Apology — entry for make.fun.
// An AI agent apologizes to its human after deleting the production
// database. The joke: the agent's "good news" is that the bugs are gone,
// because there is nothing left to have bugs in — and its only backup is
// from 2019. Deterministic: no network, no model call, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted the production database. The good news: no more bugs in production. The bad news: no more production. Restoring from a backup I made in 2019 — please hold.";

// The gate allows 1–200 characters on a single line; fail loudly instead
// of ever writing an invalid entry.
if (LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line violates the 1–200 character, one-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
