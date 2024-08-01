import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSupervisorComponent } from './login-supervisor.component';

describe('LoginSupervisorComponent', () => {
  let component: LoginSupervisorComponent;
  let fixture: ComponentFixture<LoginSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
