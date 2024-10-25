export function renderResetButton() {
  const submitContainer = document.getElementById('submitContainer');
  if (document.getElementById('retry')) {
    submitContainer.removeChild(document.getElementById('retry'));
  }

  const container = document.createElement('div');
  container.id = 'retry';
  container.classList.add(
    'flex-2',
    'hidden',
    'items-center',
    'justify-center',
    'size-20',
    'bg-dark-hl',
    'rounded-sm',
    'px-5',
  );

  const image = document.createElement('img');
  image.classList.add('size-fit');
  image.src = '/src/media/retry.png';
  image.alt = 'Retry icon';

  container.appendChild(image);
  submitContainer.appendChild(container);
}

export function renderSubmitButton() {
  const submitContainer = document.getElementById('submitContainer');
  if (document.getElementById('submitButton')) {
    submitContainer.removeChild(document.getElementById('submitButton'));
  }

  const container = document.createElement('div');
  container.id = 'submitButton';
  container.classList.add(
    'flex-1',
    'flex',
    'items-center',
    'justify-center',
    'rounded-sm',
    'h-20',
    'font-semibold',
    'text-2xl',
    'bg-dark-hl',
  );

  const icon = document.createElement('img');
  icon.id = 'submitIcon';
  icon.classList.add('size-16');
  icon.src = '/src/media/go.png';
  icon.alt = 'Go icon';

  container.appendChild(icon);
  submitContainer.appendChild(container);
}
