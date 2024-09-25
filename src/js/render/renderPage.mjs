import renderPokemon from './renderPokemon.mjs';
import renderSelection from './renderSelection.mjs';
import submitEvent from '../submitEvent.mjs';
import { renderResetButton, renderSubmitButton } from './renderResetButton.mjs';
import reset from '../reset.mjs';

export default function renderPage(pokemon, renderedPokemon) {
  renderSubmitButton();
  renderResetButton();
  reset(renderedPokemon);
  renderPokemon(pokemon);
  renderSelection(pokemon);
  submitEvent(pokemon);
}
