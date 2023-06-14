import { TestBed } from '@angular/core/testing';

import { QuotationControllerService } from './quotation-controller.service';

describe('QuotationControllerService', () => {
  let service: QuotationControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotationControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
