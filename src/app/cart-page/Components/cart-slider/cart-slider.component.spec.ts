import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSliderComponent } from './cart-slider.component';

describe('CartSliderComponent', () => {
  let component: CartSliderComponent;
  let fixture: ComponentFixture<CartSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
