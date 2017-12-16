import {Component, OnInit} from '@angular/core';

import {WordDef} from '../shared/worddef';
import {WordService} from '../services/word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  freewords: WordDef[];

  constructor(private wordservice: WordService) {
  }

  ngOnInit() {
    this.freewords = this.wordservice.getFreeWords();
  }

}
