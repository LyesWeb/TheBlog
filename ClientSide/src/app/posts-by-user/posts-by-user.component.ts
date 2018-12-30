import { Component, OnInit } from '@angular/core';
import { PostsByUserService } from "./posts-by-user.service";

@Component({
  selector: 'app-posts-by-user',
  templateUrl: './posts-by-user.component.html',
  styleUrls: ['./posts-by-user.component.css']
})
export class PostsByUserComponent implements OnInit {

  posts: any[];
  constructor(private postsByUserService: PostsByUserService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.postsByUserService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

}
