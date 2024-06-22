import typing from '/types.json' with { type: 'json' };
import selectEvent from './selectEvent.mjs';
import removeSelectEvent from './removeSelectEvent.mjs';

const types = typing.types;

function createTypeElement(type) {
    const typeElement = document.createElement('div');
    typeElement.classList.add('size-16', 'rounded-full',);
    typeElement.id = `${type.name}`;
    const typeImage = document.createElement('img');
    typeImage.src = `/src/media/type-icons/${type.name}.png`;
    typeImage.alt = `${type.name} type`;
    typeImage.classList.add('rounded-full', 'size-16');
    typeElement.appendChild(typeImage);
    return typeElement;
}

export default function renderTypes() {

    const typesContainer = document.getElementById('typings');

    types.forEach(type => {
        
        const typeButton = createTypeElement(type);
        selectEvent(typeButton);
        typesContainer.appendChild(typeButton);

    });

    removeSelectEvent();

};