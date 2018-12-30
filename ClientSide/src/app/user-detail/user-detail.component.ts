import { Component, OnInit } from '@angular/core';
import { UserDetailService } from "./user-detail.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(private userDetailService: UserDetailService) { }

  ngOnInit() {
    this.getUser();
  }
  private getUser() {
    this.userDetailService.getUser()
    .subscribe(user => this.user = user);
  }

}
