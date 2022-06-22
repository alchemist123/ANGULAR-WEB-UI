import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalContentCardComponent } from './digital-content-card.component';

describe('DigitalContentCardComponent', () => {
  let component: DigitalContentCardComponent;
  let fixture: ComponentFixture<DigitalContentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalContentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
