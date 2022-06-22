import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabViewSourceCodeModalComponent } from './teacher-lab-view-source-code-modal.component';

describe('TeacherLabViewSourceCodeModalComponent', () => {
  let component: TeacherLabViewSourceCodeModalComponent;
  let fixture: ComponentFixture<TeacherLabViewSourceCodeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabViewSourceCodeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabViewSourceCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
