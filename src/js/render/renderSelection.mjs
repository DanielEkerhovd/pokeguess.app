export default function renderSelection(pokemon) {
  const selectionContainer = document.getElementById('choices');
  selectionContainer.innerHTML = '';

  let i = 0;

  pokemon.types.forEach(() => {
    const selection = document.createElement('div');
    selection.id = `choice${i + 1}`;
    i++;
    selection.classList.add(
      'size-16',
      'flex',
      'justify-center',
      'items-center',
      'rounded-full',
      'bg-gray-200',
    );
    selectionContainer.appendChild(selection);
  });
}
