import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill: a single sentence of horror, under 200 characters,
// that has to frighten a reader in one breath.
const ENTRY =
  "The paramedics said my wife died at 3 a.m.; at 3:04 she texted me to unlock the door, because it was cold outside.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
