import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMediaUploadModalComponent } from './task-media-upload-modal.component';

describe('TaskMediaUploadModalComponent', () => {
  let component: TaskMediaUploadModalComponent;
  let fixture: ComponentFixture<TaskMediaUploadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskMediaUploadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMediaUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
