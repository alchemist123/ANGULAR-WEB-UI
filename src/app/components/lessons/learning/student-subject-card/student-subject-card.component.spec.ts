import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectCardComponent } from './student-subject-card.component';

describe('StudentSubjectCardComponent', () => {
  let component: StudentSubjectCardComponent;
  let fixture: ComponentFixture<StudentSubjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSubjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
