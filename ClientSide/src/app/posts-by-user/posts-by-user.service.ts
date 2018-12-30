import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PostsByUserService {
  private readonly BASE_URL = 'http://localhost:5000/posts/user/';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    var pathArray = window.location.pathname.split('/');
    return this.http.get(this.BASE_URL+pathArray[3]);
  }

}
