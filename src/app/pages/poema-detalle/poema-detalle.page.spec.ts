import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoemaDetallePage } from './poema-detalle.page';

describe('PoemaDetallePage', () => {
  let component: PoemaDetallePage;
  let fixture: ComponentFixture<PoemaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
