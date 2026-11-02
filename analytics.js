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
