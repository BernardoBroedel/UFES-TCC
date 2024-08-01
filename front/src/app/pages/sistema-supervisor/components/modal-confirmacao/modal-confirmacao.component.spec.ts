import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoComponent } from './modal-confirmacao.component';

describe('ModalConfirmacaoComponent', () => {
  let component: ModalConfirmacaoComponent;
  let fixture: ComponentFixture<ModalConfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
