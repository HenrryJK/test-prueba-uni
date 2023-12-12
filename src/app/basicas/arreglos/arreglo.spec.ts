import { obtenerRobots } from "./arreglo";


describe('Prueba de areglos', () => {

  it('Debe retornar por lo menos 3 robots', () =>{

      const res = obtenerRobots();
      // expect(res.length).toBe(3);
      /// seria de esta manera
      expect(res.length).toBeGreaterThanOrEqual(3);

  });
  /// Condicionales
    it('Debe de existir Megaman y Ultron', () =>{

      const res = obtenerRobots();
      expect(res).toContain('Megaman');
      expect(res).toContain('Ultron');

  });

});

