import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCodeComponent } from './batch-code.component';

describe('BatchCodeComponent', () => {
  let component: BatchCodeComponent;
  let fixture: ComponentFixture<BatchCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
