import { Component, OnInit } from '@angular/core';
import { PostsService } from "./posts.service";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.postsService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  removePost(id: number){    
    this.postsService.removePost(id);
  }

}
