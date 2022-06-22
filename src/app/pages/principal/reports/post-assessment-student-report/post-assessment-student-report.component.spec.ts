import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAssessmentStudentReportComponent } from './post-assessment-student-report.component';

describe('PostAssessmentStudentReportComponent', () => {
  let component: PostAssessmentStudentReportComponent;
  let fixture: ComponentFixture<PostAssessmentStudentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAssessmentStudentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAssessmentStudentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
