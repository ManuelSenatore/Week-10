import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.scss']
})
export class TodosCardComponent implements OnInit {

  @Input() todo!: Todo

  @Output() editEvent = new EventEmitter <Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  completedPost(Object: Todo) {
    this.editEvent.emit(Object);
}
}
