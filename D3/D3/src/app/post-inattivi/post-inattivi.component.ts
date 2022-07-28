import { Component, OnInit } from '@angular/core';
import { Interface } from '../interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  arrInattivi:Interface [] = [];

  constructor(public postSrv: PostService) { }

  ngOnInit(): void {

    this.arrInattivi = this.postSrv.getPostsInactive(false);
    console.log(this.arrInattivi);

  }

}
