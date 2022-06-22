import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillViewComponent } from './digital-skill-view.component';

describe('DigitalSkillViewComponent', () => {
  let component: DigitalSkillViewComponent;
  let fixture: ComponentFixture<DigitalSkillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
