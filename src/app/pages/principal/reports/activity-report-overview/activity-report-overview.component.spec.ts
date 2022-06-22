import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReportOverviewComponent } from './activity-report-overview.component';

describe('ActivityReportOverviewComponent', () => {
  let component: ActivityReportOverviewComponent;
  let fixture: ComponentFixture<ActivityReportOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityReportOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
