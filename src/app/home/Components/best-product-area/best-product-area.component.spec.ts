import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductAreaComponent } from './best-product-area.component';

describe('BestProductAreaComponent', () => {
  let component: BestProductAreaComponent;
  let fixture: ComponentFixture<BestProductAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestProductAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
