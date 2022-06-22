import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUnitThemeModalComponent } from './student-unit-theme-modal.component';

describe('StudentUnitThemeModalComponent', () => {
  let component: StudentUnitThemeModalComponent;
  let fixture: ComponentFixture<StudentUnitThemeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUnitThemeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUnitThemeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
