import { TestBed, inject } from '@angular/core/testing';

import { UsermappingService } from './usermapping.service';

describe('UsermappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermappingService]
    });
  });

  it('should be created', inject([UsermappingService], (service: UsermappingService) => {
    expect(service).toBeTruthy();
  }));
});
