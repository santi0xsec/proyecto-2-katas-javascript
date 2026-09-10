// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

// 1.2
const toRemove = document.querySelector('.fn-remove-me');
if (toRemove) {
    toRemove.remove();
}

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

for (const car of cars) {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
}
printHereDiv.appendChild(ulCars);

// 1.4
const countryCards = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const item of countryCards) {
    const card = document.createElement('div');
    card.classList.add('country-card');

    const h4 = document.createElement('h4');
    h4.textContent = item.title;

    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.title;

    card.appendChild(h4);
    card.appendChild(img);
    document.body.appendChild(card);
}

// 1.5
const removeLastBtn = document.createElement('button');
removeLastBtn.textContent = 'Eliminar el último';
removeLastBtn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.country-card');
    if (allCards.length > 0) {
        allCards[allCards.length - 1].remove();
    }
});
document.body.appendChild(removeLastBtn);

// 1.6
const existingCards = document.querySelectorAll('.country-card');

for (const card of existingCards) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar este';
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });
    card.appendChild(deleteBtn);
}