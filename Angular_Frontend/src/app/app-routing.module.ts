import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './prived/update-user/update-user.component';
import { UserListComponent } from './prived/user-list/user-list.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  {path:'users', component:UserListComponent},
  {path:'edituser/:id', component:UpdateUserComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
