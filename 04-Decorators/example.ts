function log(target: any, key: string) {
  // Get the original method
  const originalMethod = target[key];
  // Create a new method that logs before the original method is called
  const newMethod = function (...args: any[]) {
    console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
    // Call the original method
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${key}: ${JSON.stringify(result)}`);
    return result;
  };
  // Replace the original method with the new method
  target[key] = newMethod;
}
class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}
const calc = new Calculator();
console.log(calc.add(2, 3)); // Output: Calling add with arguments: [2, 3], Result of add: 5
