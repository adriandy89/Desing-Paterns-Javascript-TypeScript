// Clase ReproductorMusica
class ReproductorMusica {
    constructor() {
      this.estado = null;
    }
     // Método para establecer el estado actual a 'Reproduciendo'
    establecerEstadoReproduciendo() {
      this.estado = new EstadoReproduciendo();
    }
     // Método para establecer el estado actual a 'Pausado'
    establecerEstadoPausado() {
      this.estado = new EstadoPausado();
    }
     // Método para pausar la reproducción
    pausar() {
      this.estado.pausar();
    }
  }
   // Clase Estado
  class Estado {
    pausar() {}
  }
   // Clase concreta 'Reproduciendo'
  class EstadoReproduciendo extends Estado {
    pausar() {
      console.log('Cambiando al estado pausado...');
    }
  }
   // Clase concreta 'Pausado'
  class EstadoPausado extends Estado {
    pausar() {
      console.log('La reproducción ya está en pausa.');
    }
  }
   // Bloque de prueba
  describe('Reproductor de música', () => {
    it('debería cambiar al estado pausado', () => {
      // Crear una instancia de ReproductorMusica
      const reproductorMusica = new ReproductorMusica();
       // Establecer el estado de reproducción
      reproductorMusica.establecerEstadoReproduciendo();
       // Crear una variable booleana para rastrear el cambio de estado
      let cambioRealizado = false;
       // Redefinir el método establecerEstadoPausado
      reproductorMusica.establecerEstadoPausado = function () {
        cambioRealizado = true;
        ReproductorMusica.prototype.establecerEstadoPausado.call(this);
      };
       // Pausar la reproducción
      reproductorMusica.pausar();
       // Verificar si el cambio de estado se realizó correctamente
      if (cambioRealizado) {
        console.log('El cambio de estado a pausado se realizó correctamente.');
      } else {
        console.log('No se realizó el cambio de estado a pausado.');
      }
    });
  });