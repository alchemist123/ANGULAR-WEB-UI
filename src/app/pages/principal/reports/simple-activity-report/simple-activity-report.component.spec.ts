import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleActivityReportComponent } from './simple-activity-report.component';

describe('SimpleActivityReportComponent', () => {
  let component: SimpleActivityReportComponent;
  let fixture: ComponentFixture<SimpleActivityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleActivityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleActivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
