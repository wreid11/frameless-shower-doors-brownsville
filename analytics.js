// GA4 analytics + lead conversion tracking (TES-36, board-approved).
// Inert until MEASUREMENT_ID is set to the real G-… ID from this site's
// GA4 property: no third-party script loads, no cookies are set, no requests.
// The measurement ID lives ONLY here — change it in this one file.
(function () {
  var MEASUREMENT_ID = "G-XXXXXXXXXX"; // TES-36: set from the GA4 property
  var SITE = "brownsville-frameless-shower-doors";

  if (!/^G-[A-Z0-9]+$/.test(MEASUREMENT_ID)) return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, { send_page_view: true });

  window.siteTrackLead = function (service, lang) {
    try {
      gtag("event", "generate_lead", {
        site: SITE,
        service: service || "n/a",
        language: lang || document.documentElement.lang || "en"
      });
    } catch (e) { /* analytics must never break the form */ }
  };
})();

// Vercel Web Analytics (TES-31, board-approved Decision 2). Cookieless page
// views measured by Vercel itself — no ID, no cookies. The
// /_vercel/insights/script.js route only activates once Web Analytics is
// enabled on the project AND a deployment follows; until then the request
// 404s silently and nothing is collected.
(function () {
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  var s = document.createElement("script");
  s.defer = true;
  s.src = "/_vercel/insights/script.js";
  document.head.appendChild(s);
})();
