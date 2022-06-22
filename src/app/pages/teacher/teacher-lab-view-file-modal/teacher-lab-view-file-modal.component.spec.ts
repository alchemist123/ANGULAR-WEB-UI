import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLabViewFileModalComponent } from './teacher-lab-view-file-modal.component';

describe('TeacherLabViewFileModalComponent', () => {
  let component: TeacherLabViewFileModalComponent;
  let fixture: ComponentFixture<TeacherLabViewFileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLabViewFileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLabViewFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
