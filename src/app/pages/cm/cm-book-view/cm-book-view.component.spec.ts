import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmBookViewComponent } from './cm-book-view.component';

describe('CmBookViewComponent', () => {
  let component: CmBookViewComponent;
  let fixture: ComponentFixture<CmBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
