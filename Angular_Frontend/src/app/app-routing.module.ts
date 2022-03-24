import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './prived/user-list/user-list.component';
import { InscriptionComponent } from './public/inscription/inscription.component';
import { LoginComponent } from './public/login/login.component';
import { TestmaterielComponent } from './public/testmateriel/testmateriel.component';

const routes: Routes = [
  {path:'users', component:UserListComponent,canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'test', component:TestmaterielComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
