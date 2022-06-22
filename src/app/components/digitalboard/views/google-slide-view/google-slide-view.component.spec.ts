import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSlideViewComponent } from './google-slide-view.component';

describe('GoogleSlideViewComponent', () => {
  let component: GoogleSlideViewComponent;
  let fixture: ComponentFixture<GoogleSlideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSlideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSlideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
