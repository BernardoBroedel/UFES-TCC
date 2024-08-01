import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoSupervisorComponent } from './modal-novo-supervisor.component';

describe('ModalNovoSupervisorComponent', () => {
  let component: ModalNovoSupervisorComponent;
  let fixture: ComponentFixture<ModalNovoSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
