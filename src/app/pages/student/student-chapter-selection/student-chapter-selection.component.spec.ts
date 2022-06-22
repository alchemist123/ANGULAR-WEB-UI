import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChapterSelectionComponent } from './student-chapter-selection.component';

describe('StudentChapterSelectionComponent', () => {
  let component: StudentChapterSelectionComponent;
  let fixture: ComponentFixture<StudentChapterSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentChapterSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentChapterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
