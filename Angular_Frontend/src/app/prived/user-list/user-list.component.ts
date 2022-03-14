import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  firstName: any;
  p:number=1;
users : User[];
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  private getUsersList(){
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
     // console.log(data);
    })
    }
}
