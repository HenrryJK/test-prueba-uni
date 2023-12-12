



/// Sirve para agupar pruebas
// describe('Pruebas de String');

import { mensaje } from "./string";


// ejecutar una prueba - ejecutar una prueba especific<a
// it('Debe de regresar un string');
// it('Debe de contener un numero de telefono valido');

// Primera prueba
describe('Pruebas de String', () => {
    it('Prueba de mensaje , debe regresar un String', () => {
       const resp = mensaje('Henrry');

       // espera que la respuesta sea algo en particular
      //  expect(typeof resp === 'string')
      expect(typeof resp).toBe('string');
    });


    /// Otra prueba
    it('Debe retornar un saludo con el nombre enviado', () => {

      // const resp = mensaje('Henrry');
      // debo evaluar que la respueta sea:  "Saludos 'Henrry' " sea Saludos Henrry
    //  expect(resp).toBe('Saludos Henrry');

      const name ='Lucho';
      const resp = mensaje(name)
      // Este tipo de prueba es muy fragil porque le estamos poniendo algo muy conciso y muy sintacticamente
      // expect(resp).toBe('Saludos '+ name);
      /// Deberia quedar asi
      // evaluamos que to.Contain = que contenga
      expect(resp).toContain(name);
   });

});



