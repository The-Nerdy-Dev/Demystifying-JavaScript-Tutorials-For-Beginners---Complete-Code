// Create an array of games
const games = ['Call of Duty', 'Need for Speed'];

/**   Push is a mutator method
 * to add a new element at the end of
 * the array and it returns us the length
 * of the array after mutation
*/
 const lengthOfGames = games.push('Road Rash');
console.log(games);
console.log(lengthOfGames);

// Unshift is also a mutator method to add
// a new element at the start of the array
games.unshift('Half Life');

console.log(games);

// Pop method is also a mutator method to
// remove the last element of the array
const removedItem = games.pop();
console.log(removedItem);
console.log(games);

// Shift method is a mutator method to remove the first element
// of the array
const firstItem = games.shift();
console.log(firstItem);
console.log(games);

// Direct Index Access
games[1] = 'Changed';
console.log(games);

// Splice method
games.splice(1, 0, 'Road Rash');
console.log(games);

// Splice for deletion
games.splice(1, 1);
console.log(games);
