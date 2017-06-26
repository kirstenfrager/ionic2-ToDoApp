import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {

  todo: any;

  constructor(public navCtrl: NavController) {

    this.todo = {
      title: '',
      desription: ''
    };

  }

  ionViewDidLoad() {

  }

  save() {
    console.log("TODO: finish save function");
  }

}
