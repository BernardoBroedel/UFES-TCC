import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSupervisorComponent } from './sidebar-supervisor.component';

describe('SidebarSupervisorComponent', () => {
  let component: SidebarSupervisorComponent;
  let fixture: ComponentFixture<SidebarSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
