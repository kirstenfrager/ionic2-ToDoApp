import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo';
import { Data } from '../../providers/data';

// decorator provides a bit of additional data about the component
@Component({
  // selector: names the element injected into the DOM
  // templateUrl: links to the template file
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// constructor function that runs immediately
// dependency injection - member variabe navCtrl with type NavController - throughout class can now access this.navCtrl
// if public key word is not there it means that navCtrl cannot be accessed anywhere throughout this class
  constructor(public navCtrl: NavController, public dataService: Data) {

  }

// as soon as page did load we want to call the dataService and handles loading in the data
  ionViewDidLoad() {
    this.dataService.load();
  }

// pushes the page onto the stack which can then be popped off of the stack
  addTodo() {
    this.navCtrl.push(EditTodoPage);
  }

// todo details gets pushed to the edit page which gets displayed in the edit-todo.html ngModule
  editTodo(todo) {
    this.navCtrl.push(EditTodoPage, {
      todo: todo
    });
  }

}
