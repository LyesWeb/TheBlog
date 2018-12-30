import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly BASE_URL = 'http://localhost:5000/posts';

  constructor(private http: HttpClient) { }

  addPost(post){
    return this.http.post(this.BASE_URL, post, {observe:'response'});
  }

  getPosts(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  removePost(id: number){
    return this.http.delete(this.BASE_URL + "/" +id);
  }

}