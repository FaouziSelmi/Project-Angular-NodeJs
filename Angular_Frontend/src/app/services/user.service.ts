import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../entity/direction';
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
  addUser(user:User): Observable<object>{
   // console.log (user)
    return this.httpClient.post(`${this.baseURL}`+'users',user);
  }
  updateUser(user:User): Observable<Object>{
    // console.log (user)
    return this.httpClient.put(`${this.baseURL}`+'users',user);
   }
  deleteUser(id:number): Observable<Object>{ 
    return this.httpClient.delete(`${this.baseURL}`+'users',{"body":{"id":id}});
   }

   
}
