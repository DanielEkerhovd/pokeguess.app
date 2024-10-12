export default function showMenu() {
  const hamburger = document.getElementById('mobileMenu');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full');
  });
}