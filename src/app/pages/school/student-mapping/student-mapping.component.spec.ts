import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMappingComponent } from './student-mapping.component';

describe('StudentMappingComponent', () => {
  let component: StudentMappingComponent;
  let fixture: ComponentFixture<StudentMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
