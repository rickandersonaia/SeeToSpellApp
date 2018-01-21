import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatFormFieldModule, MatRadioModule, MatOptionModule,
  MatSlideToggleModule, MatSelectModule, MatInputModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AdminUserEditComponent} from './admin-useredit.component';
import {UsercardComponent} from '../../shared-views/content-components/usercard/usercard.component';
import {UserService} from '../../core/services/user.service';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {audioURL, avatarURL, baseURL, imageURL} from '../../core/shared/baseurl';

describe('AdminUserEditComponent', () => {
  let component: AdminUserEditComponent;
  let fixture: ComponentFixture<AdminUserEditComponent>;
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
      declarations: [AdminUserEditComponent, UsercardComponent],
      imports: [FormsModule, ReactiveFormsModule, MatRadioModule,
        MatFormFieldModule, MatOptionModule, MatSlideToggleModule, MatInputModule,
        MatSelectModule, BrowserAnimationsModule],
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
      .overrideComponent(UsercardComponent, {
        set: {
          selector: 'app-usercard',
          template: `<h6>app-usercard component mock</h6>`
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
