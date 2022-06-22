import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMappingComponent } from './teacher-mapping.component';

describe('TeacherMappingComponent', () => {
  let component: TeacherMappingComponent;
  let fixture: ComponentFixture<TeacherMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
