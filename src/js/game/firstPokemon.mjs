import firstPokemon from '../api/runApi.mjs';
import fetchPokemonAmount from '../api/fetchPokemonAmount.mjs';

export default async function getFirstPokemon() {
  if (!sessionStorage.getItem('firstPokemon')) {
    await fetchPokemonAmount();
    const pokemon = await firstPokemon();
    if (window.location.pathname === '/') {
      sessionStorage.setItem('firstPokemon', JSON.stringify(pokemon));
    }
    return pokemon;
  } else {
    const pokemon = JSON.parse(sessionStorage.getItem('firstPokemon'));
    sessionStorage.removeItem('firstPokemon');
    return pokemon;
  }
}
