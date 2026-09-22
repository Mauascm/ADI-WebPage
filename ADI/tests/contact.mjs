import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

const valid = { nombre: "Prueba local", empresa: "QA local", email: "qa@example.test", objetivo: "Data & AI Office", mensaje: "Prueba local del formulario sin datos reales." };
let mode = "accept";
let received;
let requests = 0;
const mock = createServer(async (req, res) => {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  received = JSON.parse(raw);
  requests++;
  if (mode === "timeout") return;
  res.writeHead(mode === "accept" ? 200 : 500, { "Content-Type": "application/json" });
  res.end("{}");
});
mock.listen(0, "127.0.0.1");
await once(mock, "listening");
const mockUrl = `http://127.0.0.1:${mock.address().port}`;

async function launch(webhook) {
  const portReservation = createServer();
  portReservation.listen(0, "127.0.0.1");
  await once(portReservation, "listening");
  const port = portReservation.address().port;
  await new Promise(resolve => portReservation.close(resolve));
  const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)], { env: { ...process.env, CONTACT_WEBHOOK_URL: webhook }, stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
  let log = "";
  child.stdout.on("data", chunk => { log += chunk; });
  child.stderr.on("data", chunk => { log += chunk; });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 80; i++) {
    if (child.exitCode !== null) throw new Error(log);
    try { const response = await fetch(base); if (response.ok) return { child, base }; } catch { /* Wait for this local child only. */ }
    await delay(250);
  }
  child.kill();
  throw new Error(`Local test server did not start: ${log}`);
}
async function stop(child) {
  child.kill();
  await once(child, "exit");
}
async function post(base, body) {
  const response = await fetch(`${base}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: typeof body === "string" ? body : JSON.stringify(body) });
  return { status: response.status, body: await response.json() };
}
let running;
try {
  running = await launch("");
  const unavailable = await post(running.base, valid);
  assert.equal(unavailable.status, 503);
  assert.equal(unavailable.body.delivered, false);
  await stop(running.child);
  running = await launch(mockUrl);
  for (const body of ["{", null, [], {}, { ...valid, nombre: 4 }, { ...valid, empresa: "   " }, { ...valid, email: "bad" }, { ...valid, mensaje: "corto" }, { ...valid, objetivo: "Marketing" }, { ...valid, mensaje: "a".repeat(5001) }]) {
    assert.equal((await post(running.base, body)).status, 400);
  }
  assert.equal((await post(running.base, { ...valid, mensaje: "a".repeat(21000) })).status, 413);
  assert.equal(requests, 0, "Invalid payloads must never reach webhook");
  const accepted = await post(running.base, { ...valid, nombre: "  Prueba local  ", extra: "discard" });
  assert.equal(accepted.status, 200);
  assert.equal(accepted.body.delivered, true);
  assert.equal(received.nombre, "Prueba local");
  assert.equal(received.extra, undefined);
  assert.equal(received.source, "adi-web-contact-form");
  assert.ok(Number.isFinite(Date.parse(received.receivedAt)));
  mode = "reject";
  const rejected = await post(running.base, valid);
  assert.equal(rejected.status, 502);
  assert.equal(rejected.body.delivered, false);
  mode = "timeout";
  const timedOut = await post(running.base, valid);
  assert.equal(timedOut.status, 502);
  assert.equal(timedOut.body.delivered, false);
  console.log("PASS: missing configuration, 11 invalid payloads, sanitized successful delivery, webhook rejection, 10-second timeout. Local mocks only.");
} finally {
  if (running && running.child.exitCode === null) await stop(running.child);
  mock.closeAllConnections();
  await new Promise(resolve => mock.close(resolve));
}
