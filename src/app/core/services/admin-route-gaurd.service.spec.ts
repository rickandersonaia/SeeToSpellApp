import { TestBed, inject } from '@angular/core/testing';

import { AdminRouteGaurdService } from './admin-route-gaurd.service';

describe('AdminRouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRouteGaurdService]
    });
  });

  it('should be created', inject([AdminRouteGaurdService], (service: AdminRouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
