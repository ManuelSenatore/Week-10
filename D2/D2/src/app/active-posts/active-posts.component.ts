import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
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
