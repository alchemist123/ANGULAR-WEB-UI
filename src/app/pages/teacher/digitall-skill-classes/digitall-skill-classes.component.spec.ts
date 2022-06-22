import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitallSkillClassesComponent } from './digitall-skill-classes.component';

describe('DigitallSkillClassesComponent', () => {
  let component: DigitallSkillClassesComponent;
  let fixture: ComponentFixture<DigitallSkillClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitallSkillClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitallSkillClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
