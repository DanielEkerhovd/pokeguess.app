import showMenu from './functions/showMenu.mjs';
import resetStats from './settings/resetStats.mjs';
import toggleTypingsText from './settings/toggleTypingText.mjs';

export default function menu() {
  showMenu();
  resetStats();
  toggleTypingsText();
}
