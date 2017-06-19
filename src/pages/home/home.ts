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

  langs;
    langForm;
    questions;

    constructor(public navCtrl: NavController, public http: Http) {
      this.http.get('https://opentdb.com/api.php?amount=1&category=18&type=boolean').map(res => res.json()).subscribe(data => {
            this.questions = data.results;
          },
          err => {
            console.log("Oops!");
          }
        );
      this.langForm = new FormGroup({
        "langs": new FormControl({value: 'rust', disabled: false})
      });
    }

    doSubmit(event) {
      console.log('Submitting form', this.langForm.value);
      event.preventDefault();
    }

//   questions: any;
//   answers: any;
//
//   constructor(public navCtrl: NavController, public http: Http) {
//
//     this.http.get('https://opentdb.com/api.php?amount=1&category=18&type=boolean').map(res => res.json()).subscribe(data => {
//       this.questions = data.results;
//     },
//     err => {
//       console.log("Oops!");
//     }
//   );
// }
//
// answer(){
//   console.log("test");
//   this.http.get('https://opentdb.com/api.php?amount=1&category=18&type=boolean').map(res => res.json()).subscribe(data => {
//     this.questions = data.results;
//   },
//   err => {
//     console.log("Oops!");
//   }
// );
// }

}
