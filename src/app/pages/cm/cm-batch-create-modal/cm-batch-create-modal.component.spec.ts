import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmBatchCreateModalComponent } from './cm-batch-create-modal.component';

describe('CmBatchCreateModalComponent', () => {
  let component: CmBatchCreateModalComponent;
  let fixture: ComponentFixture<CmBatchCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmBatchCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmBatchCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
