import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put  } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsDTO } from 'src/dto/posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAll();
  }
  @Get(':postId') // http://localhost:4000/posts/56
  getPost(@Param('postId') postId): any {
    const post = this.postsService.getPostById(postId);
    if (!post) {
      throw new HttpException('Pas Found', HttpStatus.NOT_FOUND);
    }
    return post;
  }
///////

@Get("/user/:id")
findByUserId(@Param('id') userId:number){
    return this.postsService.getPostsByUserId(userId);
}

@Post()
addPost(@Body() post: PostsDTO){
    return this.postsService.addpost(post);
}

@Delete(':id')
deletePost(@Param('id') id:number){
    return this.postsService.removepost(id);
}

@Put()
updatePost(@Body() post: PostsDTO){
    return this.postsService.updatepost(post);
}

//////



}
