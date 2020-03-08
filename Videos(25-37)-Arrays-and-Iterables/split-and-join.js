// Split and Join Methods for Arrays and Strings

//Split and join methods

// split method
const gamesString = 'Counter Strike, Road Rash, The Witcher, Need for Speed';
const gamesArray = gamesString.split(',');
console.log(gamesArray);

// join method
const channelDescriptionParts = [
  'The Nerdy Dev',
  'is a YouTube Channel',
  'focussed on Modern Web Development',
  'and general programming stuff'
];
const channelDescriptionString = channelDescriptionParts.join(' ');
console.log(channelDescriptionString);
