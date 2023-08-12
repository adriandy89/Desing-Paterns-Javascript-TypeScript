// Base Coffee interface
interface Coffee {
  cost(): number;
  getDescription(): string;
}
// Concrete coffee types
class Espresso implements Coffee {
  cost() {
    return 1.99;
  }
  getDescription() {
    return "Espresso";
  }
}
class Latte implements Coffee {
  cost() {
    return 2.49;
  }
  getDescription() {
    return "Latte";
  }
}
// Decorator class
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;
  constructor(coffee: Coffee) {
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
  cost() {
    return this.coffee.cost() + 0.5;
  }
  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}
class Sugar extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 0.25;
  }
  getDescription() {
    return this.coffee.getDescription() + ", Sugar";
  }
}

// Usage example
const espresso: Coffee = new Espresso();
console.log(espresso.getDescription()); // Output: "Espresso"
console.log(espresso.cost()); // Output: 1.99

const latteWithMilk: Coffee = new Milk(new Latte());
console.log(latteWithMilk.getDescription()); // Output: "Latte, Milk"
console.log(latteWithMilk.cost()); // Output: 2.99

const latteWithMilkAndSugar: Coffee = new Sugar(latteWithMilk);
console.log(latteWithMilkAndSugar.getDescription()); // Output: "Latte, Milk, Sugar"
console.log(latteWithMilkAndSugar.cost()); // Output: 3.24
