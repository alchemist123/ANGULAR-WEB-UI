import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmSideNavigationComponent } from './cm-side-navigation.component';

describe('CmSideNavigationComponent', () => {
  let component: CmSideNavigationComponent;
  let fixture: ComponentFixture<CmSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
