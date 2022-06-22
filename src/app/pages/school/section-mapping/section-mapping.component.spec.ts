import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMappingComponent } from './section-mapping.component';

describe('SectionMappingComponent', () => {
  let component: SectionMappingComponent;
  let fixture: ComponentFixture<SectionMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
