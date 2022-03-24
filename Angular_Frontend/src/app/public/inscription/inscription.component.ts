import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/entity/direction';
import { User } from 'src/app/entity/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: User=new User();
  directions: any=[];
  constructor() { }

  ngOnInit(): void {
  }
  addUser(userForm: any){

  }
}
