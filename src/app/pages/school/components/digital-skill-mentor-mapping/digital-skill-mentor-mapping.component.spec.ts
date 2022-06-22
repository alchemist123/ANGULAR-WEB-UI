import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillMentorMappingComponent } from './digital-skill-mentor-mapping.component';

describe('DigitalSkillMentorMappingComponent', () => {
  let component: DigitalSkillMentorMappingComponent;
  let fixture: ComponentFixture<DigitalSkillMentorMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillMentorMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillMentorMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
