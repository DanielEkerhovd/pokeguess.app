import selectEvent from '../select/selectEvent.mjs';
// import typesInfo from './typesInfo.mjs';
import fetchTypes from './fetchTypes.mjs';
import typingModal from './typingModal.mjs';

const fetchedTypes = await fetchTypes();
const types = fetchedTypes.types;

function createTypeElement(type, index) {
  const typeElement = document.createElement('div');
  typeElement.classList.add(
    'size-12',
    'rounded-full',
    'cursor-pointer',
    'relative',
    'flex',
    'justify-center',
    'items-end',
  );
  const typeImage = document.createElement('img');
  typeElement.id = `${type.name}`;
  typeElement.dataset.index = index;
  typeImage.src = `/media/type-icons/${type.name}.png`;
  typeImage.alt = `${type.name} type`;
  typeImage.classList.add('rounded-full', 'size-full');
  typeElement.appendChild(typeImage);
  return typeElement;
}

export default function renderTypes() {
  const counter = 0;
  sessionStorage.setItem('counter', counter);

  const typesContainer = document.getElementById('typings');
  typesContainer.innerHTML = '';

  types.forEach((type) => {
    const index = types.indexOf(type);
    const typeButton = createTypeElement(type, index);
    selectEvent(typeButton);
    typingModal(typeButton);
    typesContainer.appendChild(typeButton);
  });
}
