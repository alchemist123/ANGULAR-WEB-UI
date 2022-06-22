import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingReportsComponent } from './understanding-reports.component';

describe('UnderstandingReportsComponent', () => {
  let component: UnderstandingReportsComponent;
  let fixture: ComponentFixture<UnderstandingReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
