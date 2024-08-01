import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReabilitadoresComponent } from './lista-reabilitadores.component';

describe('ListaReabilitadoresComponent', () => {
  let component: ListaReabilitadoresComponent;
  let fixture: ComponentFixture<ListaReabilitadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReabilitadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReabilitadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
