import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPromotionClassSelectionModalComponent } from './student-promotion-class-selection-modal.component';

describe('StudentPromotionClassSelectionModalComponent', () => {
  let component: StudentPromotionClassSelectionModalComponent;
  let fixture: ComponentFixture<StudentPromotionClassSelectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPromotionClassSelectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPromotionClassSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
