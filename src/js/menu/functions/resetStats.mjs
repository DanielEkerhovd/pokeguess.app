export default function resetStats() {
  const resetStatsButton = document.getElementById('resetStats');

  resetStatsButton.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add(
      'fixed',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'bg-black',
      'bg-opacity-80',
      'flex',
      'justify-center',
      'items-center',
      'z-50',
    );

    const modalContent = document.createElement('div');
    modalContent.classList.add(
      'bg-dark',
      'p-4',
      'rounded-sm',
      'w-11/12',
      'max-w-sm',
      'flex',
      'flex-col',
      'items-center',
      'gap-5',
    );

    const modalText = document.createElement('p');
    modalText.textContent = 'Are you sure you want to reset your stats?';

    const modalButtons = document.createElement('div');
    modalButtons.classList.add('flex', 'gap-5');

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.classList.add(
      'bg-dark-hl',
      'text-white',
      'py-2',
      'px-4',
      'rounded-sm',
    );
    yesButton.addEventListener('click', () => {
      localStorage.removeItem('stats');
      sessionStorage.removeItem('stats');
      window.location.reload();
    });

    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.classList.add(
      'bg-black',
      'text-white',
      'py-2',
      'px-4',
      'rounded-sm',
    );
    noButton.addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    modalButtons.append(yesButton, noButton);

    modalContent.append(modalText, modalButtons);

    modal.appendChild(modalContent);

    document.body.appendChild(modal);
  });
}
