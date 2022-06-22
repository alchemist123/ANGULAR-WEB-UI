import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUnitCardComponent } from './student-unit-card.component';

describe('StudentUnitCardComponent', () => {
  let component: StudentUnitCardComponent;
  let fixture: ComponentFixture<StudentUnitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUnitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUnitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
