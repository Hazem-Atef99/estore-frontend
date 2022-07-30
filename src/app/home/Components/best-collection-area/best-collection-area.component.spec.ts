import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCollectionAreaComponent } from './best-collection-area.component';

describe('BestCollectionAreaComponent', () => {
  let component: BestCollectionAreaComponent;
  let fixture: ComponentFixture<BestCollectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestCollectionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCollectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
