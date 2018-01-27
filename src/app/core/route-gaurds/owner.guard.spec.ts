import { TestBed, async, inject } from '@angular/core/testing';

import { OwnerGuard } from './owner.guard';
import {Observable} from 'rxjs/Observable';
import {CurrentUserService} from '../services/current-user.service';
import {UserService} from '../services/user.service';

describe('OwnerGuard', () => {

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
      providers: [OwnerGuard,
        {provide: UserService, useValue: mockUserService},
        {provide: CurrentUserService, useValue: mockCurrentUserService}
      ]
    });
  });

  it('should ...', inject([OwnerGuard], (guard: OwnerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
