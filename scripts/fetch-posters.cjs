#!/usr/bin/env node
// Run: node scripts/fetch-posters.js
const fs = require("fs");
const https = require("https");

const API_KEY = process.env.TMDB_KEY || "276164679f8a3fa97ec2351a4e059b67";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(JSON.parse(data)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchPoster(title, year) {
  const q = encodeURIComponent(title);
  // Try with year first for precision
  let data = await get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}&year=${year}&language=en-US`
  );
  if (!data.results?.length) {
    // Retry without year constraint
    data = await get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}&language=en-US`
    );
  }
  const hit = data.results?.find((r) => r.poster_path) ?? data.results?.[0];
  return hit?.poster_path ? `${IMAGE_BASE}${hit.poster_path}` : null;
}

async function main() {
  const filePath = "./src/app/data/movies.ts";
  let content = fs.readFileSync(filePath, "utf-8");

  // Match each Title / Year / Poster triple
  const re =
    /Title: "([^"]+)",\s*\n\s*Year: "(\d+)",\s*\n\s*Poster: "([^"]+)"/g;
  const movies = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    movies.push({ title: m[1], year: m[2], oldPoster: m[3] });
  }

  console.log(`Fetching posters for ${movies.length} movies…\n`);
  let ok = 0;
  let fail = 0;

  for (const movie of movies) {
    try {
      const url = await fetchPoster(movie.title, movie.year);
      if (url) {
        content = content.replace(`Poster: "${movie.oldPoster}"`, `Poster: "${url}"`);
        console.log(`✓  ${movie.title} (${movie.year})`);
        ok++;
      } else {
        console.log(`✗  ${movie.title} (${movie.year}) — no poster found`);
        fail++;
      }
    } catch (err) {
      console.log(`✗  ${movie.title} (${movie.year}) — ${err.message}`);
      fail++;
    }
    // Stay well within TMDB's 40 req/10s rate limit
    await sleep(280);
  }

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`\nDone — ${ok} updated, ${fail} failed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
