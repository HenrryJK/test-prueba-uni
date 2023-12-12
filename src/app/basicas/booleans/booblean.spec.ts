import { usuarioIngresadOFail, usuarioIngresado } from "./boolean";

describe('Pruebas de Booleanos', () =>{

  it('Debe de retornar true' , () => {
    const res = usuarioIngresado();

    // espera que el resultado sea true
    expect(res).toBe(true);
    // o de otra forma
    // expect(res).toBeFalsy();
    // expect(res).not.toBeTruthy();

  });

  it('Debe de retornar falso', () =>{
    const resp = usuarioIngresadOFail();

    expect(resp).toBe(false);



  });



});
