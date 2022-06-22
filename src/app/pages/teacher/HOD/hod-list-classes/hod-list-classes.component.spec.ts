import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodListClassesComponent } from './hod-list-classes.component';

describe('HodListClassesComponent', () => {
  let component: HodListClassesComponent;
  let fixture: ComponentFixture<HodListClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodListClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodListClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
