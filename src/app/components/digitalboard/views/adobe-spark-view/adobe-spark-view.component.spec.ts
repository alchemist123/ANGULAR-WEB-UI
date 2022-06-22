import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeSparkViewComponent } from './adobe-spark-view.component';

describe('AdobeSparkViewComponent', () => {
  let component: AdobeSparkViewComponent;
  let fixture: ComponentFixture<AdobeSparkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdobeSparkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdobeSparkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
