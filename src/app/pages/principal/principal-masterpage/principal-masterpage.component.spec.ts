import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMasterpageComponent } from './principal-masterpage.component';

describe('PrincipalMasterpageComponent', () => {
  let component: PrincipalMasterpageComponent;
  let fixture: ComponentFixture<PrincipalMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
