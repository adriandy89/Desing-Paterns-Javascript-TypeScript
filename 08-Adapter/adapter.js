// Adaptee
class EuropeanSocket {
    plugIn() {
      return "Plugged into a European Socket";
    }
  }
   // Target interface
  class USASocket {
    connect() {
      return "Connected to a USA Socket";
    }
  }
   // Adapter
  class SocketAdapter {
    constructor(europeanSocket) {
      this.europeanSocket = europeanSocket;
    }
     connect() {
      return this.europeanSocket.plugIn() + " via an adapter";
    }
  }
   // Usage
  const europeanSocket = new EuropeanSocket();
  const adapter = new SocketAdapter(europeanSocket);
  console.log(adapter.connect()); // Output: Plugged into a European Socket via an adapter


  // TODO ----------------------------------------------------------------
  // Adaptee
class CelsiusSensor {
    getTemperature() {
      return 25;
    }
  }
   // Target interface
  class FahrenheitSensor {
    getTemperatureInFahrenheit() {
      return 77;
    }
  }
   // Adapter
  class SensorAdapter {
    constructor(celsiusSensor) {
      this.celsiusSensor = celsiusSensor;
    }
     getTemperatureInFahrenheit() {
      const celsiusTemperature = this.celsiusSensor.getTemperature();
      const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
      return fahrenheitTemperature;
    }

    getTemperatureInCelsius() {
        return this.celsiusSensor.getTemperature();;
      }
  }
   // Usage
  const celsiusSensor = new CelsiusSensor();
  const adapter1 = new SensorAdapter(celsiusSensor);
  console.log(adapter1.getTemperatureInFahrenheit()); // Output: 77

  const adapter2 = new SensorAdapter(new CelsiusSensor());
  console.log(adapter2.getTemperatureInCelsius()); 