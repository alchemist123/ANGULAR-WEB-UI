import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeogibraEquationEditorComponent } from './geogibra-equation-editor.component';

describe('GeogibraEquationEditorComponent', () => {
  let component: GeogibraEquationEditorComponent;
  let fixture: ComponentFixture<GeogibraEquationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeogibraEquationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeogibraEquationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
