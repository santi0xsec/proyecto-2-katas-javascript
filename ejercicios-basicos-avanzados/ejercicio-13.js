const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameToFind) {
      return { exists: true, position: i };
    }
  }

  return false;
}

console.log(nameFinder(names, "Logan"));
console.log(nameFinder(names, "Thor"));