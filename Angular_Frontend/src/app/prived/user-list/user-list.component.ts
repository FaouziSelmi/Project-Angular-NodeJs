import { Component, OnInit } from '@angular/core';
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
  showModaledit: boolean;
  showModaldelete:boolean
  iduserdelete:number;
  showModaladd:boolean;
  p:number=1;
users :any=[];
//directions: Direction[];  erreur ????
directions: any=[]
user: User=new User();
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  private getUsersList(){
    this.userService.getUsers().subscribe(data=>{
      this.users=data[0];
      this.directions=data[1];
     //console.log(data);
    })
    }

    addUser(identifiant: any, nom:any, prenom: any, email:any, password:any, idDir:any, roleuser:any){
      console.log (this.user)
      this.userService.addUser(this.user).subscribe(data =>{
       // console.log(JSON.parse(JSON.stringify(data)));
       this.ngOnInit();
       
      })
      //error =>console.log(error));
      this.showModaladd=false; 
      this.user=new User();    
    }
    updateUser(){
      this.userService.updateUser(this.user).subscribe((resultat)=>{
        this.ngOnInit();
        this.user=new User();
      });
      this.showModaledit=false; 
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
        this.showModaldelete=false; 
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
      
    // search(){
    //   if (this.firstName==""){
    //          this.ngOnInit();
    //   }else{
    //     this.employees=this.employees.filter(res =>{
    //       return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    //     });
    //   }
    // }
    getEmployeByDir(identifiant: string){

    }
    key: string='id';
    reverse: boolean=false;
    sort(key){
      this.key=key;
      this.reverse=!this.reverse
    }
}
