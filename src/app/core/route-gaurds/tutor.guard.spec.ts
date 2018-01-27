import { TestBed, async, inject } from '@angular/core/testing';

import { TutorGuard } from './tutor.guard';
import {CurrentUserService} from '../services/current-user.service';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';

describe('TutorGuard', () => {

  let mockUserService: any;
  let mockCurrentUserService: any;

  beforeEach(() => {

    mockUserService = {
      getUserById: jasmine.createSpy('getUserById').and.returnValue(Observable.of({})),
      editUser: jasmine.createSpy('editUser').and.returnValue(Observable.of({})),
      deleteUser: jasmine.createSpy('deleteUser').and.returnValue(Observable.of({})),
    };

    mockCurrentUserService = {
      currentUser: {
        _id: 'testId',
        username: 'testusername',
        displayName: 'Display Name',
        isAdmin: false,
        setsPurchased: [1, 2],
        isTutor: true,
      }
    };

    TestBed.configureTestingModule({
      providers: [TutorGuard,
        {provide: UserService, useValue: mockUserService},
        {provide: CurrentUserService, useValue: mockCurrentUserService}
      ]
    });
  });

  it('should ...', inject([TutorGuard], (guard: TutorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
