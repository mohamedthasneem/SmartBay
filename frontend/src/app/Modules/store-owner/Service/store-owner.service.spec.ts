import { TestBed } from '@angular/core/testing';

import { StoreOwnerService } from './store-owner.service';

describe('StoreOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreOwnerService = TestBed.get(StoreOwnerService);
    expect(service).toBeTruthy();
  });
});
