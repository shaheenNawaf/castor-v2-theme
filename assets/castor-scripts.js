/* Castor landing page — shared JS utilities */

/* ── Scroll-reveal ──────────────────────────────────────────────── */
(function() {
  var THRESHOLD = 0.1;

  if (!('IntersectionObserver' in window)) {
    /* Fallback: just reveal everything immediately */
    document.querySelectorAll('.reveal, .reveal-left, .stagger').forEach(function(el) {
      el.classList.add('in');
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: THRESHOLD, rootMargin: '0px 0px -8% 0px' });

  function observeAll() {
    document.querySelectorAll('.reveal, .reveal-left, .stagger').forEach(function(el) {
      observer.observe(el);
    });
  }

  /* Run on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }

  /* Re-observe after Shopify theme editor section reloads */
  document.addEventListener('shopify:section:load', function() {
    setTimeout(observeAll, 50);
  });
})();
