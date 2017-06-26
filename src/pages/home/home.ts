import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo';

// decorator provides a bit of additional data about the component
@Component({
  // selector: names the element injected into the DOM
  // templateUrl: links to the template file
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// this variable can have any type of data in it
  todos: any;

// constructor function that runs immediately
// dependency injection - member variabe navCtrl with type NavController - throughout class can now access this.navCtrl
// if public key word is not there it means that navCtrl cannot be accessed anywhere throughout this class
  constructor(public navCtrl: NavController) {
  // because defined above the constructor, sets it up as a member variable which means it is accessible anywhere inside the class with this.
    this.todos = [
      {title: 'Todo 1', description: 'abc'},
      {title: 'Todo 2', description: 'abc'},
      {title: 'Todo 3', description: 'abc'},
      {title: 'Todo 4', description: 'abc'},
      {title: 'Todo 5', description: 'abc'}
    ];

  }

  ionViewDidLoad() {

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
