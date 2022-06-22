import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmBatchesComponent } from './cm-batches.component';

describe('CmBatchesComponent', () => {
  let component: CmBatchesComponent;
  let fixture: ComponentFixture<CmBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
