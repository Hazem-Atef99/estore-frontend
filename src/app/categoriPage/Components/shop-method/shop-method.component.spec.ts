import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMethodComponent } from './shop-method.component';

describe('ShopMethodComponent', () => {
  let component: ShopMethodComponent;
  let fixture: ComponentFixture<ShopMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
