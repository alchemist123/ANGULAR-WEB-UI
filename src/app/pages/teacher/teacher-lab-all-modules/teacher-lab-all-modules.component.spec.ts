import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabAllModulesComponent } from './teacher-lab-all-modules.component';

describe('TeacherLabAllModulesComponent', () => {
  let component: TeacherLabAllModulesComponent;
  let fixture: ComponentFixture<TeacherLabAllModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabAllModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabAllModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
