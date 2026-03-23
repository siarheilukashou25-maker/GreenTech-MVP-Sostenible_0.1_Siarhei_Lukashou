import { readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { resolve } from "node:path";

const ROOT = process.cwd();
const SOURCE_PATH = resolve(ROOT, "index.html");
const DIST_PATH = resolve(ROOT, "dist", "index.html");

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(2)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
};

const percentSaved = (before, after) => {
  if (before === 0) return "0.00";
  return ((1 - after / before) * 100).toFixed(2);
};

const printReport = (label, before, after) => {
  const saved = before - after;
  console.log(`${label}:`);
  console.log(`  before: ${formatBytes(before)}`);
  console.log(`  after : ${formatBytes(after)}`);
  console.log(`  saved : ${formatBytes(saved)} (${percentSaved(before, after)}%)`);
};

const run = async () => {
  const [source, dist] = await Promise.all([
    readFile(SOURCE_PATH),
    readFile(DIST_PATH),
  ]);

  printReport("Raw size", source.length, dist.length);
  console.log("");
  printReport("Gzip size", gzipSync(source).length, gzipSync(dist).length);
};

run().catch((error) => {
  console.error("Size check failed:", error.message);
  console.error("Tip: run `node build.mjs` first to ensure dist/index.html exists.");
  process.exit(1);
});
