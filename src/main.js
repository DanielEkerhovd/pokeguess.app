import getFirstPokemon from '/src/js/game/firstPokemon.mjs';
import startPractice from '/src/js/gamemodes/practice/practice.mjs';
import menu from './js/menu/menu.mjs';

const currentWebPage = window.location.pathname;
const firstPokemon = await getFirstPokemon();

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
