import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, UsersService],
})
export class PostsModule {}
