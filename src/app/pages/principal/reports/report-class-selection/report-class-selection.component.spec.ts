import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClassSelectionComponent } from './report-class-selection.component';

describe('ReportClassSelectionComponent', () => {
  let component: ReportClassSelectionComponent;
  let fixture: ComponentFixture<ReportClassSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportClassSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClassSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
