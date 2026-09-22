import assert from "node:assert/strict";

const base = process.env.ADI_QA_URL || "http://127.0.0.1:3000";
const routes = [
  "/",
  "/data-ai-office",
  "/capacidades",
  "/modelo",
  "/experiencia",
  "/contacto",
];
const links = new Set();
const pages = new Map();
for (const route of routes) {
  const response = await fetch(base + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  pages.set(route, html);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: one H1`);
  assert.ok(html.includes('lang="es"'), `${route}: Spanish language`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${route}: canonical`);
  assert.equal(new URL(canonical[1]).pathname, route);
  assert.ok(html.includes('property="og:title"'), `${route}: OpenGraph`);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (match[1].startsWith("/")) links.add(match[1]);
    if (match[1].startsWith("#"))
      assert.ok(
        html.includes(`id="${match[1].slice(1)}"`),
        `${route}: anchor ${match[1]}`,
      );
  }
}
for (const href of links) {
  const url = new URL(href, base);
  assert.ok(
    routes.includes(url.pathname),
    `Unrecognized internal route: ${href}`,
  );
  if (url.hash)
    assert.ok(
      pages.get(url.pathname).includes(`id="${url.hash.slice(1)}"`),
      `Broken anchor: ${href}`,
    );
}
for (const [old, destination] of [
  ["/servicios", "/capacidades"],
  ["/metodologia", "/modelo"],
]) {
  const response = await fetch(base + old, { redirect: "manual" });
  assert.equal(response.status, 308);
  assert.equal(
    new URL(response.headers.get("location"), base).pathname,
    destination,
  );
}
for (const path of [
  "/robots.txt",
  "/sitemap.xml",
  "/opengraph-image",
  "/branding/adi-logo-noback.png",
  "/branding/adi-logo-vec.svg",
]) {
  assert.equal((await fetch(base + path)).status, 200, path);
}
assert.equal((await fetch(base + "/page-that-does-not-exist")).status, 404);
console.log(
  `PASS: ${routes.length} pages, ${links.size} internal links, metadata, anchors, 308 redirects, assets, sitemap, robots and 404.`,
);
