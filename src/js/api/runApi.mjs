import fetchRandomPokemon from "./fetchRandomPokemon.mjs";
import fetchPokemon from "./fetchPokemon.mjs";

export default async function runApi(maxRetries = 5) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            const randomPokemon = fetchRandomPokemon();
            const pokemon = await fetchPokemon(randomPokemon);
            if (!pokemon.status === 404) {
                console.error('pokemon missing');
                attempts++;
            }
            return pokemon;
        } catch (error) {
            console.error("Failed to fetch Pokémon");
            attempts++;
        }
    }

    throw new Error("Failed to fetch Pokémon");
};
