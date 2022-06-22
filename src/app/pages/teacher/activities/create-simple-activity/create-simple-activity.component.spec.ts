import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSimpleActivityComponent } from './create-simple-activity.component';

describe('CreateSimpleActivityComponent', () => {
  let component: CreateSimpleActivityComponent;
  let fixture: ComponentFixture<CreateSimpleActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSimpleActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSimpleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
