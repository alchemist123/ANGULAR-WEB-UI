import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmLevelUpComponent } from './cm-level-up.component';

describe('CmLevelUpComponent', () => {
  let component: CmLevelUpComponent;
  let fixture: ComponentFixture<CmLevelUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmLevelUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmLevelUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
