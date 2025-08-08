const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.card, .logo-card, .section h2, .hero .badge, .team-card').forEach(el => {
  el.classList.add('reveal'); observer.observe(el);
});
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  const style = document.createElement('style');
  style.textContent = `.reveal{opacity:.001; transform: translateY(8px); transition: opacity .6s ease, transform .6s ease;}
  .reveal.in{opacity:1; transform:none;}`;
  document.head.appendChild(style);
}