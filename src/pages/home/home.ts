import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// decorator provides a bit of additional data about the component
@Component({
  // names the element injected into the DOM
  selector: 'page-home',
  // links to the template file
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
