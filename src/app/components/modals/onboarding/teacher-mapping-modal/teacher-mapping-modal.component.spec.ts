import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMappingModalComponent } from './teacher-mapping-modal.component';

describe('TeacherMappingModalComponent', () => {
  let component: TeacherMappingModalComponent;
  let fixture: ComponentFixture<TeacherMappingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMappingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMappingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
