import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitallSkillValuationListComponent } from './digitall-skill-valuation-list.component';

describe('DigitallSkillValuationListComponent', () => {
  let component: DigitallSkillValuationListComponent;
  let fixture: ComponentFixture<DigitallSkillValuationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitallSkillValuationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitallSkillValuationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
