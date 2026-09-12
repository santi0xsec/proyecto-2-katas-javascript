// 8
const select$$ = document.querySelector('#character-list');
const img$$ = document.querySelector('.character-image');

const getCharacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json();

    characters.forEach(character => {
        const option$$ = document.createElement('option');
        option$$.value = character.imageUrl;
        option$$.textContent = character.fullName;
        select$$.appendChild(option$$);
    });

    if (characters.length > 0) {
        img$$.src = characters[0].imageUrl;
    }
};

select$$.addEventListener('change', (event) => {
    img$$.src = event.target.value;
});

getCharacters();