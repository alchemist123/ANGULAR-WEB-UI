import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMasterpageComponent } from './school-masterpage.component';

describe('SchoolMasterpageComponent', () => {
  let component: SchoolMasterpageComponent;
  let fixture: ComponentFixture<SchoolMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
