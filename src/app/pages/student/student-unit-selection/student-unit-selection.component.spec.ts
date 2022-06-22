import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUnitSelectionComponent } from './student-unit-selection.component';

describe('StudentUnitSelectionComponent', () => {
  let component: StudentUnitSelectionComponent;
  let fixture: ComponentFixture<StudentUnitSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUnitSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUnitSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
