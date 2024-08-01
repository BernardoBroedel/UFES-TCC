import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoPacienteComponent } from './modal-novo-paciente.component';

describe('ModalNovoPacienteComponent', () => {
  let component: ModalNovoPacienteComponent;
  let fixture: ComponentFixture<ModalNovoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
