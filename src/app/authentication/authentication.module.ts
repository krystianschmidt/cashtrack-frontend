import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {AppModule} from "../app.module";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {InputPwdComponent} from "./input-pwd/input-pwd.component";



@NgModule({
  declarations: [RegisterComponent, LoginComponent, InputPwdComponent],
  imports: [
    AuthRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
