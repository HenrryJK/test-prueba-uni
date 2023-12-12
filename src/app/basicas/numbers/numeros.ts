export function calcularEdad(age :number) {

  // evaluamos el if
  if (age > 100) {
        return 100;
  }else{
    // evaluamos cuando se cumple tambien
    // si quitarmos el return , haria un return undefined y la prueba lanzaria un error porque no hay un return especifico.
    return age + 1;
  }
}
