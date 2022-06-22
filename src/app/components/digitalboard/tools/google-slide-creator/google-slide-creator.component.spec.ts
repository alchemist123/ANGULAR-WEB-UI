import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSlideCreatorComponent } from './google-slide-creator.component';

describe('GoogleSlideCreatorComponent', () => {
  let component: GoogleSlideCreatorComponent;
  let fixture: ComponentFixture<GoogleSlideCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSlideCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSlideCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
