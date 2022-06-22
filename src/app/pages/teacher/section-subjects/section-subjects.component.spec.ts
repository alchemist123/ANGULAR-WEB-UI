import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubjectsComponent } from './section-subjects.component';

describe('SectionSubjectsComponent', () => {
  let component: SectionSubjectsComponent;
  let fixture: ComponentFixture<SectionSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
