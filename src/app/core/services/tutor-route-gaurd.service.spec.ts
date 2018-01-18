import { TestBed, inject } from '@angular/core/testing';

import { TutorRouteGaurdService } from './tutor-route-gaurd.service';

describe('TutorRouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorRouteGaurdService]
    });
  });

  it('should be created', inject([TutorRouteGaurdService], (service: TutorRouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
