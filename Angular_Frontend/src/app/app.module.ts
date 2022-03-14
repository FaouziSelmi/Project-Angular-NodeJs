import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prived/user-list/user-list.component';
import { UpdateUserComponent } from './prived/update-user/update-user.component';
import{ HttpClientModule,} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
