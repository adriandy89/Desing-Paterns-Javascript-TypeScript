// Definición de la interfaz DescuentoStrategy
class DescuentoStrategy {
    aplicarDescuento(precio) {
      // Método a implementar en las estrategias de descuento concretas
    }
  }
   // Implementación de la estrategia DescuentoPorcentaje
  class DescuentoPorcentaje extends DescuentoStrategy {
    constructor(porcentaje) {
      super();
      this.porcentaje = porcentaje;
    }
     aplicarDescuento(precio) {
      return precio - (precio * (this.porcentaje/100));
    }
  }
   // Implementación de la estrategia DescuentoCantidadFija
  class DescuentoCantidadFija extends DescuentoStrategy {
    constructor(cantidadFija) {
      super();
      this.cantidadFija = cantidadFija;
    }
     aplicarDescuento(precio) {
      return precio - this.cantidadFija;
    }
  }
   // Implementación de la estrategia SinDescuento
  class SinDescuento extends DescuentoStrategy {
    aplicarDescuento(precio) {
      return precio;
    }
  }
   // Clase Producto
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
     calcularDescuento(descuentoStrategy) {
      return descuentoStrategy.aplicarDescuento(this.precio);
    }
  }
   // Ejemplo de uso
  const producto1 = new Producto("Camiseta", 100);
  const producto2 = new Producto("Pantalón", 200);
   const descuentoPorcentaje = new DescuentoPorcentaje(20);
  const descuentoCantidadFija = new DescuentoCantidadFija(50);
  const sinDescuento = new SinDescuento();
   console.log(producto1.calcularDescuento(descuentoPorcentaje)); // Output: 80
  console.log(producto1.calcularDescuento(descuentoCantidadFija)); // Output: 50
  console.log(producto1.calcularDescuento(sinDescuento)); // Output: 100
   console.log(producto2.calcularDescuento(descuentoPorcentaje)); // Output: 160
  console.log(producto2.calcularDescuento(descuentoCantidadFija)); // Output: 150
  console.log(producto2.calcularDescuento(sinDescuento)); // Output: 200