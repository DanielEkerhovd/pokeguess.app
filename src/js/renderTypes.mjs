import typing from '/types.json' with { type: 'json' };

const types = typing.types;

function createTypeElement(type) {
    const typeElement = document.createElement('div');
    typeElement.classList.add('size-16', 'bg-white', 'rounded-full');
    typeElement.id = `${type.name}Type`;
    const typeImage = document.createElement('img');
    typeImage.src = `/src/media/type-icons/${type.name}type.png`;
    typeImage.alt = `${type.name} type`;
    typeImage.classList.add('size-max', 'bg-bg-dark', 'rounded-full');
    typeElement.appendChild(typeImage);
    return typeElement;
}


export default function renderTypes() {

    const typesContainer = document.getElementById('typings');

    types.forEach(type => {
        const typeButton = createTypeElement(type);
        typesContainer.appendChild(typeButton);
    });

};