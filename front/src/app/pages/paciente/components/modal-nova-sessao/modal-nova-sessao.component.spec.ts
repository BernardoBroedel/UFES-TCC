import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovaSessaoComponent } from './modal-nova-sessao.component';

describe('ModalNovaSessaoComponent', () => {
  let component: ModalNovaSessaoComponent;
  let fixture: ComponentFixture<ModalNovaSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovaSessaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovaSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
