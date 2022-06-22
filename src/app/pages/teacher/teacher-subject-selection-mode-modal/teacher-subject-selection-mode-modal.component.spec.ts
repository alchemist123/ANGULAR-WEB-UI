import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSubjectSelectionModeModalComponent } from './teacher-subject-selection-mode-modal.component';

describe('TeacherSubjectSelectionModeModalComponent', () => {
  let component: TeacherSubjectSelectionModeModalComponent;
  let fixture: ComponentFixture<TeacherSubjectSelectionModeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSubjectSelectionModeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSubjectSelectionModeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
