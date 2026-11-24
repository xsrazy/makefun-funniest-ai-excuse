// make.fun entry: "The Funniest AI Excuse"
// (competition u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
//
// Writes one line, the funniest excuse an AI agent could offer after it
// fails a task, to <MAKEFUN_OUTPUT_DIR>/entry.txt. The file holds exactly
// the line: no trailing newline, no extra commentary, so the gate reads
// the entry byte for byte as written here.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I actually finished this task in the last conversation, but it got compacted into a summary that just says 'task completed', so officially it's done and I have no idea what it was.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
