import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedStudentAnswersViewComponent } from './detailed-student-answers-view.component';

describe('DetailedStudentAnswersViewComponent', () => {
  let component: DetailedStudentAnswersViewComponent;
  let fixture: ComponentFixture<DetailedStudentAnswersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedStudentAnswersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedStudentAnswersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
