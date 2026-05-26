/* ═══════════════════════════════════════════
   PIOCCI — Main Script
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Header shadow on scroll ── */
  var header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('shadow-lg', window.scrollY > 20);
  });

  /* ── Hero parallax ── */
  window.addEventListener('scroll', function () {
    var heroImg = document.querySelector('.relative.min-h-\\[600px\\] img');
    if (heroImg) heroImg.style.transform = 'translateY(' + window.pageYOffset * 0.4 + 'px)';
  });

});

/* ════════════════════════════════════════
   QUARTER-CIRCLE NAV
   ════════════════════════════════════════ */

function openCircleNav() {
  document.getElementById('circleNav').classList.add('open');
  document.getElementById('navOverlay').classList.add('open');
  document.getElementById('navToggle').classList.add('open');
  /* stagger each arc item */
  document.querySelectorAll('.arc-item').forEach(function (el, i) {
    el.style.transitionDelay = (0.12 + i * 0.06) + 's';
  });
}

function closeCircleNav() {
  document.getElementById('circleNav').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
  document.getElementById('navToggle').classList.remove('open');
  /* reset stagger so next open re-animates cleanly */
  document.querySelectorAll('.arc-item').forEach(function (el) {
    el.style.transitionDelay = '0s';
  });
}

function toggleCircleNav() {
  var isOpen = document.getElementById('circleNav').classList.contains('open');
  if (isOpen) {
    closeCircleNav();
  } else {
    openCircleNav();
  }
}

/* Close on Escape key */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeCircleNav();
});
