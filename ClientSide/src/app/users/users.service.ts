import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly BASE_URL = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  getUserById(id:number) {
    return this.http.get(this.BASE_URL + "/"+id);
  }


}