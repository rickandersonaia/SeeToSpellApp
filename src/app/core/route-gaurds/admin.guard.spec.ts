import { TestBed, async, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import {Observable} from 'rxjs/Observable';
import {MessageService} from '../services/message.service';
import {CurrentUserService} from '../services/current-user.service';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

describe('AdminGuard', () => {

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
      providers: [AdminGuard,
        {provide: UserService, useValue: mockUserService},
        {provide: CurrentUserService, useValue: mockCurrentUserService}
        ]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
