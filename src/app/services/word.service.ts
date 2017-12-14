import { Injectable } from '@angular/core';
import { Word } from '../shared/word';
import { WORDS } from '../shared/wordlist';

@Injectable()
export class WordService {

  constructor() { }

  getWords(): Word[] {
    return WORDS;
  }

}
