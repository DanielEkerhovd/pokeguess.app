import renderTypes from "./js/render/renderTypes.mjs";
import runApi from "./js/api/runApi.mjs";
import renderPage from "./js/render/renderPage.mjs";
import fetchPokemonAmount from "./js/api/fetchPokemonAmount.mjs";

async function main() {
  try {
    await fetchPokemonAmount();
    // Fetches first pokemon
    const pokemon = await runApi();
    console.log("First Pokemon", pokemon);

    // Renders types buttons
    renderTypes();

    // Renders page with the first pokemon data
    // - renderPokemon: Visualizes the pokemon data
    // - renderSelection: Visualizes the selection buttons and adds functionality
    // - submitEvent: Adds functionality to the submit button, with the correct answer
    renderPage(pokemon);
  } catch (error) {
    console.error("Failed to fetch Pokémon:", error);
  }
}

main(

  
);
