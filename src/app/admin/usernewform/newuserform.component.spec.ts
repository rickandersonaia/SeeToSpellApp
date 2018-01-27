import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatFormFieldModule, MatRadioModule, MatOptionModule,
  MatSlideToggleModule, MatSelectModule, MatInputModule,
  MatCardModule, MatProgressSpinnerModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDataModel, setsPurchasedOptions, allAvatars} from '../../core/shared/userdatamodel';
import { UserService} from '../../core/services/user.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router, RouterModule, RouterLink} from '@angular/router';

import { NewUserFormComponent } from './newuserform.component';
import {AdminUserEditComponent} from '../admin-useredit/admin-useredit.component';
import {audioURL, avatarURL, baseURL, imageURL} from '../../core/shared/baseurl';
import {UsercardComponent} from '../../shared-views/content-components/usercard/usercard.component';
import {Observable} from 'rxjs/Observable';

describe('NewUserFormComponent', () => {
  let component: NewUserFormComponent;
  let fixture: ComponentFixture<NewUserFormComponent>;
  let mockUserService: any;
  let mockLocation: any;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async(() => {
    mockUserService = {
      getUserById: jasmine.createSpy('getUserById').and.returnValue(Observable.of({})),
      editUser: jasmine.createSpy('editUser').and.returnValue(Observable.of({})),
      deleteUser: jasmine.createSpy('deleteUser').and.returnValue(Observable.of({})),
    };

    mockLocation = {
      back: jasmine.createSpy('back')
    };

    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    mockActivatedRoute = {
      snapshot: {
        params: { id: 'testid'}
      }
    };
    TestBed.configureTestingModule({
      declarations: [NewUserFormComponent, UsercardComponent],
      imports: [FormsModule, ReactiveFormsModule, MatRadioModule,
        MatFormFieldModule, MatOptionModule, MatSlideToggleModule, MatInputModule,
        MatSelectModule, BrowserAnimationsModule, MatCardModule, MatProgressSpinnerModule, RouterModule],
      providers: [
        {provide: UserService, useValue: mockUserService},
        {provide: Location, useValue: mockLocation},
        {provide: Router, useValue: mockRouter},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        {provide: 'AudioURL', useValue: audioURL},
        {provide: 'AvatarURL', useValue: avatarURL}
      ]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
