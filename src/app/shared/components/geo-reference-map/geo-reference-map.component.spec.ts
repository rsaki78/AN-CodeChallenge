import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoReferenceMapComponent } from './geo-reference-map.component';

describe('GeoReferenceMapComponent', () => {
  let component: GeoReferenceMapComponent;
  let fixture: ComponentFixture<GeoReferenceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoReferenceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoReferenceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
