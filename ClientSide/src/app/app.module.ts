import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {UsersService} from "./users/users.service";
import {HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PostsByUserComponent } from './posts-by-user/posts-by-user.component';
import { UpdatePostComponent } from './update-post/update-post.component';

import {Form, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    PostsComponent,
    PostDetailComponent,
    NotFoundComponent,
    NavBarComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AddPostComponent,
    AddUserComponent,
    PostsByUserComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
