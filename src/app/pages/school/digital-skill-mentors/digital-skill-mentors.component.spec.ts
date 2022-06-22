import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillMentorsComponent } from './digital-skill-mentors.component';

describe('DigitalSkillMentorsComponent', () => {
  let component: DigitalSkillMentorsComponent;
  let fixture: ComponentFixture<DigitalSkillMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
