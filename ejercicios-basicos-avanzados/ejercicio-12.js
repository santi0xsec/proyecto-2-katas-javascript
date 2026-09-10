const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  let uniqueElements = [];

  for (let i = 0; i < list.length; i++) {
    if (!uniqueElements.includes(list[i])) {
      uniqueElements.push(list[i]);
    }
  }

  return uniqueElements;
}

console.log(removeDuplicates(duplicates));