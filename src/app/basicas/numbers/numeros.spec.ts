
// Prueba

import { calcularEdad } from "./numeros";

describe('Pruebas de Numero', () => {

  it('Debe de retornar 100 si el numero ingresado es mayor a 100', () =>{
       const res = calcularEdad(300);

       expect(res).toBe(100);
  });

  it('Debe de retornar el numero ingresado + 1 , si no es mayor a 100', () =>{
    const res = calcularEdad(50);

    expect(res).toBe(51);
});

});

