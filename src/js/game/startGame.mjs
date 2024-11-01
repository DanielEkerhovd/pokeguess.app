import renderPokemon from './render/renderPokemon.mjs';
import renderSelection from './render/renderSelection.mjs';
import submitEvent from './submit/submitEvent.mjs';
import {
  renderResetButton,
  renderSubmitButton,
} from './reset/renderResetButton.mjs';
import reset from './reset/reset.mjs';
import renderTypes from './types/renderTypes.mjs';

export default async function startGame(gamemode, firstPokemon) {
  // Sets up the initial array of pre-fetched Pokémon
  const renderedPokemon = [];

  // Initial render
  renderSubmitButton();
  renderResetButton();
  reset(renderedPokemon, gamemode);
  renderPokemon(firstPokemon);
  renderTypes();
  renderSelection(firstPokemon);
  submitEvent(firstPokemon, gamemode);
}
