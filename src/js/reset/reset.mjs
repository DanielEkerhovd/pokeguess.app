import renderPage from '../render/renderPage.mjs';
import getPokemon from '../api/getPokemon.mjs';
import resetDisplay from './resetDisplay.mjs';
import renderTypes from '../render/renderTypes.mjs';
import resetTypeMessage from './resetTypeMessage.mjs';

export default async function reset(renderedPokemon) {
  const resetButton = document.getElementById('retry');

  const preLoad = 3;

  for (let i = renderedPokemon.length; i < preLoad; i++) {
    const pokemon = await getPokemon();
    renderedPokemon.push(pokemon);
  }

  const nextPokemon = renderedPokemon.shift();

  resetButton.addEventListener('click', function () {
    resetDisplay();
    renderTypes();
    renderPage(nextPokemon, renderedPokemon);
    resetTypeMessage();
  });
}
