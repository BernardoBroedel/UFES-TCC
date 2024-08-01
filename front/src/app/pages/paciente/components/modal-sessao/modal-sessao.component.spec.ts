import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSessaoComponent } from './modal-sessao.component';

describe('ModalSessaoComponent', () => {
  let component: ModalSessaoComponent;
  let fixture: ComponentFixture<ModalSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSessaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
