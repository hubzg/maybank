import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../user.model';

@Injectable()
export class UserDataResolver implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve() {
    const users:Observable<UserModel> = this.userService.getAllUsers();

    return users;
  }
}
