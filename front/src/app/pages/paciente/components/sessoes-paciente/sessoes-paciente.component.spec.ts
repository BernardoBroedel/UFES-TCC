import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessoesPacienteComponent } from './sessoes-paciente.component';

describe('SessoesPacienteComponent', () => {
  let component: SessoesPacienteComponent;
  let fixture: ComponentFixture<SessoesPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessoesPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessoesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
