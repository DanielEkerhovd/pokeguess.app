import renderTypes from './js/render/renderTypes.mjs';
import getPokemon from './js/api/getPokemon.mjs';
import renderPage from './js/render/renderPage.mjs';
import fetchPokemonAmount from './js/api/pokemons/fetchPokemonAmount.mjs';
import stats from './js/stats/stats.mjs';

import fetchPokemonGens from './js/api/pokemonGens/fetchPokemonGens.mjs';

import menu from './js/menu/menu.mjs';

const currentWebPage = window.location.pathname;

async function main() {
  try {
    await fetchPokemonAmount();
    // Fetches first pokemon
    const pokemon = await getPokemon();

    // Renders types buttons
    renderTypes();

    // Sets up the initial array of pre-fetched Pokémon
    const renderedPokemon = [];
    renderPage(pokemon, renderedPokemon);
  } catch (error) {
    console.error('Failed to fetch Pokémon:', error);
  }
}

fetchPokemonGens();

switch (currentWebPage) {
  case 'index.html':
  case '/':
    break;
  case '/practice/index.html':
  case '/practice/':
    main();
    menu();
    stats();
    break;
}
