import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSwitchBackComponent } from './teacher-switch-back.component';

describe('TeacherSwitchBackComponent', () => {
  let component: TeacherSwitchBackComponent;
  let fixture: ComponentFixture<TeacherSwitchBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSwitchBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSwitchBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
