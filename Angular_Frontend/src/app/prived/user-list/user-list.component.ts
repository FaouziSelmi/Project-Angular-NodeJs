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
  showModaledit: boolean;
  showModaldelete:boolean
  iduserdelete:number;
  p:number=1;
users :any=[];
userEdit: User=new User();
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


    updateUser(){
      this.userService.updateUser(this.userEdit).subscribe((resultat)=>{
        this.ngOnInit();
      });
      this.showModaledit=false; 
      }

      showModaldeleteUser(id :number){
        this.iduserdelete=id;
        this.showModaldelete=true;
      }
      deleteUser(){
        this.userService.deleteUser(this.iduserdelete).subscribe((resultat)=>{
        // this.users = this.users.filter(item => item.identifiant !== this.iduserdelete);
        this.ngOnInit();
        });
        this.showModaldelete=false; 
      }

      showModalEdit(user: User){
         this.userEdit.identifiant=user.identifiant;
         this.userEdit.prenom=user.prenom;
         this.userEdit.nom=user.nom;
         this.userEdit.email=user.email;
         this.userEdit.password=user.password;
         this.userEdit.roleuser=user.roleuser;
         this.userEdit.idDir=user.idDir;
        this.showModaledit=true
      }

      
    // search(){
    //   if (this.firstName==""){
    //          this.ngOnInit();
    //   }else{
    //     this.employees=this.employees.filter(res =>{
    //       return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    //     });
    //   }
    // }
    key: string='id';
    reverse: boolean=false;
    sort(key){
      this.key=key;
      this.reverse=!this.reverse
    }
}
