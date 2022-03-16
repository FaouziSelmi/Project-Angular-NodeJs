import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prived/user-list/user-list.component';
import { UpdateUserComponent } from './prived/update-user/update-user.component';
import{ HttpClientModule,} from '@angular/common/http';
import { LoginComponent } from './public/login/login.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UpdateUserComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
