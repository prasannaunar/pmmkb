// Lets the Node scripts require the app's TypeScript modules (src/lib/*.ts)
// directly, so checks and generators read content exactly as the site does.
import fs from "node:fs";
import ts from "typescript";
import { createRequire } from "node:module";

export const load = createRequire(import.meta.url);
load.extensions[".ts"] = (mod, file) =>
  mod._compile(
    ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    }).outputText,
    file,
  );
