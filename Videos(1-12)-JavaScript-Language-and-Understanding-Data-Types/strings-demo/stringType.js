console.log('javascript ran...');
// Double Quotes
//Back Ticks
const channelName = 'The Nerdy Dev';
console.log(channelName);

const whatWeDo = `
We are the

back

benchers.

And we never sit at the front in a class


`;
console.log(whatWeDo);

// const channelIntroduction =
//   'Hello. This is ' +
//   channelName +
//   ' and our focus is to teach people web development';

// console.log(channelIntroduction);

const channelIntroduction = `Hello. This is
  ${channelName}
   and our focus is to teach people web development`;
console.log(channelIntroduction);

const html = `
  <div>
    <h1>${channelName}</h1>
    <p>${channelIntroduction}</p>
  </div>
`;
console.log(html);
