import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotAttendedModalComponent } from './student-not-attended-modal.component';

describe('StudentNotAttendedModalComponent', () => {
  let component: StudentNotAttendedModalComponent;
  let fixture: ComponentFixture<StudentNotAttendedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNotAttendedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotAttendedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
