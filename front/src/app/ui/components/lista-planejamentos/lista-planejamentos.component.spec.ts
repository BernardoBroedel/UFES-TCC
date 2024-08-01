import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanejamentosComponent } from './lista-planejamentos.component';

describe('ListaPlanejamentosComponent', () => {
  let component: ListaPlanejamentosComponent;
  let fixture: ComponentFixture<ListaPlanejamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPlanejamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanejamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
