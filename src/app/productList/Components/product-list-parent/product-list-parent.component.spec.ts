import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListParentComponent } from './product-list-parent.component';

describe('ProductListParentComponent', () => {
  let component: ProductListParentComponent;
  let fixture: ComponentFixture<ProductListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
