import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todo:Todo [] = []; // this.todo sono i todo non completati

  todoComplete:Todo[] = []; // tutti i todo completati

  constructor() {

  }

  reset(t:Todo){
    this.todo.push(t);
    console.log(this.todo);
  }

  getTodo(){
    return this.todo;
  }

  completaTodo(Object:Todo){
    this.todo = this.todo.filter(t => t.id != Object.id);
    this.todoComplete.push(Object)
    console.log(this.todoComplete)
  }

  getCompletaTodo(){
    return this.todoComplete
  }

}
