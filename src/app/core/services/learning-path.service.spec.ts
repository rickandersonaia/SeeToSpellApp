import { TestBed, inject } from '@angular/core/testing';

import { LearningPathService } from './learning-path.service';

describe('LearningPathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningPathService]
    });
  });

  it('should be created', inject([LearningPathService], (service: LearningPathService) => {
    expect(service).toBeTruthy();
  }));
});
