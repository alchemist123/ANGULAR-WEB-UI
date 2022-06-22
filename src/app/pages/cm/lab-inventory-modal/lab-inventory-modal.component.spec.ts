import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInventoryModalComponent } from './lab-inventory-modal.component';

describe('LabInventoryModalComponent', () => {
  let component: LabInventoryModalComponent;
  let fixture: ComponentFixture<LabInventoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabInventoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInventoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
