import { TestBed } from '@angular/core/testing';

import { FOneDriversServiceService } from './f-one-drivers-service.service';

describe('FOneDriversServiceService', () => {
  let service: FOneDriversServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FOneDriversServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
