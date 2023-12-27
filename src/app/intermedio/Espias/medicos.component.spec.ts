import { Observable, from } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  // Como llamar al service
  let componente: MedicosComponent;
  const servicio = new MedicosService(null as any);


  beforeEach(() => {
    componente = new MedicosComponent(servicio);

  });

  it('Init: Debe de cargar los medicos', () => {

    const medicos = ['Medico1', 'Medico2', 'Medico3'];
    // permite hacer peticiones falsas cuando algo suceda
    spyOn(servicio, 'getMedicos').and.callFake(() => {

      return from([medicos])
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un medico', () => {

    // declaramos spy en el servicio y hacemos una simulacion que es de tipo observable
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => new Observable());


    // llamamos al metodo
    componente.agregarMedico();

    // Ejecutar espia - que sea llamado la constante espia
    expect(espia).toHaveBeenCalled();

  });


  it('Debe agregar un nuevo medico al arreglo de médico', () => {
    const medico = { id: 1, nombre: 'Joel' };

    spyOn(servicio, 'agregarMedico')
      .and.returnValue(Observable.from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThan(1);

  });

});
