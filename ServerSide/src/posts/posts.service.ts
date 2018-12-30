import { Injectable } from '@nestjs/common';
import * as faker from 'faker/locale/fr';
import { UsersService } from '../users/users.service';
import { PostsDTO } from 'src/dto/posts.dto';

@Injectable()
export class PostsService {
  private posts: any[];
  constructor(private usersService: UsersService) {
    this.posts = new Array(200)
      .fill(1)
      .map(e => {
        var user = this.getRUser();
        return {
          title: faker.lorem.sentence(),
          body: faker.lorem.paragraphs(3),
          postedAt: faker.date.past(),
          userId: user.id,
          user: user
        };
      }).sort((e1, e2) => {
        if (e1.postedAt > e2.postedAt) {
          return 1;
        } else if (e1.postedAt === e2.postedAt) {
          return 0;
        } else { return -1}
    }).map((e,i) => {
      e['postId'] = i + 1;
      return e;
      });
  }

  getAll() {
    return this.posts;
  }
  getPostById(postId: number) {
    return this.posts.find(e => e.postId === Number(postId));
  }
  private getRUser() {
     const users = this.usersService.getAll();
     const index = Math.floor(Math.random() * users.length);
     return users[index];
  }

//////////

// get only posts of a user
getPostsByUserId(userId: number){
  return this.posts.filter( post => post.userId == userId);
}

    /* Ajouter un post */
    addpost(p: PostsDTO){

      let post = {
        title: p.title,
        body: p.body,
        postedAt: p.postedAt,
        userId: p.userId,
        user: this.usersService.getUserById(p.userId),
        postId : this.generateId()
      }

      this.posts.push(post);

      return post;
  }


  removepost(id: number){
      this.posts = this.posts.filter(post => post.id != id);
      return this.posts;
  }


  updatepost(p: PostsDTO){
      let post = this.posts.find(post => post.id == p.postId);
      post.body = p.body;
      post.date = p.postedAt;
      post.userId = p.userId;
  }

generateId(){
  return Math.max(...this.posts.map(e => e.postId)) + 1;
}

//////////


}
