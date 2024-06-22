import typing from '/types.json' with { type: 'json' };
import selectEvent from './selectEvent.mjs';
import removeSelectEvent from './removeSelectEvent.mjs';

const types = typing.types;

function createTypeElement(type) {
    const typeElement = document.createElement('div');
    typeElement.classList.add('size-20', 'bg-white', 'rounded-full');
    typeElement.id = `${type.name}Type`;
    const typeImage = document.createElement('img');
    typeImage.src = `/src/media/type-icons/${type.name}type.png`;
    typeImage.alt = `${type.name} type`;
    typeImage.classList.add('bg-bg-dark', 'rounded-full');
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