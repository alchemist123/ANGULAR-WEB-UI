import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodBookViewComponent } from './hod-book-view.component';

describe('HodBookViewComponent', () => {
  let component: HodBookViewComponent;
  let fixture: ComponentFixture<HodBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
