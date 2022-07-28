import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Post } from '../post';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  p!:Post ;

  sub!:Subscription

  constructor(private router:ActivatedRoute, private  postSrv: ServiceService) { }

  ngOnInit(): void {

    this.sub = this.router.params.subscribe((pars) => {
      let id = +pars["id"];
      this.p = this.postSrv.getPostById(id);
    })
  }

}
