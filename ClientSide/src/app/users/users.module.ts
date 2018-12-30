import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersService} from "./users.service";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
