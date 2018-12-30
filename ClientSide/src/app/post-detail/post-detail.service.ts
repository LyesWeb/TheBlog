import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {
  private readonly BASE_URL = 'http://localhost:5000/posts/';

  constructor(private http: HttpClient) { }

  getPost(): any{
    var pathArray = window.location.pathname.split('/');
    var c =  this.http.get(this.BASE_URL+pathArray[2]);
    return c;
  }

}
