import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoComponent } from '../todo/todo.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todo:Todo [] = []


  constructor(private postSrv: TodosService) { }

  ngOnInit(): void {
   this.todo = this.postSrv.getCompletaTodo()
  }


}
