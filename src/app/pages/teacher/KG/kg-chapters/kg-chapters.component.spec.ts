import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgChaptersComponent } from './kg-chapters.component';

describe('KgChaptersComponent', () => {
  let component: KgChaptersComponent;
  let fixture: ComponentFixture<KgChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
