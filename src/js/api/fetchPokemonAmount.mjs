export default async function fetchPokemonAmount() {
  // All existing pokemon without forms, this is not changing automatically at this moment
  const amountPokemon = 1025;

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const allPokemon = data.count;
    // Fetches number of resoures from the api

    // All the forms have an id starting from 10001
    const extraForms = allPokemon - amountPokemon;
    const pokeForms = [];
    for (let i = 1; i < extraForms + 1; i++) {
      pokeForms.push(10000 + i);
    }

    const pokemonData = {
      allPokemon: allPokemon,
      pokemon: amountPokemon,
      extraForms: pokeForms,
    };

    localStorage.setItem('pokemonData', JSON.stringify(pokemonData));
  } catch (error) {
    console.error(error);
    localStorage.setItem('pokemonData', amountPokemon);
  }
}
