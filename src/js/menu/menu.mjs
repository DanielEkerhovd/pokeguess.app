import showMenu from './functions/showMenu.mjs';
import resetStats from './functions/resetStats.mjs';
import renderGenChoices from './render/renderGenChoices.mjs';

export default function menu() {
  showMenu();
  resetStats();
  renderGenChoices();
}
