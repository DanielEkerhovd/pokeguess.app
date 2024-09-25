import selectEvent from '../select/selectEvent.mjs';

const fetchTypings = async () => {
  try {
    const response = await fetch('../types.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchedTypes = await fetchTypings();

const types = fetchedTypes.types;

function createTypeElement(type) {
  const typeElement = document.createElement('div');
  typeElement.classList.add('size-16', 'rounded-full');
  typeElement.id = `${type.name}`;
  const typeImage = document.createElement('img');
  typeImage.src = `/src/media/type-icons/${type.name}.png`;
  typeImage.alt = `${type.name} type`;
  typeImage.classList.add('rounded-full', 'size-16');
  typeElement.appendChild(typeImage);
  return typeElement;
}

export default function renderTypes() {
  const counter = 0;
  sessionStorage.setItem('counter', counter);

  const typesContainer = document.getElementById('typings');

  types.forEach((type) => {
    const typeButton = createTypeElement(type);
    selectEvent(typeButton);
    typesContainer.appendChild(typeButton);
  });
}
