import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoReabilitadorComponent } from './user-info-reabilitador.component';

describe('UserInfoReabilitadorComponent', () => {
  let component: UserInfoReabilitadorComponent;
  let fixture: ComponentFixture<UserInfoReabilitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoReabilitadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoReabilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
