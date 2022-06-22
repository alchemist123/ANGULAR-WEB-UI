import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperientialActivityComponent } from './experiential-activity.component';

describe('ExperientialActivityComponent', () => {
  let component: ExperientialActivityComponent;
  let fixture: ComponentFixture<ExperientialActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperientialActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperientialActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
