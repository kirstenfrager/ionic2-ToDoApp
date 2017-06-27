import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

// storage variable
  todos: any = [];

  constructor(public http: Http, public storage: Storage) {

  }

// handles retrieving data from storage
  load() {
// asycronis operation loading the data - doesn't happen straight away
// promise allows us to do something, and when result happens at some point, we can listen for that and then handle. rather than blocking whole app while data loads in
// when then call resolve, it then finishes the Promise
    return new Promise(resolve => {
    // check if we already loaded in the data
      if(this.todos.length > 0) {
        resolve(this.todos);
      } else {
      // haven't loaded in the data yet and we should do that
        this.storage.get('todoData').then((todos) => {
        // check if todos were sent back and are defined, then we want to set them
          if(todos && typeof(todos) != "undefined") {
            this.todos = todos;
          }
        // once that is done we want to resolve the promise and pass back the todos that were loaded
          resolve(this.todos);
        });
      }
    });
  }

// updates data in provider and saves to storage
// if the todo doesn't already exist we want to add it to the todos array but if it already exists we want to be able to edit it
  save(todo) {
  // get index of that todo, returns index of that todo in the array if it exists
    let index = this.todos.indexOf(todo);

  // if index is -1 then it did not find that index in the array so it then pushes it into the array
    if(index == -1) {
      this.todos.push(todo);
    } else {
  // if we did find one, we want to set that todo at that index to what ever the new todo was passed in is (overrides the existing one rather than adding new todo)
      this.todos[index] = todo;
    }
  // once done we want to save it all back to storage
    this.storage.set('todoData', this.todos)
  }

}
