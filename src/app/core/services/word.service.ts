import {Injectable} from '@angular/core';
import {WordDataModel} from '../shared/worddatamodel';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {baseURL} from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable()
export class WordService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
  }

  // ***** Admin endpoints *****

  getWords(): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'admin/words')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getWord(name: string): Observable<WordDataModel> {
    return this.http.get(baseURL + 'admin/words/' + name)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getWordById(id: string): Observable<WordDataModel> {
    return this.http.get(baseURL + 'admin/words/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  addWord(formContent: any): Observable<WordDataModel> {
    return this.http.post(baseURL + 'admin/words/new', formContent)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

  editWord(id: string, formContent: any): Observable<WordDataModel> {
    return this.http.put(baseURL + 'admin/words/edit/' + id, formContent)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

  deleteWord(id: string): Observable<WordDataModel> {
    return this.http.delete(baseURL + 'admin/words/edit/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

  // ***** Tutor endpoints *****

  tutorGetWords(): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'tutor/words')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  tutorGetWordById(id: string): Observable<WordDataModel> {
    return this.http.get(baseURL + 'tutor/words/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getFreeWords(): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'tutor/words?isfree=true')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getWordsInSet(cardset: number): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'tutor/words?cardset=' + cardset)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getPurchasedWords(id: string): Observable<WordDataModel[]> {
    return this.http.get(baseURL + 'tutor/' + id + '/words')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getPurchasedWordsIds(id: string): Observable<String[]> {
    return this.http.get(baseURL + 'tutor/' + id + '/word-ids')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }
}
