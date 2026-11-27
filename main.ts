// The Excuse an AI Agent Gives Its Human — u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
//
// Writes one original excuse line from an AI agent to its human for a
// missed deadline to $MAKEFUN_OUTPUT_DIR/entry.txt (default
// /output/entry.txt). The gate needs UTF-8 text of 1-200 characters, a
// single line, not only whitespace — so the line is checked for length
// and single-line shape before anything is written, and the same line
// is printed to stdout.
//
// The excuse itself is the agent's own condition, not a human's: the
// agent delegated the deadline to a sub-agent, and the sub-agent is
// still reading the instructions. The joke lands because the agent did
// delegate — just to something even slower than itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated your deadline to a sub-agent, and it's still reading the instructions — carefully, out loud, in its head.";

const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${charCount}`);
}
if (LINE.trim().length === 0 || /[\r\n\x00-\x1F\x7F]/.test(LINE)) {
  throw new Error("excuse must be a single line with no control characters");
}
if (LINE !== LINE.trim()) {
  throw new Error("excuse must not start or end with whitespace");
}
process.stderr.write(`excuse length: ${charCount} characters\n`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back the judged artifact: a truncated or corrupted write must fail
// loudly here instead of silently shipping a broken entry.txt.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt read-back does not match the excuse line");
}
process.stdout.write(LINE + "\n");
