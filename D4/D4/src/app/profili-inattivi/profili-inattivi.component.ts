import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profili-inattivi',
  templateUrl: './profili-inattivi.component.html',
  styleUrls: ['./profili-inattivi.component.scss']
})
export class ProfiliInattiviComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv: ServiceService) { }

  ngOnInit(): void {
    this.postSrv.getPostsFromServer().then(()=>{
      this.posts=this.postSrv.getPosts(false)
    })
  }

}
