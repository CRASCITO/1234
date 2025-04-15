// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

themeToggle?.addEventListener('click', toggleTheme);

// Set initial theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

// ===== AOS Init =====
AOS.init({
  duration: 800,
  once: true,
});

// ===== Preloader =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});

// ===== Hamburger Menu =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ===== Buy Now Auto DM =====
document.querySelectorAll('.btn-buy').forEach(button => {
  button.addEventListener('click', function () {
    const productName = this.getAttribute('data-product');
    const dmMessage = `I want to buy this product: ${productName}`;
    const encodedMessage = encodeURIComponent(dmMessage);
    const instaURL = `https://www.instagram.com/direct/t/17842120517735105/?text=${encodedMessage}`;
    window.open(instaURL, '_blank');
  });
});
