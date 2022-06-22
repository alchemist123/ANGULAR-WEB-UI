import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChapterCardComponent } from './student-chapter-card.component';

describe('StudentChapterCardComponent', () => {
  let component: StudentChapterCardComponent;
  let fixture: ComponentFixture<StudentChapterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentChapterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentChapterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
