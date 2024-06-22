import renderTypes from "./js/renderTypes.mjs";
import submitEvent from "./js/submitEvent.mjs";
import fetchRandomPokemon from "./js/fetchRandomPokemon.mjs";
import fetchPokemon from "./js/fetchPokemon.mjs";
import renderPokemon from "./js/renderPokemon.mjs";
import renderSelection from "./js/renderSelection.mjs";



const pokemon = await fetchPokemon(await fetchRandomPokemon());
console.log(pokemon);
renderPokemon(pokemon);
renderSelection(pokemon);
renderTypes();
submitEvent(pokemon);