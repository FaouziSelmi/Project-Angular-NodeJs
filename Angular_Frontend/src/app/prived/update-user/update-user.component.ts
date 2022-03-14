import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id:number;
user:User=new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onsubmit(){
    
  }
}
