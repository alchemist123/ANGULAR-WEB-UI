import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEvaluationTaskContentComponent } from './teacher-evaluation-task-content.component';

describe('TeacherEvaluationTaskContentComponent', () => {
  let component: TeacherEvaluationTaskContentComponent;
  let fixture: ComponentFixture<TeacherEvaluationTaskContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEvaluationTaskContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEvaluationTaskContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
