export default async function fetchPokemon(id) {

    try {
        
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map(type => type.type.name),
        image: data.sprites.front_default
    };

    return pokemon;
    
    } catch (error) {
        console.error(error);
    };

};