import checkout from './checkout.mjs';

export default function submitEvent(pokemon) {
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
      if (selected2) {
        // If there are two choices
        const selectedTypes = [selected1.id, selected2.id];
        const correctTypes = [pokemon.types[0], pokemon.types[1]];

        selectedTypes.sort();
        correctTypes.sort();

        const arraysMatch =
          selectedTypes.length === correctTypes.length &&
          selectedTypes.every((value, index) => value === correctTypes[index]);

        if (arraysMatch) {
          correct = true;
        } else {
          correct = false;
        }
      } else {
        // If there is only one choice
        const selectedTypes = [selected1.id];
        const correctTypes = [pokemon.types[0]];

        selectedTypes.sort();
        correctTypes.sort();

        const arraysMatch =
          selectedTypes.length === correctTypes.length &&
          selectedTypes.every((value, index) => value === correctTypes[index]);

        if (arraysMatch) {
          correct = true;
        } else {
          correct = false;
        }
      }

      checkout(correct);
    }
  }
}
