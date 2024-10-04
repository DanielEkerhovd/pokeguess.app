import renderPage from './render/renderPage.mjs';
import runApi from './api/runApi.mjs';
import resetDisplay from './resetDisplay.mjs';
import renderTypes from './render/renderTypes.mjs';

export default async function reset(renderedPokemon) {
  const resetButton = document.getElementById('retry');

  const preLoad = 3;

  for (let i = renderedPokemon.length; i < preLoad; i++) {
    const pokemon = await runApi();
    renderedPokemon.push(pokemon);
  }

  const nextPokemon = renderedPokemon.shift();

  resetButton.addEventListener('click', function () {
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const typings = document.getElementById('typings');

    if (!choice2) typings.appendChild(choice1.firstChild);
    else {
      typings.appendChild(choice1.firstChild);
      typings.appendChild(choice2.firstChild);
    }

    resetDisplay();
    renderTypes();
    renderPage(nextPokemon, renderedPokemon);
  });
}
