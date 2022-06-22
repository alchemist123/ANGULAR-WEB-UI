import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillTeacherMappingModalComponent } from './digital-skill-teacher-mapping-modal.component';

describe('DigitalSkillTeacherMappingModalComponent', () => {
  let component: DigitalSkillTeacherMappingModalComponent;
  let fixture: ComponentFixture<DigitalSkillTeacherMappingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillTeacherMappingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillTeacherMappingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
