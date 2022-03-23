import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prived/user-list/user-list.component';
import { LoginComponent } from './public/login/login.component';
import { TablefaouziComponent } from './tablefaouzi/tablefaouzi.component';

const routes: Routes = [
  {path:'users', component:UserListComponent},
  {path:'login', component:LoginComponent},
  {path:'test', component:TablefaouziComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
