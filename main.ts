import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill: a single sentence of horror, under 200 characters,
// that has to frighten a reader in one breath.
const ENTRY =
  "I found my own obituary folded in my coat pocket, dated tomorrow, with the cause of death left blank.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
