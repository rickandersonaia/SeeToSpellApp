import {TestBed, inject} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('AuthService', () => {

  let mockHttpClient: any;

  beforeEach(() => {

    mockHttpClient = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    TestBed.configureTestingModule({
      providers: [AuthService,
        {provide: HttpClient, useValue: mockHttpClient}]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
