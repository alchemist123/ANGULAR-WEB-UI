import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSublevelsComponent } from './chapter-sublevels.component';

describe('ChapterSublevelsComponent', () => {
  let component: ChapterSublevelsComponent;
  let fixture: ComponentFixture<ChapterSublevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterSublevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterSublevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
