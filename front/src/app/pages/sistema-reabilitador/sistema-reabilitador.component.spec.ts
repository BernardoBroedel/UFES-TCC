import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaReabilitadorComponent } from './sistema-reabilitador.component';

describe('SistemaReabilitadorComponent', () => {
  let component: SistemaReabilitadorComponent;
  let fixture: ComponentFixture<SistemaReabilitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaReabilitadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaReabilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
