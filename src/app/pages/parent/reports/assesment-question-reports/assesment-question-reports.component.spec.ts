import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentQuestionReportsComponent } from './assesment-question-reports.component';

describe('AssesmentQuestionReportsComponent', () => {
  let component: AssesmentQuestionReportsComponent;
  let fixture: ComponentFixture<AssesmentQuestionReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesmentQuestionReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentQuestionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
