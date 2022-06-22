import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReportDetailedViewComponent } from './activity-report-detailed-view.component';

describe('ActivityReportDetailedViewComponent', () => {
  let component: ActivityReportDetailedViewComponent;
  let fixture: ComponentFixture<ActivityReportDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityReportDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReportDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
