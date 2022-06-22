import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillComponentViewComponent } from './digital-skill-component-view.component';

describe('DigitalSkillComponentViewComponent', () => {
  let component: DigitalSkillComponentViewComponent;
  let fixture: ComponentFixture<DigitalSkillComponentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillComponentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
