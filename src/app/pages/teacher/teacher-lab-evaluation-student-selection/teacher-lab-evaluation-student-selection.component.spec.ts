import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabEvaluationStudentSelectionComponent } from './teacher-lab-evaluation-student-selection.component';

describe('TeacherLabEvaluationStudentSelectionComponent', () => {
  let component: TeacherLabEvaluationStudentSelectionComponent;
  let fixture: ComponentFixture<TeacherLabEvaluationStudentSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabEvaluationStudentSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabEvaluationStudentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
