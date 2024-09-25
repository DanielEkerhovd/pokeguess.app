import renderPage from "./render/renderPage.mjs";
import runApi from "./api/runApi.mjs";
import resetDisplay from "./resetDisplay.mjs";

export default async function reset() {
  const resetButton = document.getElementById("retry");
  const nextPokemon = await runApi();
  console.log("Next Pokemon", nextPokemon);

  resetButton.addEventListener("click", function () {
    const choices = document.getElementById("choices");
    const typings = document.getElementById("typings");

    while (choices.firstChild) {
      typings.appendChild(choices.firstChild);
    }

    resetDisplay();
    renderPage(nextPokemon);
  });
}
