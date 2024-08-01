import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoReabilitadorComponent } from './modal-novo-reabilitador.component';

describe('ModalNovoReabilitadorComponent', () => {
  let component: ModalNovoReabilitadorComponent;
  let fixture: ComponentFixture<ModalNovoReabilitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoReabilitadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoReabilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
