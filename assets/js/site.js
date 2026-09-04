
(() => {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === page) a.setAttribute('aria-current','page');
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const filters = document.querySelectorAll('[data-filter]');
  const workloads = document.querySelectorAll('[data-category]');
  filters.forEach(btn => btn.addEventListener('click', () => {
    const wanted = btn.dataset.filter;
    filters.forEach(b => b.classList.toggle('active', b === btn));
    workloads.forEach(card => card.hidden = wanted !== 'all' && card.dataset.category !== wanted);
  }));
})();
