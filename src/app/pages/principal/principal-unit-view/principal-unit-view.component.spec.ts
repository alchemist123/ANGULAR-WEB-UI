import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalUnitViewComponent } from './principal-unit-view.component';

describe('PrincipalUnitViewComponent', () => {
  let component: PrincipalUnitViewComponent;
  let fixture: ComponentFixture<PrincipalUnitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalUnitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalUnitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
