import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabEvaluationComponent } from './teacher-lab-evaluation.component';

describe('TeacherLabEvaluationComponent', () => {
  let component: TeacherLabEvaluationComponent;
  let fixture: ComponentFixture<TeacherLabEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
