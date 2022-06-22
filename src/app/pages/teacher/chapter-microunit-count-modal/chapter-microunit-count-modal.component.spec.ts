import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterMicrounitCountModalComponent } from './chapter-microunit-count-modal.component';

describe('ChapterMicrounitCountModalComponent', () => {
  let component: ChapterMicrounitCountModalComponent;
  let fixture: ComponentFixture<ChapterMicrounitCountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterMicrounitCountModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterMicrounitCountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
