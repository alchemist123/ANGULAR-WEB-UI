import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabComponent } from './teacher-lab.component';

describe('TeacherLabComponent', () => {
  let component: TeacherLabComponent;
  let fixture: ComponentFixture<TeacherLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
