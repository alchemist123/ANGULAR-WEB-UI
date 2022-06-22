import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPromotionFilterComponent } from './student-promotion-filter.component';

describe('StudentPromotionFilterComponent', () => {
  let component: StudentPromotionFilterComponent;
  let fixture: ComponentFixture<StudentPromotionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPromotionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPromotionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
