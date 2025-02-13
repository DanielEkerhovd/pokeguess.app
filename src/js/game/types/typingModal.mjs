export default function typingModal(button) {
  const typing = button.id;
  const text = typing.charAt(0).toUpperCase() + typing.slice(1);

  const modal = document.createElement('div');
  modal.id = `${typing}-modal`;
  modal.dataset.modal = 'typing';
  modal.classList.add(
    'bg-dark',
    'absolute',
    'px-3',
    'px-2',
    'flex',
    'justify-center',
    'items-center',
    'roundend-sm',
    'z-10',
    '-bottom-7',
    'hidden',

    'opacity-0',
    'transition-opacity',
    'duration-500',
  );

  const modalText = document.createElement('p');
  modalText.textContent = text;

  modal.appendChild(modalText);
  button.appendChild(modal);

  button.addEventListener('mouseover', () => {
    modal.classList.remove('opacity-0', 'hidden');
    modal.classList.add('opacity-100');
  });

  button.addEventListener('mouseout', () => {
    modal.classList.add('opacity-0', 'hidden');
    modal.classList.remove('opacity-100');
  });
}
