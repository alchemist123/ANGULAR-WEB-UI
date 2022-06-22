import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmDigitalSkillListComponent } from './cm-digital-skill-list.component';

describe('CmDigitalSkillListComponent', () => {
  let component: CmDigitalSkillListComponent;
  let fixture: ComponentFixture<CmDigitalSkillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmDigitalSkillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmDigitalSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
