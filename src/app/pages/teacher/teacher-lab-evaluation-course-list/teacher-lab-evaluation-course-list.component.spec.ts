import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabEvaluationCourseListComponent } from './teacher-lab-evaluation-course-list.component';

describe('TeacherLabEvaluationCourseListComponent', () => {
  let component: TeacherLabEvaluationCourseListComponent;
  let fixture: ComponentFixture<TeacherLabEvaluationCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabEvaluationCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabEvaluationCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
