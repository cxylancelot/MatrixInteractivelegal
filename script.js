/* ==========================================================
   Matrix Interactive Legal · 滚动揭示动画
   用 IntersectionObserver，元素进入视口时加 .in-view
   ========================================================== */
(function () {
  if (!('IntersectionObserver' in window)) {
    // 老浏览器兜底：直接显示
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('in-view');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.dataset.revealDelay || 0, 10);
          setTimeout(function () {
            entry.target.classList.add('in-view');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });
})();
