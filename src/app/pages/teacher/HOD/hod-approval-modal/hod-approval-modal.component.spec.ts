import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodApprovalModalComponent } from './hod-approval-modal.component';

describe('HodApprovalModalComponent', () => {
  let component: HodApprovalModalComponent;
  let fixture: ComponentFixture<HodApprovalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodApprovalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodApprovalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
