/**
 * Renders the correct types of the Pokémon in the selection container.
 * Renders even if the types are the same, this to remove the event listeners.
 *
 * @param {boolean} status - Boolean value if the selected types are correct.
 * @param {string[]} correctTypes - Array of the correct types of the Pokémon.
 * @example showCorrectTypes(true, ['grass', 'poison']);
 */

export default function showCorrectTypes(status, correctTypes) {
  if (!status) {
    const messageContainer = document.getElementById('type-message');
    messageContainer.classList.remove('hidden');
    messageContainer.textContent = 'Correct type';
    if (correctTypes.length === 2) {
      messageContainer.textContent += 's';
    }
  }

  const container = document.getElementById('choices');
  container.innerHTML = '';

  correctTypes.forEach((type) => {
    const typeElement = document.createElement('img');
    typeElement.src = `/media/type-icons/${type}.png`;
    typeElement.classList.add('size-12');
    container.appendChild(typeElement);
  });
}
