import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingQuestionReportOverviewComponent } from './understanding-question-report-overview.component';

describe('UnderstandingQuestionReportOverviewComponent', () => {
  let component: UnderstandingQuestionReportOverviewComponent;
  let fixture: ComponentFixture<UnderstandingQuestionReportOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingQuestionReportOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingQuestionReportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
