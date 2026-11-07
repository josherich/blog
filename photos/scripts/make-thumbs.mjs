#!/usr/bin/env node
// Backfill square grid thumbnails for every post in photos/data.json.
// Requires ImageMagick (`magick`) on PATH. Safe to re-run: existing thumbs
// are skipped, and the `thumb` field is added to posts that lack one.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = join(root, "data.json");
const thumbDir = join(root, "media", "thumbs");
const SIZE = 512;
const QUALITY = 80;

const data = JSON.parse(readFileSync(dataPath, "utf8"));
mkdirSync(thumbDir, { recursive: true });

let made = 0;
let skipped = 0;

for (const post of data.posts || []) {
  if (!post || typeof post.path !== "string") continue;

  const name = basename(post.path, extname(post.path));
  const thumbRel = `photos/media/thumbs/${name}.webp`;
  const thumbAbs = join(thumbDir, `${name}.webp`);
  post.thumb = thumbRel;

  if (existsSync(thumbAbs)) {
    skipped += 1;
    continue;
  }

  const src = join(root, post.path.replace(/^photos\//, ""));
  if (!existsSync(src)) {
    console.warn(`skip missing source: ${post.path}`);
    continue;
  }

  execFileSync("magick", [
    src,
    "-auto-orient",
    "-resize",
    `${SIZE}x${SIZE}^`,
    "-gravity",
    "center",
    "-extent",
    `${SIZE}x${SIZE}`,
    "-strip",
    "-quality",
    String(QUALITY),
    thumbAbs,
  ]);
  made += 1;
  console.log(`thumb ${thumbRel}`);
}

writeFileSync(dataPath, JSON.stringify(data, null, 2) + "\n");
console.log(`done: ${made} generated, ${skipped} already present`);
