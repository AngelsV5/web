import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseCuestiComponent } from './dise-cuesti.component';

describe('DiseCuestiComponent', () => {
  let component: DiseCuestiComponent;
  let fixture: ComponentFixture<DiseCuestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseCuestiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseCuestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
