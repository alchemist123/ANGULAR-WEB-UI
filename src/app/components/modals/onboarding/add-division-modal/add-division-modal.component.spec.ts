import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDivisionModalComponent } from './add-division-modal.component';

describe('AddDivisionModalComponent', () => {
  let component: AddDivisionModalComponent;
  let fixture: ComponentFixture<AddDivisionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDivisionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDivisionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
