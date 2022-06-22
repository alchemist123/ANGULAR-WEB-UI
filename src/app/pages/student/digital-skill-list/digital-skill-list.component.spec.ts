import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSkillListComponent } from './digital-skill-list.component';

describe('DigitalSkillListComponent', () => {
  let component: DigitalSkillListComponent;
  let fixture: ComponentFixture<DigitalSkillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSkillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
