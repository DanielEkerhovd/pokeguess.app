export default function renderPokemon(pokemon) {
  const imageContainer = document.getElementById('pokemonImage');
  const nameContainer = document.getElementById('pokeName');

  const pokeNameUppercase =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokeName = pokeNameUppercase.replace(/-/g, ' ');
  nameContainer.textContent = pokeName;

  imageContainer.src = pokemon.image;
  imageContainer.alt = 'Image of the pokemon ' + pokeName;
}
