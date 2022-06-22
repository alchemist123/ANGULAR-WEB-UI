import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSubLevelsComponent } from './lesson-sub-levels.component';

describe('LessonSubLevelsComponent', () => {
  let component: LessonSubLevelsComponent;
  let fixture: ComponentFixture<LessonSubLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSubLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSubLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
