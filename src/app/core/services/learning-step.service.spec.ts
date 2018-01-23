import { TestBed, inject } from '@angular/core/testing';

import { LearningStepService } from './learning-step.service';

describe('LearningStepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningStepService]
    });
  });

  it('should be created', inject([LearningStepService], (service: LearningStepService) => {
    expect(service).toBeTruthy();
  }));
});
