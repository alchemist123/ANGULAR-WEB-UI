import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QandAViewComponent } from './qand-aview.component';

describe('QandAViewComponent', () => {
  let component: QandAViewComponent;
  let fixture: ComponentFixture<QandAViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QandAViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QandAViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
