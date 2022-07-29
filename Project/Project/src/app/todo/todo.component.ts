import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private postSrv: TodosService) { }

  todo:Todo [] = []
  inputValue!: string;

  predefinito = "Nessun Todo Presente"

  ngOnInit(): void {
    this.todo = this.postSrv.getTodo()
  }

  reset():void{

    let newTodo:Todo = {
      id: this.todo.length +1,
      title: this.inputValue,
      completed: false,
    }

    this.predefinito = ""

    this.postSrv.reset(newTodo);

    // this.todo.push(newTodo);
    console.log(this.todo)
  }

  completedPost(Object:Todo) {

    this.todo = this.todo.filter(t => t.id != Object.id);

    Object.completed = true;

    this.postSrv.completaTodo(Object)
  }
}
