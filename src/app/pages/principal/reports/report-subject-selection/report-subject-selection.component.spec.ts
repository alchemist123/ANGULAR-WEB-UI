import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSubjectSelectionComponent } from './report-subject-selection.component';

describe('ReportSubjectSelectionComponent', () => {
  let component: ReportSubjectSelectionComponent;
  let fixture: ComponentFixture<ReportSubjectSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSubjectSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSubjectSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
