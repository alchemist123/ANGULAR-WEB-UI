import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeSparkComponent } from './adobe-spark.component';

describe('AdobeSparkComponent', () => {
  let component: AdobeSparkComponent;
  let fixture: ComponentFixture<AdobeSparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdobeSparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdobeSparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
