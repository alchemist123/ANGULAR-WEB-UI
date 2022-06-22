import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmDigitalSkillContentListComponent } from './cm-digital-skill-content-list.component';

describe('CmDigitalSkillContentListComponent', () => {
  let component: CmDigitalSkillContentListComponent;
  let fixture: ComponentFixture<CmDigitalSkillContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmDigitalSkillContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmDigitalSkillContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
