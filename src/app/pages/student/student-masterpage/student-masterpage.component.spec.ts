import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMasterpageComponent } from './student-masterpage.component';

describe('StudentMasterpageComponent', () => {
  let component: StudentMasterpageComponent;
  let fixture: ComponentFixture<StudentMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
