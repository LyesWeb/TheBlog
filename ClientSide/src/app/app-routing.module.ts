import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {PostsComponent} from "./posts/posts.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContactComponent} from "./contact/contact.component";
import { AddPostComponent } from './add-post/add-post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PostsByUserComponent } from './posts-by-user/posts-by-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserDetailComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:postId', component: PostDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'addPost/:id', component: AddPostComponent},
  {path: 'posts/user/:id', component: PostsByUserComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
