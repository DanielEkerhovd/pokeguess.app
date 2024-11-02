export default function createTypeElement(type, index) {
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
