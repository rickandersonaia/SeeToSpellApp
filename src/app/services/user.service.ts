import {Injectable} from '@angular/core';
import {UserDataModel} from '../shared/userdatamodel';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { baseURL } from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
  }

  getUsers(): Observable<UserDataModel[]> {
    return this.http.get(baseURL + 'users')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getUserById(id: string): Observable<UserDataModel> {
    return this.http.get(baseURL + 'users/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  addUser(formContent: any): Observable<UserDataModel>  {
    return this.http.post(baseURL + 'users/new' , formContent)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

  }

  editUser(id: string, formContent: any): Observable<UserDataModel>  {
    return this.http.put(baseURL + 'users/edit/' + id , formContent)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

  }
}
