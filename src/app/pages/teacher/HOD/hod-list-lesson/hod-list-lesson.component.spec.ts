import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodListLessonComponent } from './hod-list-lesson.component';

describe('HodListLessonComponent', () => {
  let component: HodListLessonComponent;
  let fixture: ComponentFixture<HodListLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodListLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodListLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
