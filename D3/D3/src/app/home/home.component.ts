import { Component, OnInit } from '@angular/core';
import { Interface } from '../interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public postSrv: PostService) { }

  ngOnInit(): void {



    }
  }


