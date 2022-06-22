import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMappingModalComponent } from './student-mapping-modal.component';

describe('StudentMappingModalComponent', () => {
  let component: StudentMappingModalComponent;
  let fixture: ComponentFixture<StudentMappingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMappingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMappingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
