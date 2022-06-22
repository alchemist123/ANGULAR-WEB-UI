import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmChallengeTaskComponent } from './cm-challenge-task.component';

describe('CmChallengeTaskComponent', () => {
  let component: CmChallengeTaskComponent;
  let fixture: ComponentFixture<CmChallengeTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmChallengeTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmChallengeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
