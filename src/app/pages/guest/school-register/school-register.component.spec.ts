import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRegisterComponent } from './school-register.component';

describe('SchoolRegisterComponent', () => {
  let component: SchoolRegisterComponent;
  let fixture: ComponentFixture<SchoolRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
