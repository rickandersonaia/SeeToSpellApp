import {Injectable} from '@angular/core';
import {UserDataModel} from '../shared/userdatamodel';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {baseURL} from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {

  public name: string;

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService,
              private authService: AuthService) {
  }

  getUsers(): Observable<UserDataModel[]> {
    return this.http.get(baseURL + 'admin/users')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getUserById(id: string): Observable<UserDataModel> {
    return this.http.get(baseURL + 'admin/users/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getUserByUsername(username: string): Observable<UserDataModel> {
    return this.http.get(baseURL + 'admin/users/?username=' + username)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  addUser(formContent: any): Observable<UserDataModel> {
    return this.http.post(baseURL + 'admin/users/new', formContent)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  editUser(id: string, formContent: any): Observable<UserDataModel> {
    return this.http.put(baseURL + 'admin/users/edit/' + id, formContent)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

  registerUser(formContent: any): Observable<UserDataModel> {
    return this.http.post(baseURL + 'signup', formContent)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

  currentUser(): Observable<UserDataModel> {
    this.authService.getUsername()
      .subscribe(name => {
        this.name = name;
      });

    return this.http.get(baseURL + 'admin/users/?' + this.name)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

}
