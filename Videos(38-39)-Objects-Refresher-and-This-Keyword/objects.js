// A complete refresher of the Demystifying JavaScript
// Objects Series. It is a brief overview of
// JavaScript Objects.

// Create a studentObject with some key-value
// pairs, anything can be used as a key for the object.

const studentObject = {
    name: 'Alex',
    age: 21,
    university: 'XYZ Institute of Technology',
    subjects: [
      'Computer Science',
      'Mathematics',
      'Physics',
      'English'
    ],
    'is gamer': false,
    address: {
        street: 'New Jersey, USA',
        state: 'New York',
        country: 'USA',
        contactNumber: '2121212'
    },
    introduce() {
      console.log(`I am a student of ${studentObject.university}`);
    }
};
console.log(studentObject);

// Accessing the name property of the studentObject
console.log(studentObject.name);

// Invoke the introduce method on the student object
// This is better called as method because it is defined
// on an object.
studentObject.introduce();

// Adding a new property to the existing object
studentObject.isNerd = true;
console.log(studentObject);

// Adding a new method to the existing object
studentObject.getDetails = function () {
  console.log(`${studentObject.name} is ${studentObject.age} years old and is
  a student of ${studentObject.university}`);
}
// Invoke the method
studentObject.getDetails();

// Deletion of a property from the object using delete
// operator
delete studentObject.age;
console.log(studentObject);

console.log(studentObject.age);

// Accessing a key of the object
// using square braces. [CASE discussed
// in the video]
console.log(studentObject['is gamer']);

// studentObject.23 = 23;
studentObject[23] = 23;
console.log(studentObject);

// Iteration in case of objects
for (const key in studentObject) {
  console.log(studentObject[key]);
}
// Spread operator in case of objects
const studentCloneObject = { ...studentObject };
console.log(studentCloneObject);

studentObject.age = 23;
console.log(studentObject);
console.log(studentCloneObject);

studentObject.subjects.push('Changed');
console.log(studentObject.subjects);
console.log(studentCloneObject.subjects);

// Deep cloning in case of objects as an example
const studentDeepCloneObject = {
  ...studentObject,
  subjects: [...studentObject.subjects]
}

console.log(studentDeepCloneObject);
console.log(studentObject);

studentObject.subjects.push('Chemistry');
console.log(studentObject.subjects);
console.log(studentDeepCloneObject.subjects);

// Object.assign [Shallow Cloning]
const studentAssignObject = Object.assign({}, studentObject);
console.log(studentAssignObject);

// Destructuring to pull out keys from the objects
// Modern feature
// You can destructure to as many levels as you want
// depending on the structure of your objecet
const {
  name,
  subjects,
  address: {
    state,
    country
  }
} = studentObject;


console.log(
  name,
  subjects,
  state,
  country
);

// Existence checking 
console.log('name' in studentObject);
