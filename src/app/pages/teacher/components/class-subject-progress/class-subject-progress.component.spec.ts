import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectProgressComponent } from './class-subject-progress.component';

describe('ClassSubjectProgressComponent', () => {
  let component: ClassSubjectProgressComponent;
  let fixture: ComponentFixture<ClassSubjectProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubjectProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
