import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InfiniteScrollCustomEvent, IonInfiniteScroll} from "@ionic/angular";
import {exampleData} from "../../../example-data/transaction-card";
import {TransactionsService} from "../../../services/transactions/transactions.service";
import {Transaction} from "../../../shared/components/transaction-list/transaction-card/transaction-card.model";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  private _selectedMonth: number = 0;
  @Input() set selectedMonth(value: number){
    this._selectedMonth = value;

    this.transactionService.getTransactions(this._selectedMonth, new Date().getFullYear());
    this.transactionService.transactions$.subscribe(val => {
      this.transactions = val;
      console.log(val)
    })
  }

  get selectedMonth(){
    return this._selectedMonth;
  }

  transactions: Transaction[] = [];

  async ngOnInit() {
  }


  constructor(public transactionService: TransactionsService) {
    this.selectedMonth = new Date().getMonth();
  }

}
