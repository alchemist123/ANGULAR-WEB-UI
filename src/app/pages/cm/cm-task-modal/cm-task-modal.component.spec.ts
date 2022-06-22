import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmTaskModalComponent } from './cm-task-modal.component';

describe('CmTaskModalComponent', () => {
  let component: CmTaskModalComponent;
  let fixture: ComponentFixture<CmTaskModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmTaskModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
