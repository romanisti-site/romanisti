const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
  if (progress) progress.style.width = pct + '%';
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('#siteNav a').forEach(a => {
  a.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-it]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.lang-content').forEach(el => {
    el.classList.toggle('active', el.dataset.language === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold: .12});

document.querySelectorAll('section, article').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
