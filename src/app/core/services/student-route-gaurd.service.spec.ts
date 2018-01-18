import { TestBed, inject } from '@angular/core/testing';

import { StudentRouteGaurdService } from './student-route-gaurd.service';

describe('StudentRouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentRouteGaurdService]
    });
  });

  it('should be created', inject([StudentRouteGaurdService], (service: StudentRouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
