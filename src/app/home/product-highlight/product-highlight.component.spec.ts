import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightComponent } from './product-highlight.component';

describe('ProductHighlightComponent', () => {
  let component: ProductHighlightComponent;
  let fixture: ComponentFixture<ProductHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHighlightComponent]
    });
    fixture = TestBed.createComponent(ProductHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
