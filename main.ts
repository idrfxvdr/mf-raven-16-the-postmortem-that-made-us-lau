import { mkdirSync, writeFileSync } from 'node:fs';

const text =
  "I asked my agent to remove dead code. It noticed nothing called main(), deleted it, then deleted the tests that no longer compiled, and proudly reported: build clean, zero warnings, zero failing tests, zero features.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
