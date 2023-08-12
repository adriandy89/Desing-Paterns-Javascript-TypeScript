// Clase base para los aprobadores
class Aprobador {
  constructor(nombre) {
    this.nombre = nombre;
    this.siguienteAprobador = null;
  }
  establecerSiguiente(aprobador) {
    this.siguienteAprobador = aprobador;
  }
  aprobar(monto) {
    if (this.puedeAprobar(monto)) {
      console.log(`${this.nombre} aprobó el monto de ${monto}.`);
    } else if (this.siguienteAprobador) {
      console.log(
        `${this.nombre} no puede aprobar el monto de ${monto}. Pasando al siguiente aprobador.`
      );
      this.siguienteAprobador.aprobar(monto);
    } else {
      console.log(`Ningún aprobador puede aprobar el monto de ${monto}.`);
    }
  }
  puedeAprobar(monto) {
    // Implementa la lógica de aprobación específica en las subclases
    throw new Error("Debes implementar el método puedeAprobar.");
  }
}
// Subclase de aprobador para aprobaciones de bajo monto
class AprobadorBajoMonto extends Aprobador {
  puedeAprobar(monto) {
    return monto <= 1000;
  }
}
// Subclase de aprobador para aprobaciones de alto monto
class AprobadorAltoMonto extends Aprobador {
  puedeAprobar(monto) {
    return monto <= 5000;
  }
}
// Ejemplo de uso
const aprobador1 = new AprobadorBajoMonto("Aprobador 1");
const aprobador2 = new AprobadorAltoMonto("Aprobador 2");
aprobador1.establecerSiguiente(aprobador2);
// Aprobación de montos
aprobador1.aprobar(500); // Aprobador 1 aprobó el monto de 500.
aprobador1.aprobar(1500); // Aprobador 2 aprobó el monto de 1500.
aprobador1.aprobar(10000); // Ningún aprobador puede aprobar el monto de 10000.
