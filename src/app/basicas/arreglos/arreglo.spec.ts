import { obtenerRobots } from "./arreglo";

/// Existen dos formas de saltar pruebas

// Salta todo el grupo de prueba - colocando una "X" antes del describe
xdescribe('Prueba de areglos', () => {

  it('Debe retornar por lo menos 3 robots', () => {

    const res = obtenerRobots();
    // expect(res.length).toBe(3);
    /// seria de esta manera
    expect(res.length).toBeGreaterThanOrEqual(3);

  });
  /// Como saltar una prueba , se coloca un "X" antes del it , saltar una prueba
  xit('Debe de existir Megaman y Ultron', () => {

    const res = obtenerRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');

    /// Y la prueba no se va a ejecutar ni indicar error a epsar de que no esten bien
    // expect(res).toContain('xxxxe');
    // expect(res).toContain('ffdddd');

  });

});

