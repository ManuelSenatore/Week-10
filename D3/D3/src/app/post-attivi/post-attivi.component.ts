import { Component, Input, OnInit } from '@angular/core';
import { Interface } from '../interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {


  arrAttivi:Interface [] = [];

  constructor(public postSrv: PostService) { }

  ngOnInit(): void {

    this.arrAttivi = this.postSrv.getPostsActive(true);
    }

    delete(){
      return this.postSrv.deletePost(i);
    }
  }

