import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]> (`${this.baseURL}`+ 'users');
  }

  deleteUser(id:number): Observable<Object>{ 
    return this.httpClient.delete(`${this.baseURL}`+'users',{"body":{"id":id}});
   }

   updateUser(user:User): Observable<Object>{
    // console.log (user)
    return this.httpClient.put(`${this.baseURL}`+'users',user);
   }
}
