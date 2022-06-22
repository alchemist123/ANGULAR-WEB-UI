import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardChooserComponent } from './board-chooser.component';

describe('BoardChooserComponent', () => {
  let component: BoardChooserComponent;
  let fixture: ComponentFixture<BoardChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
