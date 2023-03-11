import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionCardComponent} from "./components/transaction-card/transaction-card.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {SelectMonthComponent} from "./components/select-month/select-month.component";



@NgModule({
  declarations: [TransactionCardComponent, SelectMonthComponent],
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
