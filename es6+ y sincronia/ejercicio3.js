// 3.1
const users = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

const userNames = users.map(user => user.name);
console.log(userNames);

// 3.2
const anacletoNames = users.map(user => 
	user.name.startsWith('A') ? 'Anacleto' : user.name
);
console.log(anacletoNames);

// 3.3
const cities = [
	{isVisited: true, name: 'Tokyo'},
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'},
	{isVisited: false, name: 'Seul'}
];

const cityNames = cities.map(city => 
	city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log(cityNames);