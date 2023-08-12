// Base Coffee class
class Coffee {
  constructor() {
    this.description = "Unknown Coffee";
  }
  cost() {
    return 0;
  }
  getDescription() {
    return this.description;
  }
}
// Concrete coffee types
class Espresso extends Coffee {
  constructor() {
    super();
    this.description = "Espresso";
  }
  cost() {
    return 1.99;
  }
}
class Latte extends Coffee {
  constructor() {
    super();
    this.description = "Latte";
  }
  cost() {
    return 2.49;
  }
}
// Decorator class
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost();
  }
  getDescription() {
    return this.coffee.getDescription();
  }
}
// Decorators for adding extra ingredients
class Milk extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
    this.description = "Milk";
  }
  cost() {
    return this.coffee.cost() + 0.5;
  }
  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}
class Sugar extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
    this.description = "Sugar";
  }
  cost() {
    return this.coffee.cost() + 0.25;
  }
  getDescription() {
    return this.coffee.getDescription() + ", Sugar";
  }
}
// Usage example
const espresso = new Espresso();
console.log(espresso.getDescription()); // Output: "Espresso"
console.log(espresso.cost()); // Output: 1.99
const latteWithMilk = new Milk(new Latte());
console.log(latteWithMilk.getDescription()); // Output: "Latte, Milk"
console.log(latteWithMilk.cost()); // Output: 2.99
const latteWithMilkAndSugar = new Sugar(latteWithMilk);
console.log(latteWithMilkAndSugar.getDescription()); // Output: "Latte, Milk, Sugar"
console.log(latteWithMilkAndSugar.cost()); // Output: 3.24
