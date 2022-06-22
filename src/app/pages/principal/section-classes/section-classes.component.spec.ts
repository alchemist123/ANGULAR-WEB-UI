import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClassesComponent } from './section-classes.component';

describe('SectionClassesComponent', () => {
  let component: SectionClassesComponent;
  let fixture: ComponentFixture<SectionClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
