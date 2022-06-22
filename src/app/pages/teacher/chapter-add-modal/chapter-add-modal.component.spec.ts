import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAddModalComponent } from './chapter-add-modal.component';

describe('ChapterAddModalComponent', () => {
  let component: ChapterAddModalComponent;
  let fixture: ComponentFixture<ChapterAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
