// Create the Context class that uses one of the strategies
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  execute(a, b) {
    return this.strategy.execute(a, b);
  }
}

// Define the different strategies as classes
class SumStrategy {
  execute(a, b) {
    return a + b;
  }
}
class SubtractStrategy {
  execute(a, b) {
    return a - b;
  }
}
class MultiplyStrategy {
  execute(a, b) {
    return a * b;
  }
}

// Create instances of the Context class with different strategies
const contextSum = new Context(new SumStrategy());
const contextSubtract = new Context(new SubtractStrategy());
const contextMultiply = new Context(new MultiplyStrategy());
// Use the Context instances to execute the strategies
console.log(contextSum.execute(5, 3)); // Output: 8
console.log(contextSubtract.execute(5, 3)); // Output: 2
console.log(contextMultiply.execute(5, 3)); // Output: 15

// TODO - Other example
// Definimos las diferentes estrategias
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;

// Creamos el objeto Contexto que utilizará una de las estrategias
class Contexto {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }
  ejecutarEstrategia(a, b) {
    return this.estrategia(a, b);
  }
}
// Creamos instancias del objeto Contexto con diferentes estrategias
const contextoSuma = new Contexto(suma);
const contextoResta = new Contexto(resta);
const contextoMultiplicacion = new Contexto(multiplicacion);
// Utilizamos las instancias del objeto Contexto para ejecutar las estrategias
console.log(contextoSuma.ejecutarEstrategia(5, 3)); // Output: 8
console.log(contextoResta.ejecutarEstrategia(5, 3)); // Output: 2
console.log(contextoMultiplicacion.ejecutarEstrategia(5, 3)); // Output: 15
