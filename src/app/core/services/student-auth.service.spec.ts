import { TestBed, inject } from '@angular/core/testing';

import { StudentAuthService } from './student-auth.service';

describe('StudentAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentAuthService]
    });
  });

  it('should be created', inject([StudentAuthService], (service: StudentAuthService) => {
    expect(service).toBeTruthy();
  }));
});
