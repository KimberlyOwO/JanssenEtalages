import { TestBed } from '@angular/core/testing';

import { EtalageDataService } from './etalage-data.service';

describe('EtalageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtalageDataService = TestBed.get(EtalageDataService);
    expect(service).toBeTruthy();
  });
});
