import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profili-attivi',
  templateUrl: './profili-attivi.component.html',
  styleUrls: ['./profili-attivi.component.scss']
})
export class ProfiliAttiviComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv: ServiceService) { }

  ngOnInit(): void {
    this.postSrv.getPostsFromServer().then(()=>{
      this.posts=this.postSrv.getPosts(true)
    })
  }
}
