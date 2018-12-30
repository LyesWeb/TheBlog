import { Component, OnInit } from '@angular/core';
import { PostDetailService } from "./post-detail.service";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  constructor(private postDetailService: PostDetailService) { }

  ngOnInit() {
    this.getPost();
  }
  private getPost() {
    this.postDetailService.getPost()
    .subscribe(post => this.post = post);
  }
}
