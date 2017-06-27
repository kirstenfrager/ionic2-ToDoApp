import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {

  todo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {

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

// before we pop the page off we call the dataService and save the data with the single todo that we are editing
  save() {
    this.dataService.save(this.todo);
    this.navCtrl.pop()
  }

}
