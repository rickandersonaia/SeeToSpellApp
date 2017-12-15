import {Injectable} from '@angular/core';
import {WordDef} from '../shared/word';
import {WORDS} from '../shared/wordlist';

@Injectable()
export class WordService {

  constructor() {
  }

  getWords(): WordDef[] {
    return WORDS;
  }

  getWord(name: string): WordDef {
    return WORDS.filter((word) => (word.name === name))[0];
  }

  getFreeWords(): WordDef[] {
    return WORDS.filter((word) => (word.isfree));
  }

  getWordsInSet(cardset: number): WordDef[] {
    return WORDS.filter((word) => (word.cardset === cardset));
  }
}
