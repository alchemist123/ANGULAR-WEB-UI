import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificActivityComponent } from './scientific-activity.component';

describe('ScientificActivityComponent', () => {
  let component: ScientificActivityComponent;
  let fixture: ComponentFixture<ScientificActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
