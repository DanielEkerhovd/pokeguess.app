import nextPokemon from './nextPokemon.mjs';
import runApi from '../../api/runApi.mjs';
import resetDisplay from './resetDisplay.mjs';
import renderTypes from '../render/renderTypes.mjs';
import resetTypeMessage from './resetTypeMessage.mjs';

export default async function reset(renderedPokemon, gamemode) {
  const resetButton = document.getElementById('retry');

  const preLoad = 3;

  for (let i = renderedPokemon.length; i < preLoad; i++) {
    const pokemon = await runApi();
    renderedPokemon.push(pokemon);
  }

  const newPokemon = renderedPokemon.shift();

  resetButton.addEventListener('click', function () {
    resetDisplay();
    renderTypes();
    nextPokemon(newPokemon, gamemode, renderedPokemon);
    resetTypeMessage();
  });
}
