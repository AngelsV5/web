import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioDetalleDiseComponent } from './cuestionario-detalle-dise.component';

describe('CuestionarioDetalleDiseComponent', () => {
  let component: CuestionarioDetalleDiseComponent;
  let fixture: ComponentFixture<CuestionarioDetalleDiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuestionarioDetalleDiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionarioDetalleDiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
