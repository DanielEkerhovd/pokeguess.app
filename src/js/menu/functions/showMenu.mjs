export default function showMenu() {
  const hamburger = document.getElementById('mobileMenu');
  const menu = document.getElementById('menu');
  const closeMenu = document.getElementById('closeMenu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full');
  });
}
