import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodMappingModalComponent } from './hod-mapping-modal.component';

describe('HodMappingModalComponent', () => {
  let component: HodMappingModalComponent;
  let fixture: ComponentFixture<HodMappingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodMappingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodMappingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
