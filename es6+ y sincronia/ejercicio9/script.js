// 9
const img$$ = document.querySelector('.random-image');

const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();

    img$$.src = pokemon.sprites.other['official-artwork'].front_default;
};

getRandomPokemon();