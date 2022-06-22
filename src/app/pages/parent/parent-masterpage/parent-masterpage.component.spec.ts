import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMasterpageComponent } from './parent-masterpage.component';

describe('ParentMasterpageComponent', () => {
  let component: ParentMasterpageComponent;
  let fixture: ComponentFixture<ParentMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
