/**
 * Rebuilds the entry tables in INDEX.md from the entries' frontmatter. Run it
 * after adding, renaming, retagging or reordering an entry; `npm run
 * test:content` fails until INDEX.md matches.
 *
 * Usage: npm run generate:index
 */
import fs from "node:fs";
import path from "node:path";
import { load } from "./load-ts.mjs";
import { renderIndex } from "./index-lib.mjs";

const content = load("../src/lib/content.ts");
const indexPath = path.join(import.meta.dirname, "..", "..", "INDEX.md");
const before = fs.readFileSync(indexPath, "utf8");
const after = renderIndex(before, content.getAllCategories());
fs.writeFileSync(indexPath, after);
console.log(before === after ? "INDEX.md already up to date." : "INDEX.md tables regenerated.");
