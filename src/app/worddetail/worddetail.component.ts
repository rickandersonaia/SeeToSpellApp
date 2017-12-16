import {Component, OnInit} from '@angular/core';

import {WordDataModel} from '../shared/worddatamodel';
import {WordService} from '../services/word.service';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-worddetail',
  templateUrl: './worddetail.component.html',
  styleUrls: ['./worddetail.component.scss']
})
export class WorddetailComponent implements OnInit {

  word: WordDataModel;

  constructor(private wordService: WordService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];

    this.wordService.getWord(name)
      .subscribe(word => this.word = word);
  }

  goBack(): void {
    this.location.back();
  }

}
