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

    this.wordService.getWordById(id)
      .subscribe(word => this.word = word);

    this.createForm();
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.wordForm = this.fb.group({
      name: '',
      image: '',
      sentence: '',
      audio: '',
      cardset: '',
      isfree: ''
    });
  }

  onSubmit() {
    console.log(this.wordForm.value);
    this.wordService.editWord(this.word._id, this.wordForm.value)
      .subscribe(word => this.word = word);
    console.log(this.word);
    this.wordForm.reset();
  }

}
