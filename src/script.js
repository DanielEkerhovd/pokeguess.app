import renderTypes from './js/render/renderTypes.mjs';
import runApi from './js/api/runApi.mjs';
import renderPage from './js/render/renderPage.mjs';
import fetchPokemonAmount from './js/api/fetchPokemonAmount.mjs';
import stats from './js/stats/stats.mjs';

async function main() {
  try {
    await fetchPokemonAmount();
    // Fetches first pokemon
    const pokemon = await runApi();

    // Renders types buttons
    renderTypes();

    // Sets up the initial array of pre-fetched Pokémon
    const renderedPokemon = [];
    renderPage(pokemon, renderedPokemon);
  } catch (error) {
    console.error('Failed to fetch Pokémon:', error);
  }
}

main();
stats();
