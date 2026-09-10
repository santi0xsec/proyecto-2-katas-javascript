const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const container = document.querySelector('#album-container');
const ul = document.createElement('ul');

for (const album of albums) {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
}

container.appendChild(ul);