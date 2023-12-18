import { Jugador2 } from "./jugador2"


// Agrupador de la prueba
describe('Jugador 2 Emit', () => {
  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2());

  it('Debe  de emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;
    // suscribir al evenemitter
    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio(1000);

    // Evaluamos
    expect(nuevoHP).toBe(0);



  })

  it('Debe  de emitir un evento cuando recibe daño y sobrevivir si es menor a 100', () => {
    let nuevoHP = 0;
    // suscribir al evenemitter
    jugador.hpCambia.subscribe(hp => nuevoHP = hp);

    jugador.recibeDanio(50);

    // Evaluamos
    expect(nuevoHP).toBe(50);



  })




})







