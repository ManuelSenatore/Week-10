import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  title = 'Title Slider';
  show = false

  nome = "Manuel"

  showDetails(): void{
   this.show = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
