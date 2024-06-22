export default async function fetchRandomPokemon() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const count = data.count;
    const randomId = Math.floor(Math.random() * count) + 1;

    return randomId;

};