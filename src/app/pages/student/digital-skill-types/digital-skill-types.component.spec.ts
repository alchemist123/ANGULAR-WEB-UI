import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillTypesComponent } from './digital-skill-types.component';

describe('DigitalSkillTypesComponent', () => {
  let component: DigitalSkillTypesComponent;
  let fixture: ComponentFixture<DigitalSkillTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
