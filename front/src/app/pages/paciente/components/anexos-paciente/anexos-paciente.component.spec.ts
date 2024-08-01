import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexosPacienteComponent } from './anexos-paciente.component';

describe('AnexosPacienteComponent', () => {
  let component: AnexosPacienteComponent;
  let fixture: ComponentFixture<AnexosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnexosPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnexosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
