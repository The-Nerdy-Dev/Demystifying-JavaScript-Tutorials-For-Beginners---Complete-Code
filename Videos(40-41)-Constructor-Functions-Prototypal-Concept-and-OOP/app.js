// Object Oriented Programming and
// Prototypal Inheritance in JavaScript

class Person {
  _planet='Earth';
  constructor(name, age, gender, isGamer) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.isGamer = isGamer;
  }
  logPersonInformation() {
    console.log(`${this.name} is a ${this.gender}
    and is ${this.age} years old. Gamer Status: ${this.isGamer}`);
  }
  // Static methods
  static describe() {
    return 'I am the Person class';
  }
  // getter
  get planet() {
    return this._planet;
  }
  // setter
  set planet(anotherPlanet) {
    this._planet = anotherPlanet;
  }
}

Person.prototype.planet = 'Mars';
console.log(Person.prototype.planet);

// To create a new instance of the class
const personObject = new Person('Alex',21,'Male',false);
personObject.logPersonInformation();

// Static method
console.log(Person.describe());

class Teacher extends Person {
  profession="Teacher";
  constructor(name, age, gender, isGamer, school, department, subject) {
    super(name, age, gender, isGamer);
    this.school = school;
    this.department = department;
    this.subject =subject;
  }
}

const teacherObject = new Teacher('Elena',26,'Female',false,
'Mary Time High School','XYZ','Physics');
console.log(teacherObject);

console.log(teacherObject.name);
