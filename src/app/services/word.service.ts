import {Injectable} from '@angular/core';
import {WordDataModel} from '../shared/worddatamodel';
import {WORDS} from '../shared/wordlist';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class WordService {

  constructor() {
  }

  getWords(): Observable<WordDataModel[]> {
    return Observable.of(WORDS).delay(2000);
  }

  getWord(name: string): Observable<WordDataModel> {
    return Observable.of(WORDS.filter((word) => (word.name === name))[0]).delay(2000);
  }

  getFreeWords(): Observable<WordDataModel[]> {
    return Observable.of(WORDS.filter((word) => (word.isfree))).delay(2000);
  }

  getWordsInSet(cardset: number): Observable<WordDataModel[]> {
    return Observable.of(WORDS.filter((word) => (word.cardset === cardset))).delay(2000);
  }
}
