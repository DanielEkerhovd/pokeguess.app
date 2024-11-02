import getFirstPokemon from '/src/js/game/firstPokemon.mjs';
import startPractice from '/src/js/gamemodes/practice/practice.mjs';
import menu from './js/menu/menu.mjs';
import setSettings from './js/menu/settings/firstSettings.mjs';

const currentWebPage = window.location.pathname;
const firstPokemon = await getFirstPokemon();

setSettings();

switch (currentWebPage) {
  case 'index.html':
  case '/':
    break;
  case '/practice/index.html':
  case '/practice/':
    startPractice(firstPokemon);
    menu();
    break;
}
