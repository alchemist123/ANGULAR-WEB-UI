import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterCardComponent } from './chapter-card.component';

describe('ChapterCardComponent', () => {
  let component: ChapterCardComponent;
  let fixture: ComponentFixture<ChapterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
