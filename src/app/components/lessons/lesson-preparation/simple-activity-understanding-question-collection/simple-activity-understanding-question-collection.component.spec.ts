import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleActivityUnderstandingQuestionCollectionComponent } from './simple-activity-understanding-question-collection.component';

describe('SimpleActivityUnderstandingQuestionCollectionComponent', () => {
  let component: SimpleActivityUnderstandingQuestionCollectionComponent;
  let fixture: ComponentFixture<SimpleActivityUnderstandingQuestionCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleActivityUnderstandingQuestionCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleActivityUnderstandingQuestionCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
