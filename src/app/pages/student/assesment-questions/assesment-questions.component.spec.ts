import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentQuestionsComponent } from './assesment-questions.component';

describe('AssesmentQuestionsComponent', () => {
  let component: AssesmentQuestionsComponent;
  let fixture: ComponentFixture<AssesmentQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesmentQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
