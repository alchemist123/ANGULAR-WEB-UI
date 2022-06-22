import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEvaluationChallengeTaskRejectModalComponent } from './teacher-evaluation-challenge-task-reject-modal.component';

describe('TeacherEvaluationChallengeTaskRejectModalComponent', () => {
  let component: TeacherEvaluationChallengeTaskRejectModalComponent;
  let fixture: ComponentFixture<TeacherEvaluationChallengeTaskRejectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEvaluationChallengeTaskRejectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEvaluationChallengeTaskRejectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
