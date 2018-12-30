import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { PostsService } from '../posts/posts.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  title: string;
  body: string;
  userId: number;
  message: string;

  user: any;

  constructor(private route: ActivatedRoute, private postService: PostsService, private usersService: UsersService) { 
    //Recuperer l'ID de l'utilisateur depuis les parametres
    this.route.params.subscribe( param => {
      this.userId = +param.id;
    });
    this.usersService.getUsers().subscribe(user => this.user = user);
    // console.log(this.user);
    // console.log(this.usersService.getUserById(this.userId));
    
  }

  ngOnInit() {
  }

  //Ajouter un post 
  add(){

    let post = {
      id: null,
      title: this.title,
      body: this.body,
      postedAt: new Date(),
      userId: this.userId
    }
    this.postService.addPost(post).subscribe(data => {
      this.message = "Post Added";
    }, err => {
      this.message = "Post not Added";
    });
  }
}