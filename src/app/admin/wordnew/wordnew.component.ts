import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WordDataModel, cardSetOptions} from '../../shared/worddatamodel';

import {WordService} from '../../services/word.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-newword',
  templateUrl: './wordnew.component.html',
  styleUrls: ['./wordnew.component.scss']
})
export class WordnewComponent implements OnInit {

  newWordForm: FormGroup;
  word: WordDataModel;
  cardSet = cardSetOptions;

  constructor(private fb: FormBuilder,
              private wordService: WordService,
              private location: Location,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) {
  }

  ngOnInit() {

    this.createForm();
  }

  createForm() {
    this.newWordForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      sentence: ['', Validators.required],
      audio: ['', Validators.required],
      cardset: [null, Validators.required],
      isfree: [false, Validators.required],
    });
  }

  onSubmit() {
    this.wordService.addWord(this.newWordForm.value)
      .subscribe(word => {
        console.log(word);
        this.word = word;
      });
    this.newWordForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
