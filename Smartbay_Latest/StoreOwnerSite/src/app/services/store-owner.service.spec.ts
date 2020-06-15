import { TestBed } from '@angular/core/testing';

import { StoreOwnerService } from './store-owner.service';

describe('StoreOwnerService', () => {
  let service: StoreOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
