import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyConceptFrameComponent } from './key-concept-frame.component';

describe('KeyConceptFrameComponent', () => {
  let component: KeyConceptFrameComponent;
  let fixture: ComponentFixture<KeyConceptFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyConceptFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyConceptFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
