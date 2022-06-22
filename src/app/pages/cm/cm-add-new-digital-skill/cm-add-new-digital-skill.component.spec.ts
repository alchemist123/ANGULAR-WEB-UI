import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAddNewDigitalSkillComponent } from './cm-add-new-digital-skill.component';

describe('CmAddNewDigitalSkillComponent', () => {
  let component: CmAddNewDigitalSkillComponent;
  let fixture: ComponentFixture<CmAddNewDigitalSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmAddNewDigitalSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAddNewDigitalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
