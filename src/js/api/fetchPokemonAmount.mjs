export default async function fetchPokemonAmount() {

    const amountFailSafe = 1302;

    try {
        
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        const count = data.count;

        localStorage.setItem('currentPokemonAmount', count);
        console.log('Pokemon amount:', count);
    
    } catch (error) {
        console.error(error);
        localStorage.setItem('currentPokemonAmount', amountFailSafe);
    };

};
