import checkout from './checkout.mjs';
import showCorrectTypes from './showCorrectTypes.mjs';
import updatePracticeStats from '../../gamemodes/practice/stats/updateStats.mjs';
import submitWithoutSelected from './error/submitWithoutSelected.mjs';

export default function submitEvent(pokemon, gamemode) {
  const submit = document.getElementById('submitButton');
  submit.addEventListener('click', () => submitEventListener(pokemon));

  function submitEventListener(pokemon) {
    let correct = false;

    const resetButton = document.getElementById('retry');

    const choice1 = document.getElementById('choice1');
    const selected1 = choice1.firstChild;
    const choice2 = document.getElementById('choice2');
    const selected2 = choice2 ? choice2.firstChild : null;

    // Check if the choices have content inside them
    if (selected1 && (choice2 ? selected2 : true)) {
      resetButton.classList.remove('hidden');
      resetButton.classList.add('flex');

      const selectedTypes = [];
      const correctTypes = [];

      if (selected1) {
        selectedTypes.push(selected1.id);
        correctTypes.push(pokemon.types[0]);
      }

      if (selected2) {
        selectedTypes.push(selected2.id);
        correctTypes.push(pokemon.types[1]);
      }

      selectedTypes.sort();
      correctTypes.sort();

      const arraysMatch =
        selectedTypes.length === correctTypes.length &&
        selectedTypes.every((value, index) => value === correctTypes[index]);

      if (arraysMatch) {
        correct = true;
      }

      const typesContainer = document.getElementById('typings');
      typesContainer.classList.add('hidden');

      if (gamemode === 'practice') {
        console.log('practice');
        updatePracticeStats(correct);
      }

      checkout(correct, correctTypes);
      showCorrectTypes(correct, correctTypes);
    } else {
      submitWithoutSelected();
    }
  }
}
