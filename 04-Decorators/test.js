// Define the NotificacionSubject class
class NotificacionSubject {
  constructor() {
    this.observadores = [];
  }
  registrarObservador(observador) {
    this.observadores.push(observador);
  }
  simularCambio() {
    this.observadores.forEach((observador) => observador.actualizar());
  }
}
// Define the ObservadorNotificacion class
class ObservadorNotificacion {
  constructor() {
    this.cambioNotificado = false;
  }
  actualizar() {
    this.cambioNotificado = true;
  }
}
// Test block
describe("Notification System", function () {
  it("should notify observers correctly", function () {
    // Create an instance of NotificacionSubject
    const subject = new NotificacionSubject();
    // Create instances of ObservadorNotificacion
    const observador1 = new ObservadorNotificacion();
    const observador2 = new ObservadorNotificacion();
    // Register the observers in the subject
    subject.registrarObservador(observador1);
    subject.registrarObservador(observador2);
    // Customize the actualizar() method of observador1
    observador1.actualizar = function () {
      this.cambioNotificado = true;
    };
    // Simulate a change and verify the Observer pattern
    subject.simularCambio();
    // Check the value of cambioNotificado
    if (observador1.cambioNotificado === true) {
      console.log("Change was notified correctly.");
    } else {
      console.log("Change was not notified.");
    }
  });
});
