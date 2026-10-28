// Lead capture endpoint (TES-18).
// Validates the quote-form POST, forwards it to the lead pipeline webhook
// (Google Sheet append + board email alert), answers JSON to the form UI.
const SITE = "Brownsville";
const ALLOWED_ORIGINS = [
  "https://showerdoorsbrownsville.com",
  "https://www.showerdoorsbrownsville.com",
];

function str(v) {
  return typeof v === "string" ? v.trim() : "";
}

function respond(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const origin = req.headers.origin;
  if (origin) {
    if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
      return respond(res, 403, { ok: false, error: "bad_origin" });
    }
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return respond(res, 405, { ok: false, error: "method_not_allowed" });
  }

  let lead = req.body;
  if (typeof lead === "string") {
    try {
      lead = JSON.parse(lead || "{}");
    } catch (e) {
      return respond(res, 400, { ok: false, error: "bad_json" });
    }
  }
  lead = lead && typeof lead === "object" ? lead : {};

  const name = str(lead.name);
  const phone = str(lead.phone);
  const email = str(lead.email);
  const location = str(lead.location);
  const service = str(lead.project);
  const showerType = str(lead.showertype);
  const dimensions = str(lead.dimensions);
  const photo = str(lead.photo);

  if (!name || !location || !service || !showerType || (!phone && !email)) {
    return respond(res, 400, {
      ok: false,
      error: "missing_required_fields",
      required: ["name", "location", "project", "showertype", "phone or email"],
    });
  }
  if (email && email.indexOf("@") === -1) {
    return respond(res, 400, { ok: false, error: "bad_email" });
  }

  const row = {
    date: new Date().toISOString(),
    name: name,
    phone: phone || "n/a",
    email: email || "n/a",
    service: service,
    site: SITE,
    status: "New",
    location: location,
    details: [showerType, dimensions].filter(Boolean).join(" — ") || "n/a",
    photo: photo || "n/a",
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.error(
      JSON.stringify({ event: "lead_not_configured", site: SITE, row: row })
    );
    return respond(res, 503, { ok: false, error: "lead_pipeline_not_configured" });
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(function () {
      controller.abort();
    }, 7000);
    let upstream;
    try {
      upstream = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
    if (!upstream.ok) {
      throw new Error("upstream_status_" + upstream.status);
    }
    return respond(res, 200, { ok: true });
  } catch (err) {
    console.error(
      JSON.stringify({
        event: "lead_forward_failed",
        site: SITE,
        error: String(err),
        row: row,
      })
    );
    return respond(res, 502, { ok: false, error: "delivery_failed" });
  }
};
