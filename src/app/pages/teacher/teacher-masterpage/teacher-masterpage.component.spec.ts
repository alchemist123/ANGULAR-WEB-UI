import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMasterpageComponent } from './teacher-masterpage.component';

describe('TeacherMasterpageComponent', () => {
  let component: TeacherMasterpageComponent;
  let fixture: ComponentFixture<TeacherMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
