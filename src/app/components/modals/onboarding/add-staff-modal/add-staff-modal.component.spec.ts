import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffModalComponent } from './add-staff-modal.component';

describe('AddStaffModalComponent', () => {
  let component: AddStaffModalComponent;
  let fixture: ComponentFixture<AddStaffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
