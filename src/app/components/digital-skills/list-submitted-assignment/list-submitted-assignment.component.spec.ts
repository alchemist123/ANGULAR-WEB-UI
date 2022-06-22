import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmittedAssignmentComponent } from './list-submitted-assignment.component';

describe('ListSubmittedAssignmentComponent', () => {
  let component: ListSubmittedAssignmentComponent;
  let fixture: ComponentFixture<ListSubmittedAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubmittedAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubmittedAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
