// Define the different strategies as interfaces
interface Strategy {
  execute(a: number, b: number): number;
}
// Implement the strategies
class SumStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}
class SubtractStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}
class MultiplyStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}
// Create the Context class that uses one of the strategies
class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}
// Create instances of the Context class with different strategies
const contextSum = new Context(new SumStrategy());
const contextSubtract = new Context(new SubtractStrategy());
const contextMultiply = new Context(new MultiplyStrategy());
// Use the Context instances to execute the strategies
console.log(contextSum.executeStrategy(5, 3)); // Output: 8
console.log(contextSubtract.executeStrategy(5, 3)); // Output: 2
console.log(contextMultiply.executeStrategy(5, 3)); // Output: 15
