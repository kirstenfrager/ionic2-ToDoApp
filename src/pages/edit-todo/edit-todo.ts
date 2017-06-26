import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {

  todo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.todo = {
      title: '',
      desription: ''
    };

  }

  ionViewDidLoad() {
  // grab todo from navParams
    let todo = this.navParams.get('todo');

  // check if exists otherwise errors occur
  // check the type of todo does not = undefined. if not undefined set todo member variable to whatever todo was passed in
    if(typeof(todo) != "undefined") {
      this.todo= todo;
    }

  }

  save() {
    this.navCtrl.pop()
  }

}
