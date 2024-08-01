import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEvolucoesComponent } from './lista-evolucoes.component';

describe('ListaEvolucoesComponent', () => {
  let component: ListaEvolucoesComponent;
  let fixture: ComponentFixture<ListaEvolucoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEvolucoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEvolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
