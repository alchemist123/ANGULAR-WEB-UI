import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmFeedbackMainComponent } from './cm-feedback-main.component';

describe('CmFeedbackMainComponent', () => {
  let component: CmFeedbackMainComponent;
  let fixture: ComponentFixture<CmFeedbackMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmFeedbackMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmFeedbackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
