import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmMasterpageComponent } from './cm-masterpage.component';

describe('CmMasterpageComponent', () => {
  let component: CmMasterpageComponent;
  let fixture: ComponentFixture<CmMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
