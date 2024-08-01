import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPacienteComponent } from './historico-paciente.component';

describe('HistoricoPacienteComponent', () => {
  let component: HistoricoPacienteComponent;
  let fixture: ComponentFixture<HistoricoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
