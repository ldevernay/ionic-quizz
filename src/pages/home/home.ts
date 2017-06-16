import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  questions: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://opentdb.com/api.php?amount=10&type=multiple').map(res => res.json()).subscribe(data => {
      this.questions = data.results;
    },
    err => {
            console.log("Oops!");
        }
  );
  }

}
