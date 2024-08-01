import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoAnexoComponent } from './modal-novo-anexo.component';

describe('ModalNovoAnexoComponent', () => {
  let component: ModalNovoAnexoComponent;
  let fixture: ComponentFixture<ModalNovoAnexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoAnexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoAnexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
