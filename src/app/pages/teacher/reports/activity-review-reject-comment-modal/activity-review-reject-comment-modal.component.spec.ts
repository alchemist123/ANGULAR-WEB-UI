import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReviewRejectCommentModalComponent } from './activity-review-reject-comment-modal.component';

describe('ActivityReviewRejectCommentModalComponent', () => {
  let component: ActivityReviewRejectCommentModalComponent;
  let fixture: ComponentFixture<ActivityReviewRejectCommentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityReviewRejectCommentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReviewRejectCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
