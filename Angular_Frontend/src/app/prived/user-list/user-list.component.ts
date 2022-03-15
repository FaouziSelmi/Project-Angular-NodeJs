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
  showModal: boolean;
  p:number=1;
users : User[];
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


    updateUser(id:number){
      this.router.navigate(['edituser', id])
      }

      deleteUser(id:number){

      }
      showModalEdit(user: User){
         this.userEdit.identifiant=user.identifiant;
         this.userEdit.prenom=user.prenom;
         this.userEdit.nom=user.nom;
         this.userEdit.email=user.email;
         this.userEdit.password=user.password;
         this.userEdit.roleuser=user.roleuser;
         this.userEdit.idDir=user.idDir;
        this.showModal=true
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
