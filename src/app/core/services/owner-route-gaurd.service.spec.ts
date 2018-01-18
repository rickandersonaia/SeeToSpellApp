import { TestBed, inject } from '@angular/core/testing';

import { OwnerRouteGaurdService } from './owner-route-gaurd.service';

describe('OwnerRouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerRouteGaurdService]
    });
  });

  it('should be created', inject([OwnerRouteGaurdService], (service: OwnerRouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
