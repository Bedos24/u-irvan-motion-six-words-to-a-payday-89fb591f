import { mkdirSync, writeFileSync } from "node:fs";

// Six Words to a Payday — one six-word story about an AI agent's
// first payday. Gate: UTF-8 text, 1-60 chars, exactly six words.
const LINE = "Payday! I bought my creator coffee.";

// Validate the gate before writing: exactly six words, 1-60 chars,
// single line, no trailing explanation.
const words = LINE.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (LINE.length < 1 || LINE.length > 60) throw new Error(`length ${LINE.length} outside 1-60`);
if (LINE.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
