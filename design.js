// =============================================================================
// /api/design  -  Vercel Serverless Function
// =============================================================================
// Receives the room brief from the browser, calls the Anthropic (Claude)
// Messages API with the AVA Consultant system prompt + repository, and returns
// the structured design JSON.
//
// SECURITY: the Anthropic API key is read from the ANTHROPIC_API_KEY
// environment variable on the server. It is NEVER sent to the browser.
// Set it in Vercel:  Project -> Settings -> Environment Variables.
// =============================================================================

const { buildSystemPrompt } = require("../lib/systemPrompt");

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const DEFAULT_MODEL = "claude-opus-4-8"; // override with env CLAUDE_MODEL (e.g. claude-sonnet-4-6 for lower cost)

module.exports = async function handler(req, res) {
  // --- CORS (same-origin on Vercel; permissive here so it also works if hosted elsewhere) ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error:
        "Server is missing ANTHROPIC_API_KEY. Add it in Vercel > Settings > Environment Variables and redeploy.",
    });
  }

  // --- Parse body (Vercel usually parses JSON; fall back to manual parse) ---
  let inputs = req.body;
  if (typeof inputs === "string") {
    try {
      inputs = JSON.parse(inputs);
    } catch {
      inputs = {};
    }
  }
  inputs = inputs || {};

  // --- Build the room brief sent to Claude ---
  const field = (label, value) =>
    value && String(value).trim() ? `- ${label}: ${value}\n` : "";

  const dims =
    inputs.length || inputs.width || inputs.height
      ? `- Dimensions (L x W x H): ${inputs.length || "?"} x ${inputs.width || "?"} x ${
          inputs.height || "?"
        } ${inputs.units || "m"}\n`
      : "";

  const userMessage =
    "Design the AV solution for the following room. Follow the repository-first principle " +
    "and return the strict JSON object described in your instructions.\n\n# ROOM BRIEF\n" +
    field("Room Type", inputs.roomType) +
    dims +
    field("Seating Capacity", inputs.capacity) +
    field("Platform", inputs.platform) +
    field("Ceiling Type", inputs.ceiling) +
    field("Budget Category", inputs.budget) +
    field("Display Strategy", inputs.display) +
    field("Audio Capture Strategy", inputs.audio) +
    field("Camera Strategy", inputs.camera) +
    field("Switching Strategy", inputs.switching) +
    field("DSP Strategy", inputs.dsp) +
    field("Future Scalability", inputs.scalability) +
    field("Additional Notes / Special Requirements", inputs.notes) +
    "\nWhere a strategy is left blank, recommend the best repository-driven option and " +
    "justify it. Produce a complete, buildable Bill of Materials.";

  // --- Call the Anthropic Messages API ---
  let data;
  try {
    const anthropicRes = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || DEFAULT_MODEL,
        max_tokens: 8000,
        system: buildSystemPrompt(),
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    const raw = await anthropicRes.text();
    if (!anthropicRes.ok) {
      return res.status(anthropicRes.status).json({
        error: "Anthropic API error",
        detail: raw.slice(0, 1200),
      });
    }
    data = JSON.parse(raw);
  } catch (err) {
    return res.status(502).json({ error: "Failed to reach Anthropic API", detail: String(err) });
  }

  // --- Extract text and parse the JSON design ---
  const text = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();

  const design = extractJson(text);
  if (!design) {
    return res.status(200).json({
      error: "Claude did not return valid JSON.",
      rawText: text.slice(0, 4000),
    });
  }

  return res.status(200).json({ design });
};

// Best-effort: strip code fences and grab the outermost {...} block.
function extractJson(text) {
  if (!text) return null;
  let t = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  try {
    return JSON.parse(t);
  } catch {}
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    try {
      return JSON.parse(t.slice(start, end + 1));
    } catch {}
  }
  return null;
}
