import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioCardComponent } from './cuestionario-card.component';

describe('CuestionarioCardComponent', () => {
  let component: CuestionarioCardComponent;
  let fixture: ComponentFixture<CuestionarioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuestionarioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionarioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
