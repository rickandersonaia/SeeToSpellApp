import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MaincontentComponent} from './shared-views/mainlayout/maincontent/maincontent.component';
import {
  MatCardModule, MatDialogModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatSnackBarModule, MatSpinner,
  MatToolbarModule
} from '@angular/material';
import {SidenavComponent} from './shared-views/mainlayout/sidenav/sidenav.component';
import {AdminSidenavComponent} from './admin/admin-sidenav/admin-sidenav.component';
import {EntranceComponent} from './shared-views/entrance/entrance.component';
import {Router, RouterModule} from '@angular/router';
import {UserService} from './core/services/user.service';
import {Observable} from 'rxjs/Observable';
import {UsercardComponent} from './shared-views/content-components/usercard/usercard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './core/services/auth.service';
import {MessageService} from './core/services/message.service';
import {CurrentUserService} from './core/services/current-user.service';
import {audioURL, avatarURL, baseURL, imageURL} from './core/shared/baseurl';


describe('AppComponent', () => {

  let mockUserService: any;
  let mockAuthService: any;
  let mockMessageService: any;
  let mockCurrentUserService: any;
  let mockRouter: any;

  beforeEach(async(() => {

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

    mockAuthService = {
      authenticated: true
    };

    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    mockMessageService = {
      getMessage: jasmine.createSpy('getMessage').and.returnValue(Observable.of({})),
      sendMessage: jasmine.createSpy('sendMessage').and.returnValue(Observable.of({})),
      clearMessage: jasmine.createSpy('clearMessage').and.returnValue(Observable.of({})),
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MaincontentComponent, SidenavComponent, AdminSidenavComponent, EntranceComponent,
        UsercardComponent
      ],
      imports: [MatIconModule, MatToolbarModule, MatSidenavModule, RouterModule, MatListModule,
      MatCardModule, MatProgressSpinnerModule, BrowserAnimationsModule, MatSnackBarModule, MatDialogModule],
      providers: [
        {provide: UserService, useValue: mockUserService},
        {provide: AuthService, useValue: mockAuthService},
        {provide: MessageService, useValue: mockMessageService},
        {provide: CurrentUserService, useValue: mockCurrentUserService},
        {provide: Router, useValue: mockRouter},
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        {provide: 'AudioURL', useValue: audioURL},
        {provide: 'AvatarURL', useValue: avatarURL}
    ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
