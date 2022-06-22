import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListSelectionComponent } from './activity-list-selection.component';

describe('ActivityListSelectionComponent', () => {
  let component: ActivityListSelectionComponent;
  let fixture: ComponentFixture<ActivityListSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
