import { TestBed, inject } from '@angular/core/testing';

import { TutorAuthService } from './tutor-auth.service';

describe('TutorAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorAuthService]
    });
  });

  it('should be created', inject([TutorAuthService], (service: TutorAuthService) => {
    expect(service).toBeTruthy();
  }));
});
