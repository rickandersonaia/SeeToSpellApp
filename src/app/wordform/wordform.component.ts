import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WordDef, cardSetOptions} from '../shared/worddef';

@Component({
  selector: 'app-wordform',
  templateUrl: './wordform.component.html',
  styleUrls: ['./wordform.component.scss']
})
export class WordformComponent implements OnInit {

  wordForm: FormGroup;
  word: WordDef;
  cardSet = cardSetOptions;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.wordForm = this.fb.group({
      name: '',
      image: '',
      sentence: '',
      audio: '',
      cardset: '',
      isfree: false,
    });
  }

  onSubmit() {
    this.word = this.wordForm.value;
    console.log(this.word);
    this.wordForm.reset();
  }

}
