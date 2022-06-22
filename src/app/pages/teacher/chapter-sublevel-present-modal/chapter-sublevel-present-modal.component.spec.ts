import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSublevelPresentModalComponent } from './chapter-sublevel-present-modal.component';

describe('ChapterSublevelPresentModalComponent', () => {
  let component: ChapterSublevelPresentModalComponent;
  let fixture: ComponentFixture<ChapterSublevelPresentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterSublevelPresentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterSublevelPresentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
