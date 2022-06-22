import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSelectionDirectComponent } from './chapter-selection-direct.component';

describe('ChapterSelectionDirectComponent', () => {
  let component: ChapterSelectionDirectComponent;
  let fixture: ComponentFixture<ChapterSelectionDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterSelectionDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterSelectionDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
