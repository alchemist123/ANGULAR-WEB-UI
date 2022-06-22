import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBatchManageComponent } from './teacher-batch-manage.component';

describe('TeacherBatchManageComponent', () => {
  let component: TeacherBatchManageComponent;
  let fixture: ComponentFixture<TeacherBatchManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBatchManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBatchManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
