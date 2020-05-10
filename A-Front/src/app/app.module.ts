import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavibarComponent } from './components/navibar/navibar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import{ AuthService } from './service/auth.service'

const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
