import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMicrocontrollerComponent } from './lab-microcontroller.component';

describe('LabMicrocontrollerComponent', () => {
  let component: LabMicrocontrollerComponent;
  let fixture: ComponentFixture<LabMicrocontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabMicrocontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMicrocontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
