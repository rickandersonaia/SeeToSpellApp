import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WordDataModel, cardSetOptions} from '../shared/worddatamodel';

import {WordService} from '../services/word.service';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-wordedit',
  templateUrl: './wordedit.component.html',
  styleUrls: ['./wordedit.component.scss']
})
export class WordeditComponent implements OnInit {

  wordForm: FormGroup;
  word: WordDataModel;
  cardSet = cardSetOptions;
  public exname: string;
  public eximage: string;
  public exsentence: string;
  public exaudio: string;
  public exisfree: boolean;
  public excardset: number;

  constructor(private fb: FormBuilder,
              private wordService: WordService,
              private location: Location,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) {
    this.createForm();
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.getFormData(id);
  }

  getFormData(id) {
    this.wordService.getWordById(id)
      .subscribe(word => {
        this.exname = word.name ? word.name : null;
        this.eximage = word.image ? word.image : null;
        this.exsentence = word.sentence ? word.sentence : null;
        this.exaudio = word.audio ? word.audio : null;
        this.exisfree = word.isfree ? word.isfree : null;
        this.excardset = word.cardset ? word.cardset : null;
        this.word = word;
        this.createForm();
      });
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.wordForm = this.fb.group({
      name: this.exname,
      image: this.eximage,
      sentence: this.exsentence,
      audio: this.exaudio,
      cardset: this.excardset,
      isfree: this.exisfree
    });
  }

  onSubmit() {
    this.wordService.editWord(this.word._id, this.wordForm.value)
      .subscribe(word => {
        console.log(word);
        this.getFormData(this.word._id);
      });
  }

}
