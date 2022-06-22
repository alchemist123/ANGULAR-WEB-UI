import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodMappingComponent } from './hod-mapping.component';

describe('HodMappingComponent', () => {
  let component: HodMappingComponent;
  let fixture: ComponentFixture<HodMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
