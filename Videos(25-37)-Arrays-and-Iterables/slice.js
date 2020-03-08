// Slice method is used to get a section of your
// string based on some range selection.
// It returns a shallow copy of the elements
// of the original arra. Concept of Shallow and Deep Cloning
// is already covered in one of the videos of Demystifying JavaScript
// Objects Series.

const engineeringDegrees = ['CSE', 'EE', 'ME', 'ECE'];

console.log(engineeringDegrees.slice());

const degrees = engineeringDegrees.slice();
degrees.push('Changed');
console.log(engineeringDegrees);
console.log(degrees);

console.log(engineeringDegrees.slice(0, 3));

console.log(engineeringDegrees.slice(2));
