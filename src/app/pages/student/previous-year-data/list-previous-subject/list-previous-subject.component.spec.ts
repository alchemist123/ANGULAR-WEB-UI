import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreviousSubjectComponent } from './list-previous-subject.component';

describe('ListPreviousSubjectComponent', () => {
  let component: ListPreviousSubjectComponent;
  let fixture: ComponentFixture<ListPreviousSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPreviousSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreviousSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
