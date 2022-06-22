import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareChapterComponent } from './share-chapter.component';

describe('ShareChapterComponent', () => {
  let component: ShareChapterComponent;
  let fixture: ComponentFixture<ShareChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
