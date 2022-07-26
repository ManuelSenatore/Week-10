import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  users:any[] = []

  isVerde = false

  isBold = false




  constructor() { }

  ngOnInit(): void {
    fetch(" http://localhost:3000/posts").then(res => res.json()).then((res) => {
    this.users = res
    console.log(res)
})
}
}
