import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmFeedbackModalComponent } from './cm-feedback-modal.component';

describe('CmFeedbackModalComponent', () => {
  let component: CmFeedbackModalComponent;
  let fixture: ComponentFixture<CmFeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmFeedbackModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
