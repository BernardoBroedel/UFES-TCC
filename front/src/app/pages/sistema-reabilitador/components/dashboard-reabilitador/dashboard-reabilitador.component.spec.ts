import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReabilitadorComponent } from './dashboard-reabilitador.component';

describe('DashboardReabilitadorComponent', () => {
  let component: DashboardReabilitadorComponent;
  let fixture: ComponentFixture<DashboardReabilitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReabilitadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReabilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
