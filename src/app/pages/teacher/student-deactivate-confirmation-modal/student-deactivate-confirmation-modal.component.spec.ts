import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeactivateConfirmationModalComponent } from './student-deactivate-confirmation-modal.component';

describe('StudentDeactivateConfirmationModalComponent', () => {
  let component: StudentDeactivateConfirmationModalComponent;
  let fixture: ComponentFixture<StudentDeactivateConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDeactivateConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeactivateConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
