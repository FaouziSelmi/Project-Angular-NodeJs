import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  msg:string;
  hidden:boolean=true;
    userLogin={identifiant:'', password:''}
     
    constructor(private router: Router,
       private authService: AuthService) { }
  
      ngOnInit() {
      }
    
      logIn(){
   // console.log(this.userLogin);
    this.authService.login(this.userLogin).subscribe((res:any)=>{
      // console.log("response is:", res);
      // console.log("responsetoken is:", res.token);
        if (res.token===undefined){
        this.msg=" المعرف الوحيد او كلمة العبور غير صحيحة";
        this.hidden=false;
        }else{
           localStorage.setItem('token', res.token);
           this.router.navigate(['users']);
        }
  
  
     
    })
      }
  
    
    
    
 
}
