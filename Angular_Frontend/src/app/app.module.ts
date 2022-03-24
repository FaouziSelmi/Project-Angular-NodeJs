import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prived/user-list/user-list.component';
// import{ HttpClientModule,} from '@angular/common/http';
import { LoginComponent } from './public/login/login.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { TestmaterielComponent } from './public/testmateriel/testmateriel.component';
import { InscriptionComponent } from './public/inscription/inscription.component';

//Providers
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt'
import { TokenInterceptorService } from './services/token-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    TestmaterielComponent,
    InscriptionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    MaterialModule
  
  ],
  providers: [
     //JWT
     {provide: JWT_OPTIONS, useValue:JWT_OPTIONS},
     JwtHelperService,
     // Token interceptor
     {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
