import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitallSkillSubmissionsComponent } from './digitall-skill-submissions.component';

describe('DigitallSkillSubmissionsComponent', () => {
  let component: DigitallSkillSubmissionsComponent;
  let fixture: ComponentFixture<DigitallSkillSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitallSkillSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitallSkillSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
