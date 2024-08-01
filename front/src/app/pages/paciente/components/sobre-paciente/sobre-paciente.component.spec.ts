import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePacienteComponent } from './sobre-paciente.component';

describe('SobrePacienteComponent', () => {
  let component: SobrePacienteComponent;
  let fixture: ComponentFixture<SobrePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
