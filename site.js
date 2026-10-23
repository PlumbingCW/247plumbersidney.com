(function () {
  "use strict";
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var burger = document.querySelector(".hamburger");
  var closeBtn = document.querySelector(".mob-close");
  if (!drawer || !burger) return;
  function setOpen(open) {
    drawer.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open && closeBtn) closeBtn.focus(); else if (!open) burger.focus({ preventScroll: true });
  }
  burger.addEventListener("click", function () { setOpen(!drawer.classList.contains("open")); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
  overlay.addEventListener("click", function () { setOpen(false); });
  drawer.addEventListener("click", function (e) { if (e.target.tagName === "A") setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) setOpen(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 768 && drawer.classList.contains("open")) setOpen(false); });
})();
