import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillMappingComponent } from './digital-skill-mapping.component';

describe('DigitalSkillMappingComponent', () => {
  let component: DigitalSkillMappingComponent;
  let fixture: ComponentFixture<DigitalSkillMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
