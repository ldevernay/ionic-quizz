import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  answers;
  questionForm;
  questions;
  score;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('https://opentdb.com/api.php?amount=1&category=18&type=boolean').map(res => res.json()).subscribe(data => {
      this.questions = data.results;
    },
    err => {
      console.log("Oops!");
    }
  );
  this.questionForm = new FormGroup({
    "answers": new FormControl({value: 'nope', disabled: false})
  });
  this.score = 0;
}

doSubmit(event) {
  console.log('Submitting form', this.questionForm.value.answers);
  console.log('Answer : ', this.questions[0].correct_answer)
  if (this.questionForm.value.answers == this.questions[0].correct_answer){
    this.http.get('https://opentdb.com/api.php?amount=1&category=18&type=boolean').map(res => res.json()).subscribe(data => {
      this.questions = data.results;
    },
    err => {
      console.log("Oops!");
    }
  );
  this.score++;
  } else {
    this.score = 0;
  }
  event.preventDefault();
}

}
