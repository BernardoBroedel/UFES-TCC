import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledButtonComponent } from './filled-button.component';

describe('FilledButtonComponent', () => {
  let component: FilledButtonComponent;
  let fixture: ComponentFixture<FilledButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
