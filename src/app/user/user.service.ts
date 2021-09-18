import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable()

export class UserService{
  constructor(
    private http: HttpClient
  ){}

  public getAllUsers(): Observable<UserModel>{
    return this.http.get<UserModel>('https://jsonplaceholder.typicode.com/users')
  }
}