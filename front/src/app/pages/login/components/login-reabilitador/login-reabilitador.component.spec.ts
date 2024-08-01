import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReabilitadorComponent } from './login-reabilitador.component';

describe('LoginReabilitadorComponent', () => {
  let component: LoginReabilitadorComponent;
  let fixture: ComponentFixture<LoginReabilitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReabilitadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReabilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
