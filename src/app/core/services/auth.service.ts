import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {CurrentUserService} from './current-user.service';

import {baseURL} from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

interface AuthResponse {
  token: string;
  user: object;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

@Injectable()
export class AuthService {

  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  currentUser: Subject<object> = new Subject<object>();
  authToken: string = undefined;

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService,
              private currentUserService: CurrentUserService) {
  }

  checkJWTtoken() {
    this.http.get<JWTResponse>(baseURL + 'checkJWTtoken')
      .subscribe(res => {
          this.sendUsername(res.user.username);
        },
        err => {
          this.destroyUserCredentials();
        });
  }

  sendUsername(name: string) {
    this.username.next(name);
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

  clearUsername() {
    this.username.next(undefined);
  }


  loadUserCredentials() {
    const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
    if (credentials && credentials.username !== undefined) {
      this.useCredentials(credentials);
      if (this.authToken) {
        this.checkJWTtoken();
      }
    }
  }

  storeUserCredentials(credentials: any) {
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    this.useCredentials(credentials);
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);
    this.authToken = credentials.token;
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.clearUsername();
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }

  signUp() {

  }

  logIn(loginform: any): Observable<any> {
    return this.http.post<AuthResponse>(baseURL + 'login',
      {'username': loginform.username, 'password': loginform.password})
      .map(res => {
        this.storeUserCredentials({username: loginform.username, token: res.token});
        this.currentUserService.setCurrentUser(res.user);
        return {'success': true, 'currentUser': res.user};
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

  logOut() {
    this.destroyUserCredentials();
    this.currentUserService.clearCurrentUser();
  }

  isLoggedIn(): Boolean {
    return this.isAuthenticated;
  }

  getToken(): string {
    return this.authToken;
  }
}
