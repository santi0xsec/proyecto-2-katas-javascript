// Ejercicio 14: Contador de repeticiones
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  let counts = {};

  for (let i = 0; i < list.length; i++) {
    let word = list[i];
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

console.log(repeatCounter(words));