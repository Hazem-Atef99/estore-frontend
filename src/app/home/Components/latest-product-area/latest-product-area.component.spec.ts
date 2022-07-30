import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProductAreaComponent } from './latest-product-area.component';

describe('LatestProductAreaComponent', () => {
  let component: LatestProductAreaComponent;
  let fixture: ComponentFixture<LatestProductAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestProductAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
