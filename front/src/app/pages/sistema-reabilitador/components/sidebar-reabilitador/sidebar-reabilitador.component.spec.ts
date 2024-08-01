import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarReabilitadorComponent } from './sidebar-reabilitador.component';

describe('SidebarReabilitadorComponent', () => {
  let component: SidebarReabilitadorComponent;
  let fixture: ComponentFixture<SidebarReabilitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarReabilitadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarReabilitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
