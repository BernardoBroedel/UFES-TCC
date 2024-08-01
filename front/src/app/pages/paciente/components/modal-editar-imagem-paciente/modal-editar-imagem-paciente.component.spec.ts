import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarImagemPacienteComponent } from './modal-editar-imagem-paciente.component';

describe('ModalEditarImagemPacienteComponent', () => {
  let component: ModalEditarImagemPacienteComponent;
  let fixture: ComponentFixture<ModalEditarImagemPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarImagemPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarImagemPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
