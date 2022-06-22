import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarkDetailsComponent } from './student-mark-details.component';

describe('StudentMarkDetailsComponent', () => {
  let component: StudentMarkDetailsComponent;
  let fixture: ComponentFixture<StudentMarkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMarkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
