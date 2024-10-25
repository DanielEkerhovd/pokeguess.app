export default function fetchRandomPokemon() {
  const pokemonData = JSON.parse(localStorage.getItem('pokemonData'));

  const allPokemon = pokemonData.allPokemon;
  const pokemons = pokemonData.pokemon;
  const extraForms = pokemonData.extraForms;

  const randomPokemon = Math.floor(Math.random() * allPokemon) + 1;

  if (randomPokemon > pokemons) {
    const formIndex = randomPokemon - pokemons;
    const form = extraForms[formIndex - 1];
    return form;
  } else {
    return randomPokemon;
  }
}
