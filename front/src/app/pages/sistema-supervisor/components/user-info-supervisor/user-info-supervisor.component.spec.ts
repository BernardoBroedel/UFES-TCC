import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoSupervisorComponent } from './user-info-supervisor.component';

describe('UserInfoSupervisorComponent', () => {
  let component: UserInfoSupervisorComponent;
  let fixture: ComponentFixture<UserInfoSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
