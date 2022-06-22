import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanCountComponent } from './lesson-plan-count.component';

describe('LessonPlanCountComponent', () => {
  let component: LessonPlanCountComponent;
  let fixture: ComponentFixture<LessonPlanCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPlanCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
