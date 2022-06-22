import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCountsComponent } from './group-counts.component';

describe('GroupCountsComponent', () => {
  let component: GroupCountsComponent;
  let fixture: ComponentFixture<GroupCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
