import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLessonCardComponent } from './support-lesson-card.component';

describe('SupportLessonCardComponent', () => {
  let component: SupportLessonCardComponent;
  let fixture: ComponentFixture<SupportLessonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportLessonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLessonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
