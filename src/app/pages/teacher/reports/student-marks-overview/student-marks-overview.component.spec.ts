import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarksOverviewComponent } from './student-marks-overview.component';

describe('StudentMarksOverviewComponent', () => {
  let component: StudentMarksOverviewComponent;
  let fixture: ComponentFixture<StudentMarksOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMarksOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMarksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
