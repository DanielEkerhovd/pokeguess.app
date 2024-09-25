export default function renderPokemon(pokemon) {
    
        const imageContainer = document.getElementById('pokemonImage');
        const nameContainer = document.getElementById('pokeName');

       const pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
       nameContainer.textContent = `#${pokemon.id} ${pokeName}`;

       imageContainer.src = pokemon.image;
       imageContainer.alt = pokeName + ' image';
};