// map method
const gamesToPlay = [
  'Call of Duty',
  'Road Rash',
  'The Witcher 3 - Wild Hunt'
]
const gamesToPlayCopy = gamesToPlay.map((game, index, games) => {
  return game + '-Outdated';
});

console.log(gamesToPlayCopy);
gamesToPlayCopy.push('Changed');
console.log(gamesToPlayCopy);
console.log(gamesToPlay);
