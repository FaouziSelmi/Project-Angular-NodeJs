import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Direction } from 'src/app/entity/direction';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  firstName: any;
  showModaledit: boolean;
  showModaldelete:boolean
  iduserdelete:number;
  showModaladd:boolean;
  showModalNotification: boolean;
  msg:string;
  p:number=1;
users :any=[];
usersForfilter :any=[];
//directions: Direction[];  erreur ????
directions: any=[]
user: User=new User();
identifiantSearch:number
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  private getUsersList(){
    this.userService.getUsers().subscribe(data=>{
      this.users=data[0];
      this.usersForfilter=data[0];
      this.directions=data[1];
     //console.log(data);
    })
    }

    addUser(userForm: NgForm){
     // console.log (this.user)
      this.userService.addUser(this.user).subscribe(data =>{
       // console.log(JSON.parse(JSON.stringify(data)));
       this.ngOnInit();
       
      })
      //error =>console.log(error));
      this.showModaladd=false;
      this.msg=" تم اضافة مستعمل جديد :)"
      this.showModalNotification=true; 
      this.user=new User();    
    }
    updateUser(userFormEdit: NgForm){
      this.userService.updateUser(this.user).subscribe((resultat)=>{
        this.ngOnInit();
        this.user=new User();
      });
      this.showModaledit=false;
      this.msg=" تم تحيين المعطى الحالي :)"
      this.showModalNotification=true; 
      }

      showModaldeleteUser(id :number){
        this.iduserdelete=id;
        this.showModaldelete=true;
      }
      deleteUser(){
        this.userService.deleteUser(this.iduserdelete).subscribe((resultat)=>{
        // this.users = this.users.filter(item => item.identifiant !== this.iduserdelete); ok fonctionnel 
        this.ngOnInit();
        });
        this.msg=" تم حذف المعطى الحالي :)"
        this.showModaldelete=false
        this.showModalNotification=true; 
      }

      showModalEdit(user: User){
         this.user.identifiant=user.identifiant;
         this.user.prenom=user.prenom;
         this.user.nom=user.nom;
         this.user.email=user.email;
         this.user.password=user.password;
         this.user.roleuser=user.roleuser;
         this.user.idDir=user.idDir;
        this.showModaledit=true
      }
    closeModal(){
      this.showModaledit=false;
      this.showModaladd=false;
      this.user=new User();
    }

    searchByIdentifiant(){
      if (this.identifiantSearch==null){
        this.users = this.usersForfilter;
      }else{
        this.users = this.usersForfilter.filter(item => item.identifiant == this.identifiantSearch);
      }
    }
    filterUserByDir(idDir: string){
     
      if (idDir !="null"){
        this.users = this.usersForfilter.filter(item => item.idDir == idDir);
      }else{
        this.users=this.usersForfilter;
      }
    }
    key: string='id';
    reverse: boolean=false;
    sort(key){
      this.key=key;
      this.reverse=!this.reverse
    }
   
    filterUserByPrenom(){
      if (this.firstName !=""){
        this.users = this.usersForfilter.filter(item => item.prenom == this.firstName);
      }else{
        this.users=this.usersForfilter;
      }
    }
}
