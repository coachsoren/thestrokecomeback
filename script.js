(function () {
  "use strict";

  /* ── Copyright year ── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Sticky navbar shadow on scroll ── */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu toggle ── */
  var menuBtn   = document.getElementById("menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var iconMenu  = document.getElementById("icon-menu");
  var iconClose = document.getElementById("icon-close");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        iconMenu.classList.remove("hidden");
        iconClose.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        iconMenu.classList.add("hidden");
        iconClose.classList.remove("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ── Smooth scroll for all nav anchor links ── */
  document.querySelectorAll("a.nav-link[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        iconMenu.classList.remove("hidden");
        iconClose.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      }
      var navHeight = navbar ? navbar.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ── FAQ accordion ── */
  document.querySelectorAll(".faq-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item    = btn.closest(".faq-item");
      var answer  = item.querySelector(".faq-answer");
      var icon    = item.querySelector(".faq-icon");
      var iconPlus  = item.querySelector(".icon-plus");
      var iconMinus = item.querySelector(".icon-minus");
      var isOpen  = item.classList.contains("open");

      // Close all others
      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        if (openItem === item) return;
        var otherAnswer = openItem.querySelector(".faq-answer");
        var otherIconPlus  = openItem.querySelector(".icon-plus");
        var otherIconMinus = openItem.querySelector(".icon-minus");
        openItem.classList.remove("open");
        openItem.querySelector(".faq-btn").setAttribute("aria-expanded", "false");
        otherAnswer.classList.remove("open");
        if (otherIconPlus)  otherIconPlus.classList.remove("hidden");
        if (otherIconMinus) otherIconMinus.classList.add("hidden");
      });

      if (isOpen) {
        item.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        answer.classList.remove("open");
        if (iconPlus)  iconPlus.classList.remove("hidden");
        if (iconMinus) iconMinus.classList.add("hidden");
      } else {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        answer.classList.add("open");
        if (iconPlus)  iconPlus.classList.add("hidden");
        if (iconMinus) iconMinus.classList.remove("hidden");
      }
    });
  });

})();
