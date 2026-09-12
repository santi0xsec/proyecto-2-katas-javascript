// 4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter(age => age > 18);
console.log(adults);

// 4.2
const evens = ages.filter(age => age % 2 === 0);
console.log(evens);

// 4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 4.4
const uStreamers = streamers.filter(s => s.name.toLowerCase().includes('u'));
console.log(uStreamers);

// 4.5
const legendsStreamers = streamers
	.filter(s => s.gameMorePlayed.includes('Legends'))
	.map(s => {
		if (s.age > 35) {
			return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
		}
		return s;
	});
console.log(legendsStreamers);