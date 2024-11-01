import renderPokemon from '../render/renderPokemon.mjs';
import renderSelection from '../render/renderSelection.mjs';
import submitEvent from '../submit/submitEvent.mjs';
import {
  renderResetButton,
  renderSubmitButton,
} from '../reset/renderResetButton.mjs';
import reset from '../reset/reset.mjs';
import renderTypes from '../render/renderTypes.mjs';

export default async function nextPokemon(
  pokemon,
  gamemode,
  renderedPokemon = [],
) {
  // Initial render
  renderSubmitButton();
  renderResetButton();
  reset(renderedPokemon);
  renderPokemon(pokemon);
  renderTypes();
  renderSelection(pokemon);
  submitEvent(pokemon, gamemode);
}
