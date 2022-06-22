import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAssignmentModalComponent } from './upload-assignment-modal.component';

describe('UploadAssignmentModalComponent', () => {
  let component: UploadAssignmentModalComponent;
  let fixture: ComponentFixture<UploadAssignmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAssignmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAssignmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
