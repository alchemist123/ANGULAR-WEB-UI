import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBatchModuleComponent } from './teacher-batch-module.component';

describe('TeacherBatchModuleComponent', () => {
  let component: TeacherBatchModuleComponent;
  let fixture: ComponentFixture<TeacherBatchModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBatchModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBatchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
