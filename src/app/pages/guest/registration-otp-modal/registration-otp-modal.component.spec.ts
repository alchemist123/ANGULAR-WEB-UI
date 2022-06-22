import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOtpModalComponent } from './registration-otp-modal.component';

describe('RegistrationOtpModalComponent', () => {
  let component: RegistrationOtpModalComponent;
  let fixture: ComponentFixture<RegistrationOtpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationOtpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOtpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
