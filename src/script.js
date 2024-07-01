import renderTypes from "./js/renderTypes.mjs";
import fetchRandomPokemon from "./js/fetchRandomPokemon.mjs";
import fetchPokemon from "./js/fetchPokemon.mjs";
import runApi from "./js/runApi.mjs";
import renderPage from "./js/renderPage.mjs";
import fetchPokemonAmount from "./js/fetchPokemonAmount.mjs";



async function main() {
    try {


        await fetchPokemonAmount();
        // Fetches first pokemon
        const pokemon = await runApi();
        console.log('First Pokemon', pokemon);
        
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

main();