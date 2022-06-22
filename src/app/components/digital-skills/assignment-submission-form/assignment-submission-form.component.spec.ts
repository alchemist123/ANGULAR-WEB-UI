import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmissionFormComponent } from './assignment-submission-form.component';

describe('AssignmentSubmissionFormComponent', () => {
  let component: AssignmentSubmissionFormComponent;
  let fixture: ComponentFixture<AssignmentSubmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSubmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
