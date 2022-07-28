import { Injectable } from '@angular/core';
import { Interface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Interface[] = [];

  fetchPosts(){
    fetch("http://localhost:3000/posts").then(res => res.json()).then((res) => {
      this.arrPosts = res
    })
  }

  getPostsActive(active: boolean): Interface[]{
    return this.arrPosts.filter((e)=>{
      return e.active == true
    })
  }
  getPostsInactive(active: boolean): Interface[]{
    return this.arrPosts.filter((e)=>{
      return e.active == false
    })
  }


  deletePost(id:number){
    return fetch("http://localhost:3000/posts"+ e.id,
     {method: "DELETE"}).then(()=>{
    this.arrPosts.slice(i, 1)
    })
}


  constructor() {
    this.fetchPosts()
  }

}
