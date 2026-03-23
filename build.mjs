import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const ROOT = process.cwd();
const INPUT_HTML = resolve(ROOT, "index.html");
const OUTPUT_DIR = resolve(ROOT, "dist");
const OUTPUT_HTML = resolve(OUTPUT_DIR, "index.html");

const minifyCss = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();

const minifyInlineJs = (js) =>
  js
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");

const minifyHtml = (html) => {
  let out = html.replace(/\r\n/g, "\n");

  out = out.replace(/<style>([\s\S]*?)<\/style>/g, (_, css) => {
    return `<style>${minifyCss(css)}</style>`;
  });

  out = out.replace(/<script>([\s\S]*?)<\/script>/g, (_, js) => {
    return `<script>${minifyInlineJs(js)}</script>`;
  });

  out = out
    .replace(/>\s+</g, "><")
    .replace(/\n+/g, "")
    .trim();

  return out;
};

const build = async () => {
  const source = await readFile(INPUT_HTML, "utf8");
  const minified = minifyHtml(source);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_HTML, minified, "utf8");

  console.log(`Built: ${OUTPUT_HTML}`);
};

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
