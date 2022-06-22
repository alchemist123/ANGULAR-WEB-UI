import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChapaterListComponent } from './section-chapater-list.component';

describe('SectionChapaterListComponent', () => {
  let component: SectionChapaterListComponent;
  let fixture: ComponentFixture<SectionChapaterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionChapaterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionChapaterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
