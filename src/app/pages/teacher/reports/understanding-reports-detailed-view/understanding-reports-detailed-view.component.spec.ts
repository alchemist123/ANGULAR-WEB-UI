import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingReportsDetailedViewComponent } from './understanding-reports-detailed-view.component';

describe('UnderstandingReportsDetailedViewComponent', () => {
  let component: UnderstandingReportsDetailedViewComponent;
  let fixture: ComponentFixture<UnderstandingReportsDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingReportsDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingReportsDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
