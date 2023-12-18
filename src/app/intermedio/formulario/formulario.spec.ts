import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario";




describe('Formulario', () => {

  let componente: FormularioRegister;

  beforeEach(() => {

    componente = new FormularioRegister(new FormBuilder());

  });

  it('Debe de crear un formulario con dos campos, email y password', () => {

    // Se espera que
    // que este campo contenga email y debe se existir ese campo

    // Caso
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  // Otra prueba
  it('El email debe de ser un correo valido', () => {
    const control = componente.form.get('email');
    /// La prueba no funcionaria y indicaria un error
    // control?.setValue('henrry@');

    // La prueba pasa correctamente
    control?.setValue('henrry@gnail.com');

    // Lo que se espera
    expect(control?.valid).toBeTruthy();

  });

});




