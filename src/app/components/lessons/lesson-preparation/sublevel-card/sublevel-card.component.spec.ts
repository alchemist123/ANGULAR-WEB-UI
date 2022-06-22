import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublevelCardComponent } from './sublevel-card.component';

describe('SublevelCardComponent', () => {
  let component: SublevelCardComponent;
  let fixture: ComponentFixture<SublevelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublevelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublevelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
