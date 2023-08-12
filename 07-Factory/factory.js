// Define a factory function
function createPerson(name, age, profession) {
  // Create a new object with the given properties
  const person = {};

  // Assign values to the properties
  person.name = name;
  person.age = age;
  person.profession = profession;

  // Define methods for the object
  person.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}. I am ${this.age} years old and work as a ${this.profession}.`
    );
  };

  // Return the created object
  return person;
}

// Create instances using the factory function
const person1 = createPerson("John", 30, "Developer");
const person2 = createPerson("Jane", 25, "Designer");

// Call the introduce method on the instances
person1.introduce(); // Output: Hi, my name is John. I am 30 years old and work as a Developer.
person2.introduce(); // Output: Hi, my name is Jane. I am 25 years old and work as a Designer.


// TODO ----------------------------------------------------------------
// Define a class representing a person
class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  introduce() {
    console.log(
      `Hi, my name is ${this.name}. I am ${this.age} years old and work as a ${this.profession}.`
    );
  }
}
// Define a factory class for creating person objects
class PersonFactory1 {
  createPerson(name, age, profession) {
    return new Person(name, age, profession);
  }
}
// Create an instance of the PersonFactory
const factory1 = new PersonFactory1();
// Use the factory to create person objects
const person11 = factory1.createPerson("John", 30, "Developer");
const person12 = factory1.createPerson("Jane", 25, "Designer");
// Call the introduce method on the person objects
person1.introduce(); // Output: Hi, my name is John. I am 30 years old and work as a Developer.
person2.introduce(); // Output: Hi, my name is Jane. I am 25 years old and work as a Designer.


// TODO ----------------------------------------------------------------
// Define an abstract class representing a person
class Person2 {
  constructor(name, age, profession) {
    if (this.constructor === Person) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  introduce() {
    console.log(
      `Hi, my name is ${this.name}. I am ${this.age} years old and work as a ${this.profession}.`
    );
  }
}
// Define a concrete class that extends the abstract Person class
class Employee extends Person2 {
  constructor(name, age, profession, salary) {
    super(name, age, profession);
    this.salary = salary;
  }
  displaySalary() {
    console.log(`My salary is ${this.salary}.`);
  }
}
// Define a factory class for creating person objects
class PersonFactory2 {
  createPerson(name, age, profession, salary) {
    return new Employee(name, age, profession, salary);
  }
}
// Create an instance of the PersonFactory
const factory = new PersonFactory2();
// Use the factory to create person objects
const person21 = factory.createPerson("John", 30, "Developer", 5000);
const person22 = factory.createPerson("Jane", 25, "Designer", 4000);
// Call the introduce and displaySalary methods on the person objects
person21.introduce(); // Output: Hi, my name is John. I am 30 years old and work as a Developer.
person21.displaySalary(); // Output: My salary is 5000.
person22.introduce(); // Output: Hi, my name is Jane. I am 25 years old and work as a Designer.
person22.displaySalary(); // Output: My salary is 4000.
