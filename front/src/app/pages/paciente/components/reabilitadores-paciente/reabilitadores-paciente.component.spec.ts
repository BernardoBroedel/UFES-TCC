import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabilitadoresPacienteComponent } from './reabilitadores-paciente.component';

describe('ReabilitadoresPacienteComponent', () => {
  let component: ReabilitadoresPacienteComponent;
  let fixture: ComponentFixture<ReabilitadoresPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReabilitadoresPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReabilitadoresPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
