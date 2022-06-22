import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillsSubmissionHistoryComponent } from './digital-skills-submission-history.component';

describe('DigitalSkillsSubmissionHistoryComponent', () => {
  let component: DigitalSkillsSubmissionHistoryComponent;
  let fixture: ComponentFixture<DigitalSkillsSubmissionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillsSubmissionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillsSubmissionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
