import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLessonCardComponent } from './digital-lesson-card.component';

describe('DigitalLessonCardComponent', () => {
  let component: DigitalLessonCardComponent;
  let fixture: ComponentFixture<DigitalLessonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalLessonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalLessonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
