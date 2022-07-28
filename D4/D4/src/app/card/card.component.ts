import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post!:Post

  @Output() eventEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getPostById(id:number){
    this.eventEmit.emit(id)
  }


}
