import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStandardModalComponent } from './add-standard-modal.component';

describe('AddStandardModalComponent', () => {
  let component: AddStandardModalComponent;
  let fixture: ComponentFixture<AddStandardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStandardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStandardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
