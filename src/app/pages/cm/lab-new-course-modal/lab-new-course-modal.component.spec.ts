import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabNewCourseModalComponent } from './lab-new-course-modal.component';

describe('LabNewCourseModalComponent', () => {
  let component: LabNewCourseModalComponent;
  let fixture: ComponentFixture<LabNewCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabNewCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabNewCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
