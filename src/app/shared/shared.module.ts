import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionCardComponent} from "./components/transaction-card/transaction-card.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {SelectMonthComponent} from "./components/select-month/select-month.component";
import {NavLinkComponent} from "./components/nav-link/nav-link.component";



@NgModule({
  declarations: [TransactionCardComponent, SelectMonthComponent, NavLinkComponent],
  exports: [
    TransactionCardComponent,
    SelectMonthComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
