import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAssesmentReportsComponent } from './self-assesment-reports.component';

describe('SelfAssesmentReportsComponent', () => {
  let component: SelfAssesmentReportsComponent;
  let fixture: ComponentFixture<SelfAssesmentReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAssesmentReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAssesmentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
