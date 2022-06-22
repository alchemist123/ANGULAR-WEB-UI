import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingQuestionReportsComponent } from './understanding-question-reports.component';

describe('UnderstandingQuestionReportsComponent', () => {
  let component: UnderstandingQuestionReportsComponent;
  let fixture: ComponentFixture<UnderstandingQuestionReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingQuestionReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingQuestionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
