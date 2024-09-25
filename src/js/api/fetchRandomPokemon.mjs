export default function fetchRandomPokemon() {

    const amount = localStorage.getItem('currentPokemonAmount');
    const randomPokemon = Math.floor(Math.random() * amount) + 1;
    return randomPokemon;

};