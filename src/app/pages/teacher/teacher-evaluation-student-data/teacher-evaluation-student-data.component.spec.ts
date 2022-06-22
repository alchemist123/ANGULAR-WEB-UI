import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEvaluationStudentDataComponent } from './teacher-evaluation-student-data.component';

describe('TeacherEvaluationStudentDataComponent', () => {
  let component: TeacherEvaluationStudentDataComponent;
  let fixture: ComponentFixture<TeacherEvaluationStudentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEvaluationStudentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEvaluationStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
