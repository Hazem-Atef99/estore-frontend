import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriParentComponent } from './categori-parent.component';

describe('CategoriParentComponent', () => {
  let component: CategoriParentComponent;
  let fixture: ComponentFixture<CategoriParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
