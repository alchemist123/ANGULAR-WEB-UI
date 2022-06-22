import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitallSkillValuationSubmissionsComponent } from './digitall-skill-valuation-submissions.component';

describe('DigitallSkillValuationSubmissionsComponent', () => {
  let component: DigitallSkillValuationSubmissionsComponent;
  let fixture: ComponentFixture<DigitallSkillValuationSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitallSkillValuationSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitallSkillValuationSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
