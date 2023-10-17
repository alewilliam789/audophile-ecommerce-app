import { TestBed } from '@angular/core/testing';

import { ProductHighlightsService } from './product-highlights.service';

describe('ProductHighlightsService', () => {
  let service: ProductHighlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHighlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
