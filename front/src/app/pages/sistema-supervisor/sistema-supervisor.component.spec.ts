import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSupervisorComponent } from './sistema-supervisor.component';

describe('SistemaSupervisorComponent', () => {
  let component: SistemaSupervisorComponent;
  let fixture: ComponentFixture<SistemaSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
