import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEvaluationChallengeTaskFeedbackModalComponent } from './teacher-evaluation-challenge-task-feedback-modal.component';

describe('TeacherEvaluationChallengeTaskFeedbackModalComponent', () => {
  let component: TeacherEvaluationChallengeTaskFeedbackModalComponent;
  let fixture: ComponentFixture<TeacherEvaluationChallengeTaskFeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEvaluationChallengeTaskFeedbackModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEvaluationChallengeTaskFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
