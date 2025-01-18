import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioDetalleComponent } from './cuestionario-detalle.component';

describe('CuestionarioDetalleComponent', () => {
  let component: CuestionarioDetalleComponent;
  let fixture: ComponentFixture<CuestionarioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuestionarioDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
