import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmntPreviewComponent } from './assesmnt-preview.component';

describe('AssesmntPreviewComponent', () => {
  let component: AssesmntPreviewComponent;
  let fixture: ComponentFixture<AssesmntPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesmntPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmntPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
