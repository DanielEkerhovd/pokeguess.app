export default function renderSelection(pokemon) {

    const selectionContainer = document.getElementById('choices');
    selectionContainer.innerHTML = '';

    let i = 0;

    pokemon.types.forEach(type => {
        const selection = document.createElement('div');
        selection.id = `choice${i}`
        i++;
        selection.classList.add('size-20', 'bg-gray-600', 'rounded-full', 'flex', 'justify-center', 'items-center');
        selectionContainer.appendChild(selection);
    });

}