// Taalknop: vertaalt de huidige pagina via Google Translate (translate.goog-proxy).
(function () {
  var ORIG = "https://mgdevries.github.io";
  var PROXY = "https://mgdevries-github-io.translate.goog";
  function huidigPad() {
    return location.pathname + location.hash.replace(/^#tr-[a-z-]+$/i, "");
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[href*='#tr-']") : null;
    if (!a) return;
    var taal = a.getAttribute("href").split("#tr-")[1];
    if (!taal) return;
    e.preventDefault();
    var pad = location.pathname;
    if (taal === "nl") {
      location.href = ORIG + pad;
    } else {
      location.href = PROXY + pad + "?_x_tr_sl=nl&_x_tr_tl=" + taal + "&_x_tr_hl=" + taal + "&_x_tr_pto=wapp";
    }
  });
})();
