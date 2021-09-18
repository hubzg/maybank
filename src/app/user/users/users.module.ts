import { UserService } from './../user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPage } from './users.page';
import { Routes, RouterModule } from '@angular/router';
import { UserDataResolver } from './users.resolver';


const routes: Routes = [
  {
    path: '',
    resolve: {
      data: UserDataResolver
    },
    component: UsersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersPage],
  providers: [
    UserService,
    UserDataResolver
  ]
})
export class UsersPageModule {}
