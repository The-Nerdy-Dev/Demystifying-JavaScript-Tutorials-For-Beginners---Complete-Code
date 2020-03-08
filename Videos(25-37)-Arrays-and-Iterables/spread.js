

// spread operator
const nerds = ['Sean', 'The Nerdy Dev', 'Alex', 'Rishi'];
console.log(nerds);

const nerdsCopy = [...nerds];

nerdsCopy.push('Changed');
console.log(nerds, nerdsCopy);

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 2.2, 0.5];
console.log(Math.min(...NUMBERS));

const gamers = [
  {
    name: 'The Nerdy Dev',
    isGamer: true
  },
  {
    name: 'Sean',
    isGamer: true
  },
  {
    name: 'Rishi',
    isGamer: false
  }
];

const gamersCopy = [...gamers];

gamers.push({ name: 'Anonymous', isGamer: false });

console.log(gamers, gamersCopy);

gamers[0].name = 'The Nerdy';
console.log(gamers, gamersCopy);

const gamersCopyAlongWithCopiedObjects = gamers.map(gamer => (
  {
    name: gamer.name,
    isGamer: gamer.isGamer
  }
));
console.log(gamersCopyAlongWithCopiedObjects);

gamers[1].name = 'Sean Changed';
console.log(gamers, gamersCopyAlongWithCopiedObjects);
