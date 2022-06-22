import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSectionHeadComponent } from './map-section-head.component';

describe('MapSectionHeadComponent', () => {
  let component: MapSectionHeadComponent;
  let fixture: ComponentFixture<MapSectionHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSectionHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSectionHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
