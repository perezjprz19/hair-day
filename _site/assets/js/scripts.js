const navBtn = document.getElementById('nav-btn');

const navbar = document.getElementById('main-nav');

//mobile show/hide navigation

navBtn.addEventListener('click', () => {
        const open = !navbar.classList.contains('expanded');
        navBtn.classList.toggle('isactive', open);
        navbar.classList.toggle('expanded', open);
        navBtn.setAttribute('aria-expanded', open);

});

const cards = [...document.querySelectorAll('.card')];

// One observer handles both: on-load and on-scroll.
const observer = new IntersectionObserver((entries) => {
  // Take only those that are entering, in DOM order
  const entering = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => cards.indexOf(a.target) - cards.indexOf(b.target));

  // Stagger within this batch
  entering.forEach((entry, i) => {
    const el = entry.target;
    el.style.transitionDelay = `${i * 200}ms`;
    el.classList.add('reveal');
    observer.unobserve(el); // reveal only once
  });
}, {
  threshold: 0.10,          // reveal when ~10% visible
  rootMargin: '0px 0px -10% 0px' // start a bit before fully in view
});

cards.forEach(card => observer.observe(card));


