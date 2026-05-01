// =========================================
// PAGE NAVIGATION
// =========================================

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  document.getElementById('page-' + pageId).classList.add('active');
  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick') && link.getAttribute('onclick').includes("'" + pageId + "'")) {
      link.classList.add('active');
    }
  });
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================
// HEADER SCROLL SHADOW
// =========================================

window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// =========================================
// MOBILE MENU
// =========================================

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// =========================================
// CONTACT FORM
// =========================================
// To receive emails, sign up free at formspree.io,
// create a form, and replace the action URL below:
// form.setAttribute('action', 'https://formspree.io/f/YOUR_ID');

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });
}
