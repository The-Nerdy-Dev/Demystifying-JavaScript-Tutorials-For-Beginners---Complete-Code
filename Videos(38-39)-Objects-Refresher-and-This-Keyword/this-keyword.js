// The below code demo covers the rules
// of the this keyword in various contexts.
// This keyword is one of the most confusing
// topics in Modern JavaScript.

// Code down below
// * IMPLICIT BINDING [Discussed in the video]
// * EXPLICIT BINDING [Discussed in the video]

// 1.this in global context
console.log(this);

// 2. this in a normal function that is called inside the global context

function tweetNormalFunction() {
  console.log(this);
}
tweetNormalFunction();

// 3. this in an arrow function that is also called inside the
// global context

const tweetArrowFunction = () => {
  console.log(this);
}
tweetArrowFunction();

// 4. this in a method(normal) that is called on an object

const channel = {
  name: "The Nerdy Dev",
  tweetMethod: function () {
    console.log(this.name);
  }
}
channel.tweetMethod();

// 5. this in a method (arrow function) that is again called on an object

const channelTwo = {
  name: "The Nerdy Dev",
  tweetArrowMethod: () => console.log(this.name)
}
channelTwo.tweetArrowMethod();

const student = {
  enrollmentNumber: 'SA 2013-21242',
  name: 'Alex',
  course: 'Computer Science',
  year: 2020,
  showStatus: function () {
    console.log(`Name: ${this.name} Enrollment Number: ${this.enrollmentNumber}
    `);
    console.log(`Course and Year: ${this.course} ${this.year}`);
  }
}
student.showStatus();

const user = {
  name: 'Kristina',
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  mother: {
    name: 'Jenny',
    greet: function () {
      console.log(`I am back, ${this.name}`);
    }
  }
}

// IMPLICIT BINDING
user.greet();
user.mother.greet();

// call method on every function that allows you to invoke
// the function specifying in what context the function will be
// invoked

const wishMeLuck = function () {
  console.log(`My name is ${this.name}`);
}
const seanObject = {
  name: 'Sean',
  age: 23
}
wishMeLuck.call(seanObject);

// apply method

// function tellHobbies(hobbyOne, hobbyTwo, hobbyThree) {
//   console.log(`Hello, my name is ${this.name} and my hobbies
//   are ${hobbyOne} ${hobbyTwo} ${hobbyThree}`);
// }
// const hobbies = [
//   'Gardening', 'Listening to Music', 'Exercising'
// ];

// const me = {
//   name: 'Alex',
//   age: 21
// }

// tellHobbies.apply(me, hobbies)

// bind method

function tellHobbies(hobbyOne, hobbyTwo, hobbyThree) {
  console.log(`Hello, my name is ${this.name} and my hobbies
  are ${hobbyOne} ${hobbyTwo} ${hobbyThree}`);
}
const hobbies = [
  'Gardening', 'Listening to Music', 'Exercising'
];

const me = {
  name: 'Alex',
  age: 21
}

const invokeHobbies = tellHobbies.bind(me, ...hobbies)
// console.log(invokeHobbies);
invokeHobbies();
