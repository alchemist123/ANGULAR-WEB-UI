import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAddLevelModalComponent } from './cm-add-level-modal.component';

describe('CmAddLevelModalComponent', () => {
  let component: CmAddLevelModalComponent;
  let fixture: ComponentFixture<CmAddLevelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmAddLevelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAddLevelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
