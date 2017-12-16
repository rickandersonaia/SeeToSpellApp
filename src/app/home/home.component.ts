import {Component, OnInit} from '@angular/core';

import {WordDataModel} from '../shared/worddatamodel';
import {WordService} from '../services/word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  freewords: WordDataModel[];

  constructor(private wordservice: WordService) {
  }

  ngOnInit() {
    this.wordservice.getFreeWords()
      .subscribe(freewords => this.freewords = freewords);
  }

}
