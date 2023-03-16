import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionCardComponent} from "./components/transaction-card/transaction-card.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {SelectMonthComponent} from "./components/select-month/select-month.component";
import {NavLinkComponent} from "./components/nav-link/nav-link.component";
import {TransactionListComponent} from "./components/transaction-list/transaction-list.component";



@NgModule({
  declarations: [TransactionCardComponent, TransactionListComponent, SelectMonthComponent, NavLinkComponent],
  exports: [
    TransactionCardComponent,
    SelectMonthComponent,
    TransactionListComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
