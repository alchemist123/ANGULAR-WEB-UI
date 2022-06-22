import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmUnitViewComponent } from './cm-unit-view.component';

describe('CmUnitViewComponent', () => {
  let component: CmUnitViewComponent;
  let fixture: ComponentFixture<CmUnitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmUnitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmUnitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
