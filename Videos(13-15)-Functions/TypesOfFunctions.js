// First class citizens -> JavaScript Functions

// Function Declaration Way

// function subscribeToChannel(channelName, subscriberName) {
  //   return `Thanks for subscribing to ${channelName}, ${subscriberName}`;
// }

// const subscription = subscribeToChannel('The Nerdy Dev','Alex');
// console.log(subscription);

// function (channelName, subscriberName) {
  //   return `Thanks for subscribing to ${channelName}, ${subscriberName}`;
// }

// Function Expression

// const subscribeToChannel = function (channelName, subscriberName) {
//   return `Thanks for subscribing to ${channelName}, ${subscriberName}`;
// }

hoistingExampleFunctionDeclaration();
function hoistingExampleFunctionDeclaration() {
  console.log('Function declarations are always hoisted at the top of the file');
}

// hoistingExampleFunctionExpression();

// const hoistingExampleFunctionExpression = function () {
//   console.log('Function expressions are not hoisted at the top of the file');
// }

const subscribeToChannelArrowFunction = (channelName, subscriberName) =>  {
  return `Thanks for subscribing to ${channelName}, ${subscriberName}`;
  // return 'Hello';
}
const subscription = subscribeToChannelArrowFunction('The Nerdy Dev','Alex');
console.log(subscription);

const subscribeToChannelArrowFunctionWithImplicitReturn = (channelName, subscriberName) => `Thanks for subscribing to ${channelName}, ${subscriberName}`;
  // return 'Hello';

console.log(subscribeToChannelArrowFunctionWithImplicitReturn('The Nerdy Dev','Kristina'));

const playGame = gamer => console.log(`${gamer} is playing Counter Strike`);

playGame('Rishi');

const multiplyTwoNumbers = (numberOne, numberTwo) => numberOne*numberTwo;
console.log(multiplyTwoNumbers(12,2));
