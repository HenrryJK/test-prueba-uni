import { Jugador } from "./clase";

describe('Pruebas de clase', () => {
  /// mejor declarar de forma global
  // const jugador = new Jugador();
  // ya no seria constante sino un let para que funcione el before
  let jugador = new Jugador();

  /// 4 pilares fundamentales
  //  beforeAll();
  //  beforeEach();

  //  afterAll();
  //  afterEach();

  /// Solucion
  beforeAll(() => {
    // console.log('beforeAll');
    // jugador.hp = 100; estaria mal pues saldria error y estarias inicializando mal
  });

  beforeEach(() => {
    // console.log('beforeEach');
    // jugador.hp = 100;
    // Solucion
    jugador = new Jugador
  })

  afterAll(() => {
    // console.log('afterAll');
  })

  afterEach(() => {
    // console.log('afterEach');
    // jugador.hp = 100;
  })


  /// El problema de estas pruebas unitarias

  it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);


  })

  /// Otra prueba

  it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {

    // const jugador = new Jugador();
    // console.log('Esta prueba va a fallar');
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);


  })

  // it('Debe de retornar 0 de hp, si recibe 100 de daño o mas', () => {

  //   // const jugador = new Jugador();
  //   const resp = jugador.recibeDanio(100);

  //   expect(resp).toBe(0);


  // })

});
