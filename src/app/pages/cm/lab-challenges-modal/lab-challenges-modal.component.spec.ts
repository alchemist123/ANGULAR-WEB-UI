import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabChallengesModalComponent } from './lab-challenges-modal.component';

describe('LabChallengesModalComponent', () => {
  let component: LabChallengesModalComponent;
  let fixture: ComponentFixture<LabChallengesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabChallengesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabChallengesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
