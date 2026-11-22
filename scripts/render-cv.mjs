import { build } from "esbuild";
import { rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import React from "react";
import { renderToFile } from "@react-pdf/renderer";

const outfile = "src/cv/.ResumeDocument.mjs";
const siteUrl = process.argv[2] || "http://localhost:5173";
const destination = process.argv[3] || "public/jonathan-christian-curriculo.pdf";

await build({
  entryPoints: ["src/cv/ResumeDocument.jsx"],
  outfile,
  bundle: false,
  format: "esm",
  platform: "node",
  jsx: "automatic",
});

const { ResumeDocument } = await import(`${pathToFileURL(outfile).href}?t=${Date.now()}`);
await renderToFile(React.createElement(ResumeDocument, { siteUrl }), destination);
await rm(outfile, { force: true });
console.log(destination);
