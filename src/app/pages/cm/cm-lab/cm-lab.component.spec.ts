import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmLabComponent } from './cm-lab.component';

describe('CmLabComponent', () => {
  let component: CmLabComponent;
  let fixture: ComponentFixture<CmLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
