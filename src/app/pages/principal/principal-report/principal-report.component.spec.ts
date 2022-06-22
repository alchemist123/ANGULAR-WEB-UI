import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalReportComponent } from './principal-report.component';

describe('PrincipalReportComponent', () => {
  let component: PrincipalReportComponent;
  let fixture: ComponentFixture<PrincipalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
