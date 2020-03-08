const names = ['Rishi', 'Eclipse', 'Sean'];

console.log(names.indexOf('Sean'));

//Start searching for the first match from the right end of the array
console.log(names.lastIndexOf('Sean'));

const users = [
  {
    name: 'Sean',
    occupation: 'Full Stack Developer'
  },
  {
    name: 'Rishi',
    occupation: 'Student'
  },
  {
    name: 'Gary Simpson',
    occupation: 'MERN Stack Developer'
  }
];

console.log(
  users.indexOf({
    name: 'Gary Simpson',
    occupation: 'MERN Stack Developer'
  })
);


// Using the find method
const seanObject = users.find((user, index) => user.name === 'Sean');

console.log(seanObject);

seanObject.occupation = 'Youtuber and Teacher';

console.log(seanObject, users);


// Using the findIndex method
const seanSittingIndex = users.findIndex(user => user.name === 'Sean');
console.log(seanSittingIndex);
