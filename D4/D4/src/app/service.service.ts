import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private posts: Post[] = []

  url =  "http://localhost:3000/posts"

  constructor() { }

  getPostsFromServer() {
    return fetch(this.url).then(res => res.json()).then((res: Post[]) => {
      this.posts = res
    })
  }

  getPosts(a: boolean) {
    return this.posts.filter((e) => e.active == a)
  }

  getPostById(id:number) {
    return this.posts.filter((e)=>e.id==id)[0]
  }
}
