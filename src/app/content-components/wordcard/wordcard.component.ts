import {Component, Inject, Input} from '@angular/core';
import {WordDataModel} from '../../shared/worddatamodel';

@Component({
  selector: 'app-wordcard',
  templateUrl: './wordcard.component.html',
  styleUrls: ['./wordcard.component.scss']
})
export class WordcardComponent{

  @Input() word: WordDataModel;

  constructor(
    @Inject('BaseURL') private BaseURL,
    @Inject('ImageURL') private ImageURL,
    @Inject('AudioURL') private AudioURL) { }

}
