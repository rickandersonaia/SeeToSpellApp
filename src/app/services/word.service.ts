import {Injectable} from '@angular/core';
import {WordDataModel} from '../shared/worddatamodel';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { baseURL } from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable()
export class WordService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
  }

  getWords(): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'words')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getWord(name: string): Observable<WordDataModel> {
    return this.http.get(baseURL + 'words/' + name)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getWordById(id: string): Observable<WordDataModel> {
    return this.http.get(baseURL + 'words/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getFreeWords(): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'words?isfree=true')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getWordsInSet(cardset: number): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'words?cardset=' + cardset)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  editWord(id: string, comment: any): Observable<WordDataModel[]>  {
    return this.http.put(baseURL + 'words/edit/' + id , comment)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

  }
}
