import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmManageDigtialSkillContentComponent } from './cm-manage-digtial-skill-content.component';

describe('CmManageDigtialSkillContentComponent', () => {
  let component: CmManageDigtialSkillContentComponent;
  let fixture: ComponentFixture<CmManageDigtialSkillContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmManageDigtialSkillContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmManageDigtialSkillContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
