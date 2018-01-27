import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatFormFieldModule, MatRadioModule, MatOptionModule,
  MatSlideToggleModule, MatSelectModule, MatInputModule,
  MatCardModule, MatProgressSpinnerModule, MatListModule,
} from '@angular/material';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

import { UsersComponent } from './users.component';
import {UserService} from '../../core/services/user.service';
import {Observable} from 'rxjs/Observable';
import {audioURL, avatarURL, baseURL, imageURL} from '../../core/shared/baseurl';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUserService: any;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async(() => {

    mockUserService = {
      getUserById: jasmine.createSpy('getUserById').and.returnValue(Observable.of({})),
      editUser: jasmine.createSpy('editUser').and.returnValue(Observable.of({})),
      deleteUser: jasmine.createSpy('deleteUser').and.returnValue(Observable.of({})),
      getUsers: jasmine.createSpy('getUsers').and.returnValue(Observable.of({})),
    };

    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    mockActivatedRoute = {
      snapshot: {
        url: {path: '/users'}
      }
    };


    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatListModule, RouterModule],
      declarations: [ UsersComponent ],
      providers: [
        {provide: UserService, useValue: mockUserService},
        {provide: Router, useValue: mockRouter},
        // {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        {provide: 'AudioURL', useValue: audioURL},
        {provide: 'AvatarURL', useValue: avatarURL}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
